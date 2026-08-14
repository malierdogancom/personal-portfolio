"use client";

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import SectionHeading from './SectionHeading';

export default function ResearchSection() {
    const { language } = useLanguage();
    const t = translations[language].research;

    return (
        <section id="research" className="py-24 border-b border-secondary">
            <div className="max-w-5xl mx-auto px-6">
                <SectionHeading label={language === 'en' ? 'the research bench' : 'araştırma tezgâhı'} accent="research">
                    {t.title}
                </SectionHeading>

                <div className="grid md:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
                    {t.interests.map((interest, index) => (
                        <div
                            key={index}
                            className="group bg-background p-7 flex flex-col gap-3 hover:bg-secondary/20 transition-colors"
                        >
                            <span
                                className="h-2.5 w-2.5 rounded-full"
                                style={{ background: 'var(--research)' }}
                            />
                            <h3 className="text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
                                {interest.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {interest.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
