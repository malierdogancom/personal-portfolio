"use client";

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { useState } from 'react';

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

    if (isSuccess) {
        return (
            <section id="contact" className="py-20 bg-secondary/20">
                <div className="max-w-xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-primary">{t.title}</h2>
                    <div className="p-8 bg-background rounded-xl border border-primary/20 shadow-lg">
                        <p className="text-xl text-foreground mb-2">
                            {language === 'en' ? 'Thanks for your message!' : 'Mesajınız için teşekkürler!'}
                        </p>
                        <p className="text-muted-foreground">
                            {language === 'en' ? "I'll get back to you soon." : "En kısa sürede size dönüş yapacağım."}
                        </p>
                        <button
                            onClick={() => setIsSuccess(false)}
                            className="mt-6 text-sm text-primary hover:underline"
                        >
                            {language === 'en' ? 'Send another message' : 'Başka bir mesaj gönder'}
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-20 bg-secondary/20">
            <div className="max-w-xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 text-center">{t.title}</h2>

                <div className="flex flex-col items-center gap-4 mb-10 text-muted-foreground">
                    <p className="flex items-center gap-2">
                        <span className="font-semibold text-primary">{t.email_label}</span> malierdgnn@gmail.com
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="font-semibold text-primary">{t.location_label}</span> Beylikdüzü, İstanbul
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">{t.form_name}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-3 rounded-lg bg-background border border-secondary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder={t.form_name_placeholder}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">{t.form_email}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-3 rounded-lg bg-background border border-secondary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder={t.form_email_placeholder}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">{t.form_message}</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg bg-background border border-secondary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder={t.form_message_placeholder}
                            required
                        ></textarea>
                    </div>

                    {error && (
                        <p className="text-destructive text-sm text-center">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (language === 'en' ? 'Sending...' : 'Gönderiliyor...') : t.form_button}
                    </button>
                </form>
            </div>
        </section>
    );
}
