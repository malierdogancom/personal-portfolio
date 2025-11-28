"use client";

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function EducationSection() {
    const { language } = useLanguage();
    // @ts-ignore - Ignoring type check for now as translations structure is dynamic
    const t = translations[language].education;

    return (
        <section id="education" className="py-20 bg-background">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">{t.title}</h2>

                <div className="space-y-8">
                    {/* @ts-ignore */}
                    {t.items.map((item: any, index: number) => (
                        <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 border-l-2 border-primary/30 pl-6 relative">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                            <div className="md:w-1/4">
                                <span className="text-sm font-bold text-primary">{item.year}</span>
                            </div>
                            <div className="md:w-3/4 space-y-2">
                                <h3 className="text-xl font-bold">{item.degree}</h3>
                                <p className="text-lg text-muted-foreground">{item.university}</p>
                                {item.description && (
                                    <p className="text-muted-foreground/80">{item.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
