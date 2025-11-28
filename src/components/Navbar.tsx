"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function Navbar() {
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language].navbar;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="border-b border-secondary bg-background/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-primary" onClick={closeMenu}>
                    Mali Erdoğan
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="/" className="hover:text-primary transition-colors">{t.about}</Link>
                    <Link href="#education" className="hover:text-primary transition-colors">{t.education}</Link>
                    <Link href="#research" className="hover:text-primary transition-colors">{t.research}</Link>
                    <Link href="#projects" className="hover:text-primary transition-colors">{t.projects}</Link>
                    <Link href="#contact" className="hover:text-primary transition-colors">{t.contact}</Link>

                    <div className="flex items-center gap-2 border border-secondary rounded-full px-3 py-1 bg-secondary/30">
                        <button
                            onClick={() => language !== 'tr' && toggleLanguage()}
                            className={`text-xs font-bold transition-colors ${language === 'tr' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            TR
                        </button>
                        <span className="text-muted-foreground/30 text-xs">|</span>
                        <button
                            onClick={() => language !== 'en' && toggleLanguage()}
                            className={`text-xs font-bold transition-colors ${language === 'en' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            EN
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Controls */}
                <div className="md:hidden flex items-center gap-4">
                    <div className="flex items-center gap-2 border border-secondary rounded-full px-3 py-1 bg-secondary/30">
                        <button
                            onClick={() => language !== 'tr' && toggleLanguage()}
                            className={`text-xs font-bold transition-colors ${language === 'tr' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            TR
                        </button>
                        <span className="text-muted-foreground/30 text-xs">|</span>
                        <button
                            onClick={() => language !== 'en' && toggleLanguage()}
                            className={`text-xs font-bold transition-colors ${language === 'en' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            EN
                        </button>
                    </div>

                    <button onClick={toggleMenu} className="p-2 text-muted-foreground hover:text-primary transition-colors" aria-label="Toggle menu">
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-secondary bg-background/95 backdrop-blur-md absolute w-full left-0 top-16 shadow-lg">
                    <div className="flex flex-col p-6 gap-4 text-center font-medium">
                        <Link href="/" onClick={closeMenu} className="py-2 hover:text-primary transition-colors">{t.about}</Link>
                        <Link href="#education" onClick={closeMenu} className="py-2 hover:text-primary transition-colors">{t.education}</Link>
                        <Link href="#research" onClick={closeMenu} className="py-2 hover:text-primary transition-colors">{t.research}</Link>
                        <Link href="#projects" onClick={closeMenu} className="py-2 hover:text-primary transition-colors">{t.projects}</Link>
                        <Link href="#contact" onClick={closeMenu} className="py-2 hover:text-primary transition-colors">{t.contact}</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
