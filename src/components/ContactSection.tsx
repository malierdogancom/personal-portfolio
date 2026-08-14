"use client";

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { useState } from 'react';
import SectionHeading from './SectionHeading';

export default function ContactSection() {
    const { language } = useLanguage();
    const t = translations[language].contact;

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });
            if (!res.ok) throw new Error('Failed');
            setIsSuccess(true);
            (e.target as HTMLFormElement).reset();
        } catch (err) {
            console.error('Error submitting form:', err);
            setError(language === 'en'
                ? 'Failed to send message. Please try again later.'
                : 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const statement = language === 'en'
        ? "Open to research collaborations, roles, and genuinely interesting problems. Drop a line - I read everything."
        : "Araştırma iş birlikleri, pozisyonlar ve gerçekten ilginç problemlere açığım. Bir satır yazın - hepsini okuyorum.";

    const inputClass = "w-full px-0 py-3 bg-transparent border-b border-secondary focus:border-primary outline-none transition-colors placeholder:text-muted-foreground/50";

    return (
        <section id="contact" className="py-24">
            <div className="max-w-5xl mx-auto px-6">
                <SectionHeading label={language === 'en' ? 'say hello' : 'merhaba de'}>{t.title}</SectionHeading>

                <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                    {/* Left: statement + coordinates */}
                    <div>
                        <p className="text-2xl md:text-3xl font-medium leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
                            {statement}
                        </p>

                        <div className="mt-10 space-y-4 font-mono text-sm">
                            <a href="mailto:erdoganmeh25@itu.edu.tr" className="block text-primary text-lg hover:underline underline-offset-4">
                                erdoganmeh25@itu.edu.tr ↗
                            </a>
                            <p className="text-muted-foreground">Beylikdüzü, İstanbul</p>
                            <div className="flex gap-6 pt-2 text-muted-foreground">
                                <a href="https://github.com/MaliErdgn" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub ↗</a>
                                <a href="https://linkedin.com/in/malierdgnn" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn ↗</a>
                            </div>
                        </div>
                    </div>

                    {/* Right: form */}
                    <div>
                        {isSuccess ? (
                            <div className="border border-primary/30 rounded-xl p-8">
                                <p className="text-xl font-semibold mb-2">
                                    {language === 'en' ? 'Thanks for your message!' : 'Mesajınız için teşekkürler!'}
                                </p>
                                <p className="text-muted-foreground">
                                    {language === 'en' ? "I'll get back to you soon." : "En kısa sürede size dönüş yapacağım."}
                                </p>
                                <button onClick={() => setIsSuccess(false)} className="mt-6 font-mono text-sm text-primary hover:underline">
                                    {language === 'en' ? '← Send another' : '← Başka bir mesaj gönder'}
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">{t.form_name}</label>
                                    <input type="text" id="name" name="name" className={inputClass} placeholder={t.form_name_placeholder} required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">{t.form_email}</label>
                                    <input type="email" id="email" name="email" className={inputClass} placeholder={t.form_email_placeholder} required />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">{t.form_message}</label>
                                    <textarea id="message" name="message" rows={4} className={inputClass} placeholder={t.form_message_placeholder} required></textarea>
                                </div>

                                {error && <p className="text-destructive text-sm">{error}</p>}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-7 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (language === 'en' ? 'Sending...' : 'Gönderiliyor...') : t.form_button}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
