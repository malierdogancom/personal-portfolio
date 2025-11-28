"use client";

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function Footer() {
    const { language } = useLanguage();
    const t = translations[language].footer;

    return (
        <footer className="border-t border-secondary py-8 mt-20">
            <div className="max-w-5xl mx-auto px-6 text-center text-muted-foreground text-sm">
                <p>&copy; {new Date().getFullYear()} Mehmet Ali Erdoğan. {t.rights}</p>
            </div>
        </footer>
    );
}
