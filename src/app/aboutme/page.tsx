import type { Metadata } from 'next';
import { Code, Gamepad2, HelpCircle, Mail, Globe, Shield, Github, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Me - xpot.ch',
  description: 'Learn more about who I am - a developer from the EU passionate about technology and privacy.',
};

export default function AboutMePage() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>About Me</h1>
        <p>A little bit about who I am, while keeping my privacy.</p>
      </div>

      {/* Intro Section */}
      <section className="section">
        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="card-content">
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Hi, I am <strong>John</strong>. I am from the European Union and I created this website in 2025
              as a place to share my thoughts anonymously and freely. I am gay 🏳️‍🌈 and I am passionate about
              technology and software development.
            </p>
          </div>
        </div>
      </section>

      {/* Programming & Tech */}
      <section className="section">
        <h2 className="section-title">
          <Code size={20} style={{ display: 'inline', marginRight: '0.5rem' }} />
          Programming & Tech
        </h2>
        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="card-content">
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              My favorite tools for building projects are <strong>Next.js</strong>, <strong>React</strong>,
              and <strong>Python</strong>. I am currently learning <strong>Rust</strong>, although I am still
              in the early stages of running tests and experiments.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              I appreciate Apple products and their design, even though I do not have the budget to purchase
              them at the moment.
            </p>
            <p style={{ lineHeight: '1.8' }}>
              I also have a strong dislike for the fact that the entire internet is centralized around
              the <code>.com</code> domain.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <span className="glass-badge">Next.js</span>
              <span className="glass-badge">React</span>
              <span className="glass-badge">Python</span>
              <span className="glass-badge">Rust (learning)</span>
              <span className="glass-badge">TypeScript</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming */}
      <section className="section">
        <h2 className="section-title">
          <Gamepad2 size={20} style={{ display: 'inline', marginRight: '0.5rem' }} />
          Gaming
        </h2>
        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="card-content">
            <p style={{ lineHeight: '1.8' }}>
              When I am not coding, I mostly play <strong>shooting games</strong>. I do not have a fixed
              rotation of games and usually play whatever I feel like in the moment.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <h2 className="section-title">
          <HelpCircle size={20} style={{ display: 'inline', marginRight: '0.5rem' }} />
          FAQ
        </h2>
        <div className="grid grid-1" style={{ maxWidth: '800px', margin: '0 auto', gap: '1.5rem' }}>

          {/* Cloudflare */}
          <div className="glass-card">
            <div className="card-icon" style={{ marginBottom: '1rem' }}>
              <Shield size={20} />
            </div>
            <div className="card-content">
              <h3>Why did you choose Cloudflare?</h3>
              <p>
                I use Cloudflare because they provide free hosting and effective anti-DDoS services,
                which helps keep this site running smoothly.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="glass-card">
            <div className="card-icon" style={{ marginBottom: '1rem' }}>
              <Mail size={20} />
            </div>
            <div className="card-content">
              <h3>What is your contact information?</h3>
              <p>
                I do not share my phone number. You can contact me at{' '}
                <a href="mailto:john@xpot.ch" style={{ color: 'var(--accent-primary)' }}>john@xpot.ch</a>.
                I use Tuta for my email service. You are welcome to send me a message, but please avoid
                sending spam. I will block the entire domain of anyone who sends unsolicited commercial content.
              </p>
            </div>
          </div>

          {/* Swiss Domain */}
          <div className="glass-card">
            <div className="card-icon" style={{ marginBottom: '1rem' }}>
              <Globe size={20} />
            </div>
            <div className="card-content">
              <h3>Why did you choose a .ch domain?</h3>
              <p>
                I chose a Swiss domain because it is neutral and does not reveal personal information easily.
                Switzerland is not part of the European Union or other global communities, meaning they do not
                block domains based on opinions or potential disinformation. To block a domain in Switzerland,
                someone would have to go through the Swiss court system, which is a much more difficult process.
              </p>
            </div>
          </div>

          {/* Age & Location */}
          <div className="glass-card">
            <div className="card-icon" style={{ marginBottom: '1rem' }}>
              <Shield size={20} />
            </div>
            <div className="card-content">
              <h3>How old are you and where are you from?</h3>
              <p>
                I keep my age and my specific country private for security reasons. If you would like to know
                more, you can ask me directly via email or on Discord.
              </p>
            </div>
          </div>

          {/* Money */}
          <div className="glass-card">
            <div className="card-icon" style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.2rem' }}>💸</span>
            </div>
            <div className="card-content">
              <h3>How much money do you have?</h3>
              <p>Not much.</p>
            </div>
          </div>

          {/* Open Source */}
          <div className="glass-card">
            <div className="card-icon" style={{ marginBottom: '1rem' }}>
              <Github size={20} />
            </div>
            <div className="card-content">
              <h3>Is this website open source?</h3>
              <p>
                Yes, this website is made with Next.js and the code is open source.
              </p>
              <a
                href="https://github.com/chaoticpotato69/xpot.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ marginTop: '0.75rem', display: 'inline-flex' }}
              >
                <Github size={16} />
                View on GitHub
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
