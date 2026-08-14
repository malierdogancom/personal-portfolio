"use client";

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import SectionHeading from './SectionHeading';

export default function PublicationsSection() {
    const { language } = useLanguage();
    // @ts-ignore
    const t = translations[language].publications;

    return (
        <section id="publications" className="py-24 border-b border-secondary">
            <div className="max-w-5xl mx-auto px-6">
                <SectionHeading label={language === 'en' ? 'peer-reviewed' : 'hakemli'} accent="research">
                    {t.title}
                </SectionHeading>

                <ol className="space-y-px bg-line border border-line rounded-2xl overflow-hidden">
                    {/* @ts-ignore */}
                    {t.items.map((pub: any, index: number) => (
                        <li key={index} className="group bg-background p-6 md:p-7 hover:bg-secondary/20 transition-colors">
                            <div className="flex flex-wrap items-center gap-3">
                                <span
                                    className="font-mono text-[11px] uppercase tracking-[0.16em] px-2 py-0.5 rounded-full"
                                    style={{ color: 'var(--research)', border: '1px solid color-mix(in srgb, var(--research) 35%, transparent)' }}
                                >
                                    {pub.type}
                                </span>
                                <span className="font-mono text-xs text-muted-foreground">{pub.year}</span>
                            </div>
                            <h4 className="mt-3 text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
                                {pub.title}
                            </h4>
                            <p className="text-muted-foreground mt-1.5">{pub.authors}</p>
                            <p className="text-sm text-muted-foreground/80 mt-1 italic">{pub.venue}</p>
                            {pub.doiUrl && (
                                <a
                                    href={pub.doiUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-3 font-mono text-xs text-primary hover:underline underline-offset-4"
                                >
                                    DOI {pub.doi} ↗
                                </a>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
