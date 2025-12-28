import type { Metadata } from 'next';
import { Flame, Zap, Bot, Globe, Shield, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Hot Takes - xpot.ch',
    description: 'My controversial opinions and hot takes. You might not agree.',
};

export default function HotTakesPage() {
    return (
        <div className="container">
            <div className="page-header">
                <h1>🔥 Hot Takes</h1>
                <p>Opinions you might not agree with. These change frequently — maybe even weekly.</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                {/* USB-C */}
                <div className="glass-card" style={{
                    borderLeft: '3px solid var(--accent-primary)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div className="card-icon" style={{ flexShrink: 0 }}>
                            <Zap size={20} />
                        </div>
                        <div className="card-content">
                            <h3>#1: USB-C Should Have Been Everywhere Ages Ago</h3>
                            <p style={{ marginTop: '0.75rem', lineHeight: '1.7' }}>
                                I don't understand why everyone keeps inventing their own damn chargers.
                                I have a billion of them at home. Just use USB-C for everything already!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Microsoft AI */}
                <div className="glass-card" style={{
                    borderLeft: '3px solid #ff5050'
                }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div className="card-icon" style={{ flexShrink: 0 }}>
                            <Bot size={20} style={{ color: '#ff5050' }} />
                        </div>
                        <div className="card-content">
                            <h3>#2: Microsoft Needs to Stop Shoving AI Into Everything</h3>
                            <p style={{ marginTop: '0.75rem', lineHeight: '1.7' }}>
                                Why the fuck does Microsoft keep cramming their shitty AI into all their products?
                                It's slowing down older devices and the AI is complete garbage anyway. Just stop.
                            </p>
                        </div>
                    </div>
                </div>

                {/* .com Centralization */}
                <div className="glass-card" style={{
                    borderLeft: '3px solid #ffc800'
                }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div className="card-icon" style={{ flexShrink: 0 }}>
                            <Globe size={20} style={{ color: '#ffc800' }} />
                        </div>
                        <div className="card-content">
                            <h3>#3: Stop Centralizing Everything Around .com</h3>
                            <p style={{ marginTop: '0.75rem', lineHeight: '1.7' }}>
                                It's time to stop building the entire internet around US-based .com domains.
                                People need to start using more independent domains like Swiss .ch —
                                that's literally why I'm here.
                            </p>
                        </div>
                    </div>
                </div>

                {/* UK Government */}
                <div className="glass-card" style={{
                    borderLeft: '3px solid #ff3366'
                }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div className="card-icon" style={{ flexShrink: 0 }}>
                            <Shield size={20} style={{ color: '#ff3366' }} />
                        </div>
                        <div className="card-content">
                            <h3>#4: The UK Government Is Not Democratic</h3>
                            <p style={{ marginTop: '0.75rem', lineHeight: '1.7' }}>
                                They want to restrict VPN access. The Online Safety Act forces ID verification
                                on any site that might have adult content. This is bullshit. When one massive
                                security breach happens — and it will — they'll have nothing to say.
                                It's slowly becoming a dictatorship.
                            </p>
                        </div>
                    </div>
                </div>

                {/* EU Chat Control */}
                <div className="glass-card" style={{
                    borderLeft: '3px solid #9966ff'
                }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div className="card-icon" style={{ flexShrink: 0 }}>
                            <MessageSquare size={20} style={{ color: '#9966ff' }} />
                        </div>
                        <div className="card-content">
                            <h3>#5: EU Chat Control Protects Nobody</h3>
                            <p style={{ marginTop: '0.75rem', lineHeight: '1.7' }}>
                                It's just garbage legislation so they can spy on what we write to each other.
                                They don't give a shit about protecting anyone. It's surveillance dressed up
                                as safety. Fuck off.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Disclaimer */}
            <div className="glass-card" style={{ maxWidth: '600px', margin: '3rem auto 0', opacity: 0.7 }}>
                <div className="card-content" style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '0.85rem' }}>
                        These are my personal opinions. You're free to disagree.
                        That's what free speech is about. 🤷
                    </p>
                </div>
            </div>
        </div>
    );
}

