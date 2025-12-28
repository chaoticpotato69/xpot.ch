import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <p>
                © {new Date().getFullYear()} xpot.ch |
                <a href="https://github.com/chaoticpotato69/xpot.ch" target="_blank" rel="noopener noreferrer"> src</a> |
                <Link href="/privacypolicy"> privacy</Link>
            </p>
        </footer>
    );
}
