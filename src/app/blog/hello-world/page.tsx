import type { Metadata } from 'next';
import { Calendar, User, Cpu, Scale, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Hello World: Tech, Sovereignty, and Navigating the New Digital Frontier - xpot.ch',
    description: 'Welcome to the very first post on my new website. Tech meets critical thinking.',
};

export default function HelloWorldPost() {
    return (
        <div className="container">
            {/* Back Link */}
            <Link
                href="/blog"
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
                Back to Blog
            </Link>

            {/* Blog Post */}
            <article style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="glass-card">
                    {/* Post Header */}
                    <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', lineHeight: '1.3' }}>
                            Hello World: Tech, Sovereignty, and Navigating the New Digital Frontier
                        </h1>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={14} />
                                December 28, 2025
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <User size={14} />
                                John
                            </span>
                        </div>
                    </div>

                    {/* Post Content */}
                    <div className="card-content" style={{ lineHeight: '1.9' }}>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                            Welcome to the very first post on my new website. I'm glad you're here.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            This blog is born out of a necessity for a dedicated space where technology meets
                            critical thinking. While the internet is full of quick takes and "bite-sized" content,
                            I believe that the complex challenges we face today require a more thorough,
                            long-form approach.
                        </p>

                        <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>What to Expect</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Moving forward, you can expect at least one deep-dive post every month.
                            These won't be surface-level summaries; they will be detailed, well-researched,
                            and technical explorations.
                        </p>

                        <p style={{ marginBottom: '1rem' }}>My primary focus will be twofold:</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem', paddingLeft: '1rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{
                                    background: 'rgba(0, 255, 136, 0.1)',
                                    padding: '0.5rem',
                                    borderRadius: '8px',
                                    flexShrink: 0
                                }}>
                                    <Cpu size={20} style={{ color: 'var(--accent-primary)' }} />
                                </div>
                                <div>
                                    <strong>Deep Technical Insights:</strong> Exploring the systems and architectures
                                    that shape our digital world.
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{
                                    background: 'rgba(255, 100, 100, 0.1)',
                                    padding: '0.5rem',
                                    borderRadius: '8px',
                                    flexShrink: 0
                                }}>
                                    <Scale size={20} style={{ color: '#ff6464' }} />
                                </div>
                                <div>
                                    <strong>Geopolitical & Regulatory Analysis:</strong> I plan to take a "hostile"
                                    (or at least highly critical) stance against overreaching legislation. Whether
                                    it is the EU, the USA, or other global entities proposing bizarre or restrictive
                                    laws that threaten digital freedom and innovation, I will be breaking down what
                                    those laws actually mean for us.
                                </div>
                            </div>
                        </div>

                        <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Why This Matters</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We are living in an era where technical sovereignty is becoming increasingly rare.
                            As regulations become more complex and often detached from technical reality,
                            it is vital to have a space where we can analyze these shifts without filters.
                        </p>

                        <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Stay Connected</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            All future updates, technical deep dives, and commentary will be hosted here at{' '}
                            <strong style={{ color: 'var(--accent-primary)' }}>xpot.ch/blog</strong>
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Thank you for your attention and for joining me on this journey.
                            I look forward to sharing the first major deep dive with you very soon.
                        </p>

                        <div style={{
                            marginTop: '2rem',
                            paddingTop: '1.5rem',
                            borderTop: '1px solid var(--border-color)',
                            color: 'var(--text-secondary)'
                        }}>
                            <p style={{ marginBottom: '0.5rem' }}>Best regards,</p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <strong>John</strong>
                                <a
                                    href="mailto:john@xpot.ch"
                                    style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                                >
                                    <Mail size={14} />
                                    john@xpot.ch
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
