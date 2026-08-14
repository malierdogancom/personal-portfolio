"use client";

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import SectionHeading from './SectionHeading';

export default function AwardsSection() {
    const { language } = useLanguage();
    // @ts-ignore
    const t = translations[language].projects; // shares awards_title + awards

    return (
        <section id="awards" className="py-24 border-b border-secondary">
            <div className="max-w-5xl mx-auto px-6">
                <SectionHeading label={language === 'en' ? 'out in the field' : 'sahada'} accent="research">
                    {t.awards_title}
                </SectionHeading>

                <div className="border-t border-line">
                    {/* @ts-ignore */}
                    {t.awards.map((award: any, index: number) => (
                        <div key={index} className="group grid md:grid-cols-12 gap-x-6 gap-y-1 py-6 border-b border-line items-baseline">
                            <div className="md:col-span-2 font-mono text-sm" style={{ color: 'var(--research)' }}>{award.year}</div>
                            <h4 className="md:col-span-4 text-lg font-semibold group-hover:text-primary transition-colors">{award.title}</h4>
                            <p className="md:col-span-6 text-muted-foreground">{award.event}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
