"use client";

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function PublicationsSection() {
    const { language } = useLanguage();
    // @ts-ignore
    const t = translations[language].publications;

    return (
        <section id="publications" className="py-20 bg-secondary/20">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">{t.title}</h2>

                <div className="max-w-3xl mx-auto space-y-6">
                    {/* @ts-ignore */}
                    {t.items.map((pub: any, index: number) => (
                        <div key={index} className="p-6 bg-background rounded-xl border border-secondary">
                            <span className="inline-block text-xs font-medium px-3 py-1 mb-3 bg-accent/10 text-accent rounded-full">{pub.type}</span>
                            <h4 className="text-lg font-semibold text-primary leading-snug">{pub.title}</h4>
                            <p className="text-muted-foreground mt-1">{pub.authors}</p>
                            <p className="text-sm text-muted-foreground/80 mt-1 italic">{pub.venue}, {pub.year}</p>
                            {pub.doiUrl && (
                                <a
                                    href={pub.doiUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-3 text-sm font-medium text-accent hover:underline"
                                >
                                    DOI: {pub.doi}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
