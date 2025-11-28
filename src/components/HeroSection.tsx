"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function HeroSection() {
    const { language } = useLanguage();
    const t = translations[language].hero;

    return (
        <section id="about" className="py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-8">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        {t.greeting} <span className="text-primary">Mehmet Ali Erdoğan</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-muted-foreground">
                        {t.title} <span className="text-primary font-semibold">{t.university}</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t.bio}
                    </p>

                    <div className="flex gap-4 text-sm text-muted-foreground justify-center">
                        <a href="https://github.com/MaliErdgn" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            github.com/MaliErdgn
                        </a>
                        <span>|</span>
                        <a href="https://linkedin.com/in/malierdgnn" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            linkedin.com/in/malierdgnn
                        </a>
                    </div>

                    <div className="flex gap-4 pt-4 justify-center">
                        <Link
                            href="#contact"
                            className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-accent transition-colors"
                        >
                            {t.cta_contact}
                        </Link>
                        <Link
                            href="#projects"
                            className="px-6 py-3 border border-secondary hover:border-primary hover:text-primary transition-colors rounded-lg font-medium"
                        >
                            {t.cta_projects}
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
