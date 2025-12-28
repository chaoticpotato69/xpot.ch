import type { Metadata } from 'next';
import { Users, Plane, Wallet, Heart, GraduationCap, Scissors } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Dreams - xpot.ch',
    description: 'My dreams, goals, and aspirations for the future.',
};

export default function DreamsPage() {
    return (
        <div className="container">
            <div className="page-header">
                <h1>✨ Dreams & Goals</h1>
                <p>Things I'm working towards. Some closer than others.</p>
            </div>

            <div className="grid grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
                {/* Meet more people */}
                <div className="glass-card">
                    <div className="card-icon" style={{ marginBottom: '1rem' }}>
                        <Users size={24} />
                    </div>
                    <div className="card-content">
                        <h3>Meet More People</h3>
                        <p>
                            Expand my social circle and connect with like-minded individuals
                            who share my interests and values.
                        </p>
                    </div>
                </div>

                {/* Move out of EU */}
                <div className="glass-card">
                    <div className="card-icon" style={{ marginBottom: '1rem' }}>
                        <Plane size={24} />
                    </div>
                    <div className="card-content">
                        <h3>Move Out of the EU</h3>
                        <p>
                            Start fresh somewhere new. Explore different cultures
                            and find a place that feels like home.
                        </p>
                    </div>
                </div>

                {/* Financial freedom */}
                <div className="glass-card">
                    <div className="card-icon" style={{ marginBottom: '1rem' }}>
                        <Wallet size={24} />
                    </div>
                    <div className="card-content">
                        <h3>Financial Freedom</h3>
                        <p>
                            Build enough passive income and savings to not worry
                            about money and live life on my own terms.
                        </p>
                    </div>
                </div>

                {/* Find a boyfriend */}
                <div className="glass-card" style={{
                    background: 'linear-gradient(135deg, rgba(255, 100, 150, 0.05) 0%, rgba(0, 0, 0, 0.3) 100%)',
                    border: '1px solid rgba(255, 100, 150, 0.2)'
                }}>
                    <div className="card-icon" style={{ marginBottom: '1rem' }}>
                        <Heart size={24} style={{ color: '#ff6496' }} />
                    </div>
                    <div className="card-content">
                        <h3>Find a Boyfriend 🏳️‍🌈</h3>
                        <p>
                            Find someone special who gets me. Someone to share
                            life's adventures with.
                        </p>
                    </div>
                </div>

                {/* Finish school */}
                <div className="glass-card" style={{ opacity: 0.7 }}>
                    <div className="card-icon" style={{ marginBottom: '1rem' }}>
                        <GraduationCap size={24} />
                    </div>
                    <div className="card-content">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            Finish School
                            <span style={{
                                fontSize: '0.7rem',
                                background: 'rgba(255, 200, 0, 0.2)',
                                padding: '0.2rem 0.5rem',
                                borderRadius: '4px',
                                color: '#ffc800'
                            }}>
                                maybe xd
                            </span>
                        </h3>
                        <p>
                            Get that diploma... if I don't get too distracted
                            by more interesting things. 🤷
                        </p>
                    </div>
                </div>

                {/* Cut toxic people */}
                <div className="glass-card" style={{
                    background: 'linear-gradient(135deg, rgba(255, 50, 50, 0.05) 0%, rgba(0, 0, 0, 0.3) 100%)',
                    border: '1px solid rgba(255, 50, 50, 0.2)'
                }}>
                    <div className="card-icon" style={{ marginBottom: '1rem' }}>
                        <Scissors size={24} style={{ color: '#ff5050' }} />
                    </div>
                    <div className="card-content">
                        <h3>Cut Toxic People ✂️</h3>
                        <p>
                            Distance myself from toxic parents, family members,
                            and fake "friends" who drain my energy. Life's too
                            short for that.
                        </p>
                    </div>
                </div>
            </div>

            {/* Note at bottom */}
            <div className="glass-card" style={{ maxWidth: '600px', margin: '3rem auto 0', opacity: 0.8 }}>
                <div className="card-content" style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '0.9rem' }}>
                        These aren't just dreams — they're goals I'm actively working toward.
                        Step by step. 🚀
                    </p>
                </div>
            </div>
        </div>
    );
}

