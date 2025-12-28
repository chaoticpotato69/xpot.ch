import type { Metadata } from 'next';
import { Gamepad2, ExternalLink, Clock, Trophy, Crosshair, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Games - xpot.ch',
    description: 'Games I am currently playing and my Steam profile.',
};

export default function GamesPage() {
    return (
        <div className="container">
            <div className="page-header">
                <h1>🎮 Games</h1>
                <p>What I'm currently playing. Mostly shooters and casual games.</p>
            </div>

            {/* Steam Profile Link */}
            <div className="glass-section" style={{ marginTop: '0', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <div className="card-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
                        </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ marginBottom: '0.25rem' }}>Steam Profile</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            Check out my full gaming library and achievements
                        </p>
                    </div>
                    <a
                        href="https://steamcommunity.com/id/chaoticpotato69"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M12 2C6.48 2 2 5.98 2 10.86c0 2.1.84 4.03 2.22 5.52l-.02 3.12c0 .65.86.98 1.32.5l2.08-2.13c1.56.64 3.3.99 5.13.99 5.52 0 10-3.98 10-8.86S17.52 2 12 2zm-3.33 11.45L5.9 12.4l2.01-1.38 1.65 1.24c.38.29.91.22 1.21-.16.31-.38.24-.93-.14-1.22L8.08 9l1.77-1.15 2.37 2.81c.31.36.85.37 1.18.03.33-.34.33-.88-.01-1.22l-2.37-2.8 1.77-1.16 3.73 4.27c.32.37.28.92-.08 1.24-.36.32-.91.28-1.23-.09l-3.54-4.07-4.97 3.27c-.37.24-.51.73-.32 1.13l1.74 3.66c.19.4.66.55 1.04.35.38-.2.52-.68.33-1.08z" />
                        </svg>
                        View on Steam
                        <ExternalLink size={14} />
                    </a>
                </div>
            </div>

            {/* Shooter Games */}
            <section className="section">
                <h2 className="section-title">
                    <Crosshair size={20} style={{ display: 'inline', marginRight: '0.5rem' }} />
                    Shooter Games
                </h2>
                <div className="grid grid-3">
                    <div className="glass-card">
                        <div className="card-icon" style={{ marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🔫</span>
                        </div>
                        <div className="card-content">
                            <h3>Counter-Strike 2</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Competitive FPS</p>
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-icon" style={{ marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🎯</span>
                        </div>
                        <div className="card-content">
                            <h3>Fortnite</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Battle Royale</p>
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-icon" style={{ marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🏴‍☠️</span>
                        </div>
                        <div className="card-content">
                            <h3>One-armed robber</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Heist Game</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Party & Casual Games */}
            <section className="section">
                <h2 className="section-title">
                    <Users size={20} style={{ display: 'inline', marginRight: '0.5rem' }} />
                    Party & Casual Games
                </h2>
                <div className="grid grid-3">
                    <div className="glass-card">
                        <div className="card-icon" style={{ marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🫘</span>
                        </div>
                        <div className="card-content">
                            <h3>Fall Guys</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Battle Royale Party</p>
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-icon" style={{ marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🏃</span>
                        </div>
                        <div className="card-content">
                            <h3>Stumble Guys</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Multiplayer Party</p>
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-icon" style={{ marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🧱</span>
                        </div>
                        <div className="card-content">
                            <h3>Roblox</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Platform</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sandbox & Other */}
            <section className="section">
                <h2 className="section-title">
                    <Gamepad2 size={20} style={{ display: 'inline', marginRight: '0.5rem' }} />
                    Sandbox & Other
                </h2>
                <div className="grid grid-3">
                    <div className="glass-card">
                        <div className="card-icon" style={{ marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-primary)' }}>g</span>
                        </div>
                        <div className="card-content">
                            <h3>Garry's Mod</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Sandbox</p>
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-icon" style={{ marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>⛏️</span>
                        </div>
                        <div className="card-content">
                            <h3>Muck</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Survival Roguelike</p>
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-icon" style={{ marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🍗</span>
                        </div>
                        <div className="card-content">
                            <h3>Broilers</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Casual</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Note */}
            <div className="glass-card" style={{ maxWidth: '600px', margin: '2rem auto 0', opacity: 0.8 }}>
                <div className="card-content" style={{ textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        I don't have a fixed rotation of games — I play whatever I feel like in the moment.
                        Check my Steam for real-time activity! 🎮
                    </p>
                </div>
            </div>
        </div>
    );
}
