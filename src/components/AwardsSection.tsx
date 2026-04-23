"use client";

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function AwardsSection() {
    const { language } = useLanguage();
    // @ts-ignore
    const t = translations[language].projects; // Reusing projects translation for awards_title and awards

    return (
        <section id="awards" className="py-20 bg-secondary/20">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">{t.awards_title}</h2>
                {/* space-y-4 fixes the margin problem between award cards */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {/* @ts-ignore */}
                    {t.awards.map((award: any, index: number) => (
                        <div key={index} className="p-6 bg-secondary/20 rounded-xl border border-secondary flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                            <div>
                                <h4 className="text-lg font-semibold text-primary">{award.title}</h4>
                                <p className="text-muted-foreground">{award.event}</p>
                            </div>
                            <span className="text-sm font-medium px-3 py-1 bg-accent/10 text-accent rounded-full text-center whitespace-nowrap">{award.year}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
