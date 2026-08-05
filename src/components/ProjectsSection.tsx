"use client";

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function ProjectsSection() {
    const { language } = useLanguage();
    // @ts-ignore
    const t = translations[language].projects;

    // Preserve category order as they first appear in the items list
    const categories: string[] = [];
    // @ts-ignore
    t.items.forEach((p: any) => {
        if (!categories.includes(p.category)) categories.push(p.category);
    });

    return (
        <section id="projects" className="py-20">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">{t.title}</h2>

                <div className="space-y-12">
                    {categories.map((category: string) => (
                        <div key={category}>
                            <h3 className="text-lg font-semibold text-accent mb-6 border-b border-secondary pb-2">{category}</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* @ts-ignore */}
                                {t.items.filter((p: any) => p.category === category).map((project: any, index: number) => (
                                    <div key={index} className="p-6 border border-secondary rounded-xl hover:border-accent transition-colors flex flex-col h-full">
                                        <h4 className="text-xl font-semibold mb-2 text-primary">{project.title}</h4>
                                        <p className="text-sm text-accent mb-3">{project.tech}</p>
                                        <p className="text-muted-foreground flex-grow">{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
