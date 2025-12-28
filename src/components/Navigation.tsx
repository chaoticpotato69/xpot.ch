'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/vent', label: 'Vent' },
    { href: '/projects', label: 'Projects' },
    { href: '/tech', label: 'Tech' },
    { href: '/games', label: 'Games' },
    { href: '/status', label: 'Status' },
    { href: '/aboutme', label: 'About' },
    { href: '/dreams', label: 'Dreams' },
    { href: '/hottakes', label: 'Hot Takes' },
    { href: '/pictures', label: 'Pictures' },
    { href: '/suicide', label: 'Story' },
];

export default function Navigation() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="nav">
            <Link href="/" className="nav-logo">
                xpot.ch
            </Link>

            <button
                className="menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? 'Close' : 'Menu'}
            </button>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                {navItems.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
