"use client";

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function ResearchSection() {
    const { language } = useLanguage();
    const t = translations[language].research;

    return (
        <section id="research" className="py-20 bg-secondary/20">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">{t.title}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {t.interests.map((interest, index) => (
                        <div key={index} className="p-6 rounded-xl bg-secondary/40 border border-secondary hover:border-accent transition-colors">
                            <h3 className="text-xl font-semibold mb-3 text-primary">{interest.title}</h3>
                            <p className="text-muted-foreground">{interest.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
