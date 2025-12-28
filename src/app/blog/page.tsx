import type { Metadata } from 'next';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Blog - xpot.ch',
    description: 'Tech deep-dives, geopolitical analysis, and critical thinking about the digital world.',
};

export default function BlogPage() {
    return (
        <div className="container">
            <div className="page-header">
                <h1>📝 Blog</h1>
                <p>Deep-dives into tech, sovereignty, and the digital frontier.</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                {/* Blog Post Preview #1 */}
                <Link href="/blog/hello-world" style={{ textDecoration: 'none' }}>
                    <article className="glass-card" style={{ cursor: 'pointer', transition: 'transform 0.2s, border-color 0.2s' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={14} />
                                December 28, 2025
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <User size={14} />
                                John
                            </span>
                        </div>

                        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                            Hello World: Tech, Sovereignty, and Navigating the New Digital Frontier
                        </h2>

                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                            Welcome to the very first post on my new website. This blog is born out of a necessity
                            for a dedicated space where technology meets critical thinking...
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

                {/* More posts coming soon */}
                <div className="glass-card" style={{ opacity: 0.6, textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-muted)' }}>
                        More posts coming soon. Stay tuned! 🚀
                    </p>
                </div>

            </div>
        </div>
    );
}
