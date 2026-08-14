import React from 'react';

/**
 * Section heading. The small label is a real name for the section, not a
 * decorative counter - the sections aren't a sequence. An optional accent
 * dot ties the section to one half of the identity (research / build).
 */
export default function SectionHeading({
    label,
    accent,
    children,
}: {
    label: string;
    accent?: 'research' | 'build';
    children: React.ReactNode;
}) {
    const dot = accent === 'build' ? 'var(--build)' : accent === 'research' ? 'var(--research)' : undefined;
    return (
        <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3">
                {dot && <span className="h-2 w-2 rounded-full" style={{ background: dot }} />}
                <span className="eyebrow">{label}</span>
                <span className="h-px flex-1 bg-line" />
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{children}</h2>
        </div>
    );
}
