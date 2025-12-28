import type { Metadata } from 'next';
import { Cpu, Monitor, Smartphone, Laptop, HardDrive, Headphones, Watch, Box, CircuitBoard, Fan, MemoryStick } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Tech - xpot.ch',
    description: 'My electronics and tech gear collection.',
};

export default function TechPage() {
    return (
        <div className="container">
            <div className="page-header">
                <h1>💻 Tech</h1>
                <p>All my electronics and tech gear. Constantly evolving.</p>
            </div>

            {/* Desktop PC Build */}
            <section className="section">
                <h2 className="section-title">🖥️ Desktop PC Build</h2>
                <div className="grid grid-2">
                    <div className="glass-card">
                        <div className="card-icon">
                            <Cpu size={20} />
                        </div>
                        <div className="card-content">
                            <h3>Processor</h3>
                            <p><strong>Intel Core Ultra 5 245KF</strong></p>
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-icon">
                            <span style={{ fontSize: '1.2rem' }}>🎮</span>
                        </div>
                        <div className="card-content">
                            <h3>Graphics Card</h3>
                            <p><strong>Intel Arc B580 Limited Edition</strong></p>
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-icon">
                            <CircuitBoard size={20} />
                        </div>
                        <div className="card-content">
                            <h3>Motherboard</h3>
                            <p><strong>ASRock B860M-X</strong></p>
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-icon">
                            <MemoryStick size={20} />
                        </div>
                        <div className="card-content">
                            <h3>RAM</h3>
                            <p><strong>ADATA XPG 32GB DDR5</strong></p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>6000MT/s CL30 Lancer Blade Black</p>
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-icon">
                            <HardDrive size={20} />
                        </div>
                        <div className="card-content">
                            <h3>Storage</h3>
                            <p><strong>Samsung 990 EVO Plus 2TB</strong></p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>NVMe SSD</p>
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-icon">
                            <Fan size={20} />
                        </div>
                        <div className="card-content">
                            <h3>CPU Cooler</h3>
                            <p><strong>Endorfy Fera 5 Dual Fan</strong></p>
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-icon">
                            <Box size={20} />
                        </div>
                        <div className="card-content">
                            <h3>Case</h3>
                            <p><strong>ADATA XPG Valor Mesh</strong></p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Black</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Monitor */}
            <section className="section">
                <h2 className="section-title">🖥️ Display</h2>
                <div className="grid grid-2">
                    <div className="glass-card">
                        <div className="card-icon">
                            <Monitor size={20} />
                        </div>
                        <div className="card-content">
                            <h3>Monitor</h3>
                            <p><strong>AOC 24G4HRE</strong></p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>24" Gaming Monitor</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Devices */}
            <section className="section">
                <h2 className="section-title">📱 Mobile Devices</h2>
                <div className="grid grid-3">
                    <div className="glass-card">
                        <div className="card-icon">
                            <Smartphone size={20} />
                        </div>
                        <div className="card-content">
                            <h3>Phone</h3>
                            <p><strong>Google Pixel 7</strong></p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>128GB / 8GB RAM</p>
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-icon">
                            <Laptop size={20} />
                        </div>
                        <div className="card-content">
                            <h3>Laptop</h3>
                            <p><strong>HP 15-f2000</strong></p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Model: 30K17AV</p>
                        </div>
                    </div>

                    <div className="glass-card" style={{ opacity: 0.6 }}>
                        <div className="card-icon">
                            <Watch size={20} />
                        </div>
                        <div className="card-content">
                            <h3>Wearables</h3>
                            <p><strong>Xiaomi Watch</strong></p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Status: Lost 🤷</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Audio */}
            <section className="section">
                <h2 className="section-title">🎧 Audio</h2>
                <div className="grid grid-2">
                    <div className="glass-card">
                        <div className="card-icon">
                            <Headphones size={20} />
                        </div>
                        <div className="card-content">
                            <h3>Gaming Headset</h3>
                            <p><strong>HyperX Cloud Stinger 2 Core</strong></p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>PC Gaming Headset</p>
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-icon">
                            <Headphones size={20} />
                        </div>
                        <div className="card-content">
                            <h3>Casual Headphones</h3>
                            <p><strong>Sony</strong></p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Random pair for everyday use</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
