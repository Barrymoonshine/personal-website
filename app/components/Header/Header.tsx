"use client";

import { useState } from "react";
import Link from "next/link";
import styles from './Header.module.css';

export default function Header() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <header>
            <nav className={styles.desktopNav}>
                <a className={styles.headerLinks} href="mailto:nickshwrd@gmail.com"><img src="/gmail.png" alt="Email icon" className={styles.headerIcons}/>nickshwrd@gmail.com</a>
                <Link className={styles.headerLinks} href="/pages/about"><img src="/list.png" alt="About me icon" className={styles.headerIcons}/>About Me</Link>
                <Link className={styles.headerLinks} href="/pages/cv"><img src="/documents.png" alt="CV icon" className={styles.headerIcons}/>CV</Link>
            </nav>
            <div className={styles.mobileHeader}>
                <button
                    type="button"
                    aria-label={open ? "Close menu" : "Open menu"}
                    className={styles.burgerButton}
                    onClick={() => setOpen(v => !v)}
                >
                    {open ? (
                        <nav className={styles.mobileMenu}>
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                              <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"></path>
                            </svg>
                            <a className={styles.headerLinks} href="mailto:nickshwrd@gmail.com"><img src="/gmail.png" alt="Email icon" className={styles.headerIcons}/>nickshwrd@gmail.com</a>
                            <Link className={styles.headerLinks} href="/pages/about"><img src="/list.png" alt="About me icon" className={styles.headerIcons}/>About Me</Link>
                            <Link className={styles.headerLinks} href="/pages/cv"><img src="/documents.png" alt="CV icon" className={styles.headerIcons}/>CV</Link>
                        </nav>                        
                    ) : (
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                            <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"></path>
                        </svg>
                    )}
                </button>
            </div>
        </header>
    );
}