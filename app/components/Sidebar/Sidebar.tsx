"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";

const THEME_KEY = "theme";

export default function Sidebar() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        // default to dark if nothing stored
        const stored = typeof window !== "undefined" ? (localStorage.getItem(THEME_KEY) as "dark" | "light" | null) : null;
        const initial = stored || "dark";
        setTheme(initial);
        document.documentElement.classList.remove("theme-dark", "theme-light");
        document.documentElement.classList.add(initial === "dark" ? "theme-dark" : "theme-light");
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        localStorage.setItem(THEME_KEY, next);
        document.documentElement.classList.remove("theme-dark", "theme-light");
        document.documentElement.classList.add(next === "dark" ? "theme-dark" : "theme-light");
    };

    return (
        <aside className={styles.asideContainer}>
            <section className={styles.topSection}>
                <Link href="/" className={styles.sidebarIcons}><img src="/house.png" alt="Home icon" className={styles.sidebarIcons}/></Link>
                <button
                    type="button"
                    aria-label="Toggle dark / light mode"
                    className={styles.toggleButton}
                    onClick={toggleTheme}
                >
                    <span className={styles.toggleIcon}>
                        <svg
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="currentColor"
                            className={theme === "dark" ? styles.iconVisible : styles.iconHidden}
                            aria-hidden
                        >
                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                        </svg>
                        <svg
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="currentColor"
                            className={theme === "light" ? styles.iconVisible : styles.iconHidden}
                            aria-hidden
                        >
                            <path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.8 1.8-1.8zM1 13h3v-2H1v2zm10 9h2v-3h-2v3zm7.03-2.03l1.79 1.79 1.79-1.79-1.79-1.79-1.79 1.79zM20 11v2h3v-2h-3zM11 1h2v3h-2V1zm4.24 4.84l1.8-1.8 1.79 1.79-1.8 1.8-1.79-1.79zM12 6a6 6 0 100 12 6 6 0 000-12z" />
                        </svg>
                    </span>
                </button>
            </section>
            <div className={styles.subAsideContainer}>
                <section><a href="https://www.linkedin.com/in/nick-sheward-5a990977/"><img src="/linkedin.png" alt="LinkedIn icon" className={styles.sidebarIcons}/></a></section>
                <section><a href="https://github.com/Barrymoonshine"><img src="/github.png" alt="GitHub icon" className={styles.sidebarIcons}/></a></section>
            </div>
        </aside>
    );
}