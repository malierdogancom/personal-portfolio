"use client";

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function TimelineSection() {
    const { language } = useLanguage();
    const tExp = (translations[language] as any).experience;
    const tEdu = (translations[language] as any).education;

    const ExpCard = ({ data }: { data: any }) => (
        <div className="p-6 bg-secondary/10 border border-secondary rounded-xl hover:border-accent transition-colors w-full h-full">
            <span className="text-sm font-bold text-accent mb-2 block">{data.date}</span>
            <h4 className="text-xl font-bold text-foreground mb-1">{data.role}</h4>
            <p className="text-lg font-medium text-foreground mb-4">{data.company}</p>
            <ul className="space-y-2 text-muted-foreground text-sm">
                {data.description.map((desc: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1 text-xs">•</span>
                        <span className="leading-relaxed">{desc}</span>
                    </li>
                ))}
            </ul>
        </div>
    );

    const EduCard = ({ data }: { data: any }) => (
        <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl hover:border-primary transition-colors w-full h-full">
            <span className="text-sm font-bold text-primary mb-2 block">{data.year}</span>
            <h4 className="text-xl font-bold text-foreground mb-1">{data.degree}</h4>
            <p className="text-lg text-muted-foreground mb-2">{data.university}</p>
            {data.description && <p className="text-sm text-muted-foreground/80">{data.description}</p>}
        </div>
    );

    // 1) High Precision Month Parsing
    const monthMap: Record<string, number> = {
        'jan': 0, 'ocak': 0,
        'feb': 1, 'şubat': 1, 'subat': 1,
        'mar': 2, 'mart': 2,
        'apr': 3, 'nisan': 3,
        'may': 4, 'mayıs': 4, 'mayis': 4,
        'jun': 5, 'haziran': 5,
        'jul': 6, 'temmuz': 6,
        'aug': 7, 'ağustos': 7, 'agustos': 7,
        'sep': 8, 'eylül': 8, 'eylul': 8,
        'oct': 9, 'ekim': 9,
        'nov': 10, 'kasım': 10, 'kasim': 10,
        'dec': 11, 'aralık': 11, 'aralik': 11,
    };

    const parseDateString = (dateStr: string) => {
        const currentYear = new Date().getFullYear(); // 2026

        const parts = dateStr.toLowerCase().split('-');
        const startPart = parts[0].trim();
        const endPart = parts[1] ? parts[1].trim() : '';

        const parsePart = (str: string, isEnd: boolean) => {
            if (str.includes('devam') || str.includes('present')) {
                return { year: currentYear, month: 11 };
            }
            const yearMatch = str.match(/\d{4}/);
            const year = yearMatch ? parseInt(yearMatch[0]) : currentYear;

            let month = isEnd ? 11 : 0;
            for (const [key, val] of Object.entries(monthMap)) {
                if (str.includes(key)) {
                    month = val;
                    break;
                }
            }
            return { year, month };
        };

        const start = parsePart(startPart, false);
        const end = parts.length > 1 ? parsePart(endPart, true) : { year: start.year, month: 11 };

        return { start, end };
    };

    const processItems = (items: any[], type: 'edu' | 'exp') => {
        return items.map((item, idx) => {
            const timeStr = item.year || item.date;
            const dates = parseDateString(timeStr);
            return { ...item, _start: dates.start, _end: dates.end, _id: `${type}-${idx}` };
        });
    };

    const allEdu = processItems(tEdu.items, 'edu');
    const allExp = processItems(tExp.items, 'exp');
    const allItems = [...allEdu, ...allExp];

    const maxYear = Math.max(...allItems.map(i => i._end.year));
    const minYear = Math.min(...allItems.map(i => i._start.year));
    const totalMonths = (maxYear - minYear + 1) * 12;

    // Grid Math: Row 1 = Dec maxYear, Row 12 = Jan maxYear
    const getRow = (year: number, month: number) => {
        return (maxYear - year) * 12 + (12 - month);
    };

    const yearList = Array.from({ length: maxYear - minYear + 1 }, (_, i) => maxYear - i);

    const assignGridProps = (items: any[]) => {
        // Map to exact rows
        const mapped = items.map(item => {
            // End date is chronologically later, so it is visually higher (smaller row index)
            const topRow = getRow(item._end.year, item._end.month);
            // Start date is chronologically earlier, so it is visually lower (larger row index)
            const bottomRow = getRow(item._start.year, item._start.month);

            // Span is bottom - top. Use max(1) to prevent 0 height for same-month items.
            let span = Math.max(1, bottomRow - topRow);

            return { ...item, topRow, bottomRow, rowSpan: span };
        });

        // Allocate columns by overlap (Greedy)
        mapped.sort((a, b) => a.topRow - b.topRow);

        const colBottoms = [0, 0];
        const assigned = mapped.map(item => {
            let col = 0;
            // Place in the same column if the previous item doesn't overlap (inclusive threshold)
            if (colBottoms[0] <= item.topRow) col = 0;
            else if (colBottoms[1] <= item.topRow) col = 1;
            else col = 0; // fallback overlap

            colBottoms[col] = Math.max(colBottoms[col], item.topRow + item.rowSpan);
            return { ...item, col };
        });

        // Determine which items can be full-width (i.e., no overlapping items)
        return assigned.map(item => {
            const overlaps = assigned.filter(other => {
                if (other._id === item._id) return false;
                const itemBottom = item.topRow + item.rowSpan;
                const otherBottom = other.topRow + other.rowSpan;
                // Strict overlap condition
                return item.topRow < otherBottom && other.topRow < itemBottom;
            });
            return { ...item, isFullWidth: overlaps.length === 0 };
        });
    };

    const eduGrid = assignGridProps(allEdu);
    const expGrid = assignGridProps(allExp);

    return (
        <section id="experience" className="py-20 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-4">
                        {language === 'en' ? 'Experience & Education Track' : 'Deneyim ve Eğitim Rotası'}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {language === 'en' ? 'A mapped view of my concurrent academic paths and professional roles.' : 'Eşzamanlı ilerleyen akademik eğitimlerim ve profesyonel rollerimin görünümü.'}
                    </p>
                </div>

                {/* DESKTOP GRID TIMELINE */}
                <div className="hidden xl:grid relative w-full gap-x-6 gap-y-0 items-start min-h-[800px]" style={{
                    gridTemplateColumns: "1fr 1fr 5rem 1fr 1fr",
                    gridTemplateRows: `repeat(${totalMonths}, minmax(1.5rem, auto))`
                }}>
                    {/* Continuous Center line */}
                    <div className="absolute top-8 bottom-8 left-1/2 w-[2px] bg-secondary/30 -translate-x-1/2 z-0" />

                    {/* Years Axis (Placing badge at month 6 of each year) */}
                    {yearList.map((year) => (
                        <div key={year} className="relative flex items-center justify-center z-10 w-full h-full" style={{ gridColumn: 3, gridRow: getRow(year, 6) }}>
                            <div className="absolute w-16 h-16 bg-background border-4 border-secondary text-foreground flex items-center justify-center font-bold shadow-lg rounded-full mt-8">
                                {year}
                            </div>
                        </div>
                    ))}

                    {/* Left Side: Educations */}
                    {eduGrid.map((item) => (
                        <div key={item._id} className="relative pr-8 z-10 w-full h-full flex justify-end pb-2" style={{
                            gridColumn: item.isFullWidth ? "1 / span 2" : (item.col === 0 ? 2 : 1),
                            gridRow: `${item.topRow} / span ${item.rowSpan}`
                        }}>
                            {/* Duration Indicator */}
                            <div className="absolute top-0 bottom-2 right-2 w-4 flex flex-col items-center">
                                <div className="w-3 h-3 bg-background border-2 border-primary rounded-full flex-shrink-0 z-10 mt-8" />
                                <div className="w-1 flex-grow bg-primary -my-1" />
                                <div className="w-3 h-3 bg-background border-2 border-primary rounded-full flex-shrink-0 z-10 mb-8" />
                            </div>

                            <div className="w-full pr-2 h-full py-4">
                                <EduCard data={item} />
                            </div>
                        </div>
                    ))}

                    {/* Right Side: Experiences */}
                    {expGrid.map((item) => (
                        <div key={item._id} className="relative pl-8 z-10 w-full h-full flex justify-start pb-2" style={{
                            gridColumn: item.isFullWidth ? "4 / span 2" : (item.col === 0 ? 4 : 5),
                            gridRow: `${item.topRow} / span ${item.rowSpan}`
                        }}>
                            {/* Duration Indicator */}
                            <div className="absolute top-0 bottom-2 left-2 w-4 flex flex-col items-center">
                                <div className="w-3 h-3 bg-background border-2 border-accent rounded-full flex-shrink-0 z-10 mt-8" />
                                <div className="w-1 flex-grow bg-accent -my-1" />
                                <div className="w-3 h-3 bg-background border-2 border-accent rounded-full flex-shrink-0 z-10 mb-8" />
                            </div>

                            <div className="w-full pl-2 h-full py-4">
                                <ExpCard data={item} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* TABLET / MOBILE TIMELINE */}
                <div className="xl:hidden space-y-16 mt-8">
                    {/* Experience Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-accent mb-8 flex items-center gap-2 text-left ml-2">
                            {language === 'en' ? 'Professional Experience' : 'Profesyonel Deneyim'}
                        </h3>
                        <div className="relative border-l-2 border-accent/30 pl-8 ml-4 pb-4 space-y-12">
                            {yearList.map(year => {
                                const yExp = allExp.filter(e => e._end.year === year);
                                if (yExp.length === 0) return null;
                                return (
                                    <div key={`mob-exp-${year}`} className="relative space-y-6">
                                        <div className="absolute -left-[58px] top-0 w-12 h-12 rounded-full bg-background border-4 border-accent flex items-center justify-center font-bold text-sm z-10">{year}</div>
                                        {yExp.map(item => <ExpCard key={item._id} data={item} />)}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="pt-4">
                        <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2 text-left ml-2">
                            {language === 'en' ? 'Educational Background' : 'Eğitim Geçmişi'}
                        </h3>
                        <div className="relative border-l-2 border-primary/30 pl-8 ml-4 pb-8 space-y-12">
                            {yearList.map(year => {
                                const yEdu = allEdu.filter(e => e._end.year === year);
                                if (yEdu.length === 0) return null;
                                return (
                                    <div key={`mob-edu-${year}`} className="relative space-y-6">
                                        <div className="absolute -left-[58px] top-0 w-12 h-12 rounded-full bg-background border-4 border-primary flex items-center justify-center font-bold text-sm z-10">{year}</div>
                                        {yEdu.map(item => <EduCard key={item._id} data={item} />)}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
