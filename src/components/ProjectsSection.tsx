"use client";

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import SectionHeading from './SectionHeading';

export default function ProjectsSection() {
    const { language } = useLanguage();
    // @ts-ignore
    const t = translations[language].projects;

    // category order as first seen
    const categories: string[] = [];
    // @ts-ignore
    t.items.forEach((p: any) => {
        if (!categories.includes(p.category)) categories.push(p.category);
    });

    // research (teal) vs build (amber) - HPC/research work is the research half
    const catColor = (category: string) =>
        /HPC|Research|Araştırma/i.test(category) ? 'var(--research)' : 'var(--build)';

    return (
        <section id="projects" className="py-24 border-b border-secondary">
            <div className="max-w-5xl mx-auto px-6">
                <SectionHeading label={language === 'en' ? 'the build' : 'inşa edilenler'} accent="build">
                    {t.title}
                </SectionHeading>

                <div className="space-y-12">
                    {categories.map((category: string) => {
                        const color = catColor(category);
                        return (
                            <div key={category} style={{ ['--cat' as string]: color } as React.CSSProperties}>
                                <h3 className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] mb-5" style={{ color: 'var(--cat)' }}>
                                    <span className="h-2 w-2 rounded-full" style={{ background: 'var(--cat)' }} />
                                    {category}
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {/* @ts-ignore */}
                                    {t.items.filter((p: any) => p.category === category).map((project: any, index: number) => (
                                        <div
                                            key={index}
                                            className="group relative rounded-xl border border-line bg-background p-6 hover:bg-secondary/20 transition-colors"
                                        >
                                            <span
                                                className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full opacity-40 group-hover:opacity-100 transition-opacity"
                                                style={{ background: 'var(--cat)' }}
                                            />
                                            <h4 className="text-lg font-semibold leading-snug pl-3">
                                                {project.title}
                                            </h4>
                                            <p className="mt-2 pl-3 text-sm text-muted-foreground leading-relaxed">
                                                {project.description}
                                            </p>
                                            <div className="mt-4 pl-3 flex flex-wrap gap-1.5">
                                                {project.tech.split(',').map((tech: string, i: number) => (
                                                    <span
                                                        key={i}
                                                        className="font-mono text-[11px] px-2 py-0.5 rounded-md text-muted-foreground"
                                                        style={{ border: '1px solid var(--line)' }}
                                                    >
                                                        {tech.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
