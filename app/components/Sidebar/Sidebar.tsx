import Link from "next/link";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
    return (
        <aside className={styles.asideContainer}>
            <section>
                <Link href="/" className={styles.homeIcon}>NS</Link>
            </section>
            <div className={styles.subAsideContainer}>
                <section><a href="https://www.linkedin.com/in/nick-sheward-5a990977/"><img src="/linkedin.png" alt="LinkedIn icon" className={styles.sidebarIcons}/></a></section>
                <section><a href="https://github.com/Barrymoonshine"><img src="/github.png" alt="GitHub icon" className={styles.sidebarIcons}/></a></section>
            </div>
        </aside>
    );
}