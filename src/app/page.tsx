import Link from 'next/link';
import {
  MessageCircle,
  Moon,
  Flame,
  Gamepad2,
  Camera,
  Activity,
  Github,
  Mail,
  Code,
  ExternalLink,
  Heart,
  Cpu,
  Rocket,
  BookOpen,
  Users,
  AlertTriangle
} from 'lucide-react';

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">
          <span className="status-dot online"></span>
          <span>Currently Online</span>
        </div>

        <h1>Hey there, I'm chaoticpotato 👋</h1>

        <p>
          Welcome to my little corner of the internet! This is where I share my thoughts,
          stories, projects, and everything I'm passionate about. Feel free to explore and make yourself at home.
        </p>

        <div className="hero-links">
          <Link href="/blog" className="btn btn-primary">
            <BookOpen size={18} />
            Read Blog
          </Link>
          <Link href="/aboutme" className="btn">
            About Me
          </Link>
        </div>
      </section>

      {/* Discord Community Invite */}
      <section className="section">
        <div className="glass-page" style={{ marginTop: 0, background: 'linear-gradient(135deg, rgba(88, 101, 242, 0.08), rgba(255, 255, 255, 0.02))' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <div className="card-icon" style={{
              background: 'rgba(88, 101, 242, 0.2)',
              borderColor: 'rgba(88, 101, 242, 0.4)',
              boxShadow: '0 0 30px rgba(88, 101, 242, 0.3)'
            }}>
              <Users size={24} style={{ color: '#5865F2' }} />
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.15rem' }}>Join My Community 🎉</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                I have a small Discord community where everyone is welcome! Come hang out, chat, and be part of something chill.
              </p>
            </div>
            <a
              href="https://discord.gg/pVT3XTnjse"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                flexShrink: 0,
                background: 'linear-gradient(135deg, #5865F2, #4752C4)',
                borderColor: '#5865F2',
                boxShadow: '0 0 30px rgba(88, 101, 242, 0.4), 0 8px 32px rgba(88, 101, 242, 0.25)'
              }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Join Discord
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Story Section */}
      <section className="section">
        <div className="glass-section" style={{ marginTop: 0 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
            <div className="card-icon" style={{ background: 'rgba(239, 68, 68, 0.15)', borderColor: 'rgba(239, 68, 68, 0.3)' }}>
              <Heart size={24} style={{ color: '#ef4444' }} />
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>My Survival Story</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                I survived August 2025. It's a story I want to share to help others who might be going through similar struggles.
                If you're feeling alone, please know that you're not.
              </p>
            </div>
            <Link href="/suicide" className="btn" style={{ flexShrink: 0 }}>
              <Heart size={16} />
              Read My Story
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section">
        <h2 className="section-title">Explore</h2>
        <div className="grid grid-3">
          <Link href="/vent" className="card">
            <div className="card-icon">
              <MessageCircle size={20} />
            </div>
            <div className="card-content">
              <h3>Vent</h3>
              <p>Mental state updates</p>
            </div>
          </Link>

          <Link href="/dreams" className="card">
            <div className="card-icon">
              <Moon size={20} />
            </div>
            <div className="card-content">
              <h3>Dreams</h3>
              <p>Dream journal</p>
            </div>
          </Link>

          <Link href="/hottakes" className="card">
            <div className="card-icon">
              <Flame size={20} />
            </div>
            <div className="card-content">
              <h3>Hot Takes</h3>
              <p>Unpopular opinions</p>
            </div>
          </Link>

          <Link href="/games" className="card">
            <div className="card-icon">
              <Gamepad2 size={20} />
            </div>
            <div className="card-content">
              <h3>Games</h3>
              <p>Currently playing</p>
            </div>
          </Link>

          <Link href="/tech" className="card">
            <div className="card-icon">
              <Cpu size={20} />
            </div>
            <div className="card-content">
              <h3>Tech</h3>
              <p>My electronics</p>
            </div>
          </Link>

          <Link href="/projects" className="card">
            <div className="card-icon">
              <Rocket size={20} />
            </div>
            <div className="card-content">
              <h3>Projects</h3>
              <p>Open source work</p>
            </div>
          </Link>

          <Link href="/pictures" className="card">
            <div className="card-icon">
              <Camera size={20} />
            </div>
            <div className="card-content">
              <h3>Pictures</h3>
              <p>Photo gallery</p>
            </div>
          </Link>

          <Link href="/status" className="card">
            <div className="card-icon">
              <Activity size={20} />
            </div>
            <div className="card-content">
              <h3>Status</h3>
              <p>Service uptime</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <h2 className="section-title">Connect</h2>

        <div className="contact-grid">
          <a href="https://discord.gg/pVT3XTnjse" target="_blank" rel="noopener noreferrer" className="contact-item" style={{ borderColor: 'rgba(88, 101, 242, 0.4)' }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ color: '#5865F2' }}>
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <span>Discord Community</span>
            <ExternalLink size={14} className="external-icon" />
          </a>

          <div className="contact-item">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <span>chaoticpotato69</span>
          </div>

          <a href="https://github.com/chaoticpotato69" target="_blank" rel="noopener noreferrer" className="contact-item">
            <Github size={18} />
            <span>GitHub</span>
            <ExternalLink size={14} className="external-icon" />
          </a>

          <a href="https://steamcommunity.com/id/chaoticpotato69" target="_blank" rel="noopener noreferrer" className="contact-item">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 2C6.48 2 2 5.98 2 10.86c0 2.1.84 4.03 2.22 5.52l-.02 3.12c0 .65.86.98 1.32.5l2.08-2.13c1.56.64 3.3.99 5.13.99 5.52 0 10-3.98 10-8.86S17.52 2 12 2z" />
            </svg>
            <span>Steam</span>
            <ExternalLink size={14} className="external-icon" />
          </a>

          <a href="https://www.reddit.com/user/chaoticpotato690/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
            </svg>
            <span>Reddit</span>
            <ExternalLink size={14} className="external-icon" />
          </a>

          <a href="mailto:john@xpot.ch" className="contact-item">
            <Mail size={18} />
            <span>john@xpot.ch</span>
          </a>

          <a href="https://github.com/chaoticpotato69/xpot.ch" target="_blank" rel="noopener noreferrer" className="contact-item">
            <Code size={18} />
            <span>Source Code</span>
            <ExternalLink size={14} className="external-icon" />
          </a>
        </div>

        {/* External Links Warning */}
        <div className="glass-alert warning" style={{ marginTop: '1.5rem' }}>
          <AlertTriangle size={20} style={{ color: 'var(--yellow)', flexShrink: 0 }} />
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
            <strong style={{ color: 'var(--yellow)' }}>Note:</strong> Links marked with <ExternalLink size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> redirect to third-party websites where different privacy policies and terms of service apply.
          </p>
        </div>
      </section>
    </div>
  );
}
