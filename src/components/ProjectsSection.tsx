"use client";

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function ProjectsSection() {
    const { language } = useLanguage();
    const t = translations[language].projects;

    return (
        <section id="projects" className="py-20">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">{t.title}</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {t.items.map((project, index) => (
                        <div key={index} className="p-6 border border-secondary rounded-xl hover:border-accent transition-colors flex flex-col h-full">
                            <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                            <p className="text-sm text-accent mb-3">{project.tech}</p>
                            <p className="text-muted-foreground flex-grow">{project.description}</p>
                        </div>
                    ))}
                </div>

                <h3 className="text-2xl font-bold mb-8 text-center">{t.awards_title}</h3>
                <div className="max-w-3xl mx-auto">
                    {t.awards.map((award, index) => (
                        <div key={index} className="p-6 bg-secondary/20 rounded-xl border border-secondary flex justify-between items-center">
                            <div>
                                <h4 className="text-lg font-semibold text-primary">{award.title}</h4>
                                <p className="text-muted-foreground">{award.event}</p>
                            </div>
                            <span className="text-sm font-medium px-3 py-1 bg-accent/10 text-accent rounded-full">{award.year}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
