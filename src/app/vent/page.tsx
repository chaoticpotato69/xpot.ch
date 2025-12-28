import type { Metadata } from 'next';
import { Calendar, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Vent - xpot.ch',
    description: 'A space where I share my mental state and feelings. Raw and unfiltered.',
};

export default function VentPage() {
    return (
        <div className="container">
            <div className="page-header">
                <h1>💭 Vent</h1>
                <p>A space where I share my mental state and feelings. Raw and unfiltered.</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                {/* Vent Entry Preview #1 */}
                <Link href="/vent/first-breath" style={{ textDecoration: 'none' }}>
                    <article className="glass-card" style={{ cursor: 'pointer', transition: 'transform 0.2s, border-color 0.2s' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={14} />
                                December 28, 2025
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Heart size={14} style={{ color: '#ff6496' }} />
                                Overwhelmed but finally speaking up
                            </span>
                        </div>

                        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                            First Breath
                        </h2>

                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                            Honestly, I've been staring at this blank screen for a while, not knowing how to start.
                            But I guess that's the whole point of this place. No more overthinking...
                        </p>

                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--accent-primary)',
                            fontSize: '0.9rem'
                        }}>
                            Read more <ArrowRight size={14} />
                        </span>
                    </article>
                </Link>

                {/* More to come */}
                <div className="glass-card" style={{ opacity: 0.6, textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-muted)' }}>
                        More entries will appear here as I continue to process and share. 🤍
                    </p>
                </div>

            </div>
        </div>
    );
}
