"use client";

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function Footer() {
    const { language } = useLanguage();
    const t = translations[language].footer;

    const buildDate = process.env.NEXT_PUBLIC_BUILD_DATE
        ? new Date(process.env.NEXT_PUBLIC_BUILD_DATE).toLocaleDateString(
            language === 'tr' ? 'tr-TR' : 'en-GB',
            { day: 'numeric', month: 'long', year: 'numeric' }
          )
        : null;

    const updatedLabel = language === 'tr' ? 'Son güncelleme:' : 'Last updated:';

    return (
        <footer className="border-t border-secondary py-10">
            <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 font-mono text-xs text-muted-foreground">
                <p>© {new Date().getFullYear()} Mehmet Ali Erdoğan · {t.rights}</p>
                {buildDate && <p className="opacity-60">{updatedLabel} {buildDate}</p>}
            </div>
        </footer>
    );
}
