import type { Metadata } from 'next';
import { Shield, Globe, Server, BarChart3, ExternalLink, Scale, Lock, Mail } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Privacy Policy - xpot.ch',
    description: 'Privacy policy and legal information for xpot.ch - transparent data handling.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container">
            <div className="page-header">
                <h1>🔒 Privacy Policy</h1>
                <p>Last Updated: December 28, 2025</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {/* Intro */}
                <div className="glass-card" style={{ marginBottom: '1.5rem' }}>
                    <div className="card-content">
                        <p style={{ lineHeight: '1.8' }}>
                            This policy outlines exactly what happens to your data when you visit xpot.ch.
                            I'm not going to hide behind corporate jargon. The internet is a complex web of
                            infrastructure, and if you want to view this site, your data has to travel across it.
                            Here is the technical and legal reality of how that works.
                        </p>
                    </div>
                </div>

                {/* 1. Responsibility */}
                <section className="section">
                    <div className="glass-card">
                        <div className="card-icon" style={{ marginBottom: '1rem' }}>
                            <Mail size={20} />
                        </div>
                        <div className="card-content">
                            <h2 style={{ marginBottom: '1rem' }}>1. Responsibility</h2>
                            <p style={{ lineHeight: '1.8' }}>
                                My name is <strong>John</strong>, and I operate this website. If you have any questions,
                                concerns, or just want to talk about data sovereignty, you can reach me at{' '}
                                <a href="mailto:john@xpot.ch" style={{ color: 'var(--accent-primary)' }}>john@xpot.ch</a>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. DNS */}
                <section className="section">
                    <div className="glass-card">
                        <div className="card-icon" style={{ marginBottom: '1rem' }}>
                            <Globe size={20} />
                        </div>
                        <div className="card-content">
                            <h2 style={{ marginBottom: '1rem' }}>2. DNS: Your Request Starts at the Roots</h2>
                            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                                Before your browser even talks to my website, it has to find out where xpot.ch lives.
                                This process is called DNS resolution, and it involves global infrastructure that is
                                outside of my direct control.
                            </p>
                            <ul style={{ lineHeight: '2', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                                <li>
                                    <strong>Root Servers:</strong> Your DNS query first hits the global Root Name Servers
                                    (managed by organizations like ICANN and IANA, mostly based in the US but distributed worldwide).
                                    These servers tell your browser which servers handle the .ch extension.
                                </li>
                                <li>
                                    <strong>SWITCH (.ch):</strong> The request then goes to the authoritative servers for the
                                    Swiss TLD (.ch), managed by SWITCH in Switzerland.
                                </li>
                                <li>
                                    <strong>Jurisdictional Reality:</strong> Because of how the internet protocol works, your
                                    IP address and the fact that you are looking for xpot.ch are processed by these systems globally.
                                    This is a technical necessity. Without this global handshake, the web doesn't function.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 3. Infrastructure */}
                <section className="section">
                    <div className="glass-card">
                        <div className="card-icon" style={{ marginBottom: '1rem' }}>
                            <Server size={20} />
                        </div>
                        <div className="card-content">
                            <h2 style={{ marginBottom: '1rem' }}>3. Infrastructure: Cloudflare Workers & Global Edge</h2>
                            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                                I don't host this site on a single server in a basement. I use <strong>Cloudflare Workers</strong>,
                                which is a "serverless" edge computing platform.
                            </p>
                            <ul style={{ lineHeight: '2', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                                <li>
                                    <strong>Edge Execution:</strong> The code for xpot.ch runs on Cloudflare's "Edge."
                                    This is a network of over 300 data centers globally. When you request a page,
                                    the code executes at the data center closest to you to make it fast.
                                </li>
                                <li>
                                    <strong>Data Transit Beyond EU/Switzerland:</strong> Even though this is a .ch domain,
                                    your data (IP address, device headers, etc.) may be routed through and processed in regions
                                    outside of Switzerland and the European Union. This includes the United States or any other
                                    global Cloudflare Point of Presence (PoP). This is done to protect the site from DDoS attacks
                                    and to ensure high performance.
                                </li>
                                <li>
                                    <strong>Security Logs:</strong> Cloudflare logs technical metadata to identify and block
                                    malicious traffic. These logs are typically purged within 30 days. You can check their
                                    specifics here:{' '}
                                    <a
                                        href="https://www.cloudflare.com/privacypolicy/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'var(--accent-primary)' }}
                                    >
                                        Cloudflare Privacy Policy <ExternalLink size={12} style={{ display: 'inline' }} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 4. Analytics */}
                <section className="section">
                    <div className="glass-card">
                        <div className="card-icon" style={{ marginBottom: '1rem' }}>
                            <BarChart3 size={20} />
                        </div>
                        <div className="card-content">
                            <h2 style={{ marginBottom: '1rem' }}>4. Analytics: Umami (Privacy by Design)</h2>
                            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                                I want to know how many people visit the site, but I don't care who you are.
                                I don't use Google Analytics because I don't believe in cross-site tracking.
                                Instead, I use <strong>Umami Cloud</strong>.
                            </p>
                            <ul style={{ lineHeight: '2', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                                <li>
                                    <strong>Zero Cookies:</strong> Umami does not use cookies. It does not store anything
                                    on your device. It does not track you across other websites. You don't need to see a
                                    "cookie banner" here because there aren't any.
                                </li>
                                <li>
                                    <strong>Anonymization:</strong> Umami uses a temporary, rotating hash to count visitors.
                                    I can see that "someone" visited from a specific country using a specific browser,
                                    but I have no way to link that data back to you as an individual.
                                </li>
                                <li>
                                    <strong>EU Data Residency:</strong> While the website content is served globally via Cloudflare,
                                    I have specifically configured my Umami Cloud account to send and store all analytics data
                                    on servers located within the European Union (EU). This keeps the data within a high-protection
                                    legal jurisdiction.
                                </li>
                                <li>
                                    <strong>Umami Privacy:</strong>{' '}
                                    <a
                                        href="https://umami.is/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'var(--accent-primary)' }}
                                    >
                                        Umami Cloud Privacy Policy <ExternalLink size={12} style={{ display: 'inline' }} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 5. Third-Party Links */}
                <section className="section">
                    <div className="glass-card">
                        <div className="card-icon" style={{ marginBottom: '1rem' }}>
                            <ExternalLink size={20} />
                        </div>
                        <div className="card-content">
                            <h2 style={{ marginBottom: '1rem' }}>5. Third-Party Links</h2>
                            <p style={{ lineHeight: '1.8' }}>
                                My site contains links to other services—GitHub, social media, technical docs, etc.
                                Once you click those links, you are leaving my "zone." Those sites have their own
                                privacy policies and their own tracking methods. I am not responsible for what happens
                                once you leave xpot.ch.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. Your Rights */}
                <section className="section">
                    <div className="glass-card">
                        <div className="card-icon" style={{ marginBottom: '1rem' }}>
                            <Scale size={20} />
                        </div>
                        <div className="card-content">
                            <h2 style={{ marginBottom: '1rem' }}>6. Your Rights (FADP & GDPR)</h2>
                            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                                Under the <strong>Swiss Federal Act on Data Protection (nFADP/DSG)</strong> and the{' '}
                                <strong>EU GDPR</strong>, you have rights regarding your data.
                            </p>
                            <ul style={{ lineHeight: '2', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                                <li>
                                    <strong>The Reality of Anonymity:</strong> Because I use privacy-first tools,
                                    I generally do not have any personal data to give you. I don't have your name,
                                    your email, or your persistent IP address in a database.
                                </li>
                                <li>
                                    <strong>Requests:</strong> If you believe I have your data and want it deleted or moved,
                                    email me. Just be aware that because the site is designed to be anonymous,
                                    I likely won't be able to find a record that belongs to "you."
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 7. Security */}
                <section className="section">
                    <div className="glass-card">
                        <div className="card-icon" style={{ marginBottom: '1rem' }}>
                            <Lock size={20} />
                        </div>
                        <div className="card-content">
                            <h2 style={{ marginBottom: '1rem' }}>7. Security Protocols</h2>
                            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                                I take security seriously because it's part of privacy.
                            </p>
                            <ul style={{ lineHeight: '2', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                                <li>
                                    <strong>Encryption:</strong> Everything is forced over TLS 1.3 (HTTPS).
                                </li>
                                <li>
                                    <strong>Integrity:</strong> I use HSTS to prevent anyone from trying to downgrade
                                    your connection to an insecure one.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 8. Final Provisions */}
                <section className="section">
                    <div className="glass-card">
                        <div className="card-icon" style={{ marginBottom: '1rem' }}>
                            <Shield size={20} />
                        </div>
                        <div className="card-content">
                            <h2 style={{ marginBottom: '1rem' }}>8. Final Provisions</h2>
                            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                                I reserve the right to update this policy if I change my tech stack or if the law changes.
                                If I make big changes, I'll update the "Last Updated" date at the top.
                            </p>
                            <p style={{ lineHeight: '1.8', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                                <strong>Contact:</strong> John{' '}
                                <a href="mailto:john@xpot.ch" style={{ color: 'var(--accent-primary)' }}>john@xpot.ch</a>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
