import type { Metadata } from 'next';
import { Calendar, Mail, Heart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'First Breath - Vent - xpot.ch',
    description: 'My first vent. Raw and unfiltered thoughts about mental health.',
};

export default function FirstBreathVent() {
    return (
        <div className="container">
            {/* Back Link */}
            <Link
                href="/vent"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    marginBottom: '2rem'
                }}
            >
                <ArrowLeft size={16} />
                Back to Vent
            </Link>

            <article style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="glass-card">
                    {/* Header */}
                    <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
                        <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>
                            First Breath
                        </h1>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={14} />
                                December 28, 2025
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Mail size={14} />
                                john@xpot.ch
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="card-content" style={{ lineHeight: '1.9' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Honestly, I've been staring at this blank screen for a while, not knowing how to start.
                            But I guess that's the whole point of this place. No more overthinking. No more pretending.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            This is my first vent. I'm starting this platform on my web because I'm tired of
                            carrying everything inside. My mental state lately has been… a lot. It's heavy,
                            it's messy, and most days it feels like I'm just drowning in things I can't even name.
                            I'm exhausted—not the kind of exhausted that a night of sleep can fix, but the kind
                            that sits deep in your bones.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            I'm going to be posting these vents here regularly. Not because I'm looking for pity,
                            but because I need to get it out. I need a place where I can be honest about the fact
                            that I'm struggling, where I don't have to put on a mask for anyone.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            So, here it goes. The first of many. It's not pretty, but it's real.
                            And for now, that's enough.
                        </p>

                        {/* Mood Tag */}
                        <div style={{
                            marginTop: '2rem',
                            paddingTop: '1rem',
                            borderTop: '1px solid var(--border-color)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <Heart size={16} style={{ color: '#ff6496' }} />
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                <strong>Mood:</strong> Overwhelmed but finally speaking up.
                            </span>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
