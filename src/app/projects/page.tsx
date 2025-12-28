import type { Metadata } from 'next';
import { Github, ExternalLink, Code, GitBranch, Star } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Projects - xpot.ch',
    description: 'Open source projects I work on.',
};

export default function ProjectsPage() {
    return (
        <div className="container">
            <div className="page-header">
                <h1>🚀 Projects</h1>
                <p>Open source projects I'm working on or contributing to.</p>
            </div>

            {/* GitHub Profile */}
            <div className="glass-section" style={{ marginTop: '0', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <div className="card-icon">
                        <Github size={24} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ marginBottom: '0.25rem' }}>GitHub Profile</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            Check out all my repositories and contributions
                        </p>
                    </div>
                    <a
                        href="https://github.com/chaoticpotato69"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        <Github size={18} />
                        View GitHub
                        <ExternalLink size={14} />
                    </a>
                </div>
            </div>

            {/* Featured Projects */}
            <section className="section">
                <h2 className="section-title">Featured Projects</h2>
                <div className="grid grid-2">
                    <a href="https://github.com/chaoticpotato69/xpot.ch" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ textDecoration: 'none' }}>
                        <div className="card-icon">
                            <Code size={20} />
                        </div>
                        <div className="card-content">
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                xpot.ch
                                <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} />
                            </h3>
                            <p>This website - my personal space built with Next.js</p>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem' }}>
                                <span className="glass-badge">
                                    <GitBranch size={12} />
                                    Next.js
                                </span>
                                <span className="glass-badge">
                                    TypeScript
                                </span>
                            </div>
                        </div>
                    </a>

                    <div className="glass-card" style={{
                        background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, rgba(0, 0, 0, 0.3) 100%)',
                        border: '1px solid rgba(0, 255, 136, 0.2)'
                    }}>
                        <div className="card-icon" style={{ marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🔐</span>
                        </div>
                        <div className="card-content">
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Secret Project
                                <span style={{
                                    fontSize: '0.7rem',
                                    background: 'rgba(0, 255, 136, 0.2)',
                                    padding: '0.2rem 0.5rem',
                                    borderRadius: '4px',
                                    color: 'var(--accent-primary)'
                                }}>
                                    WIP
                                </span>
                            </h3>
                            <p style={{ color: 'var(--text-muted)' }}>
                                Something with <strong style={{ color: 'var(--accent-primary)' }}>end-to-end encryption</strong>...
                                That's all I can say for now. 🤫
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                                <span className="glass-badge">E2EE</span>
                                <span className="glass-badge">Privacy</span>
                                <span className="glass-badge">???</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contributions */}
            <section className="section">
                <h2 className="section-title">Contributions</h2>
                <div className="content-placeholder">
                    <p>Open source contributions coming soon...</p>
                </div>
            </section>
        </div>
    );
}
