"use client";

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function ExperienceSection() {
    const { language } = useLanguage();
    // @ts-ignore
    const t = translations[language].experience;

    return (
        <section id="experience" className="py-20 bg-background">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">{t.title}</h2>

                <div className="space-y-12">
                    {/* @ts-ignore */}
                    {t.items.map((item: any, index: number) => (
                        <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 border-l-2 border-accent/70 pl-6 relative">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
                            <div className="md:w-1/4">
                                <span className="text-sm font-bold text-accent">{item.date}</span>
                            </div>
                            <div className="md:w-3/4 space-y-3">
                                <h3 className="text-xl font-bold">{item.role}</h3>
                                <p className="text-lg font-medium text-primary">{item.company}</p>
                                <ul className="list-disc pl-5 space-y-1 text-muted-foreground marker:text-primary">
                                    {item.description.map((desc: string, i: number) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
