"use client";

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function Footer() {
    const { language } = useLanguage();
    const t = translations[language].footer;

    const buildDate = process.env.NEXT_PUBLIC_BUILD_DATE
        ? new Date(process.env.NEXT_PUBLIC_BUILD_DATE).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
        : null;

    return (
        <footer className="border-t border-secondary py-8 mt-20">
            <div className="max-w-5xl mx-auto px-6 text-center text-muted-foreground text-sm space-y-1">
                <p>&copy; {new Date().getFullYear()} Mehmet Ali Erdoğan. {t.rights}</p>
                {buildDate && <p className="text-xs opacity-50">Last updated: {buildDate}</p>}
            </div>
        </footer>
    );
}
