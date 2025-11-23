import Link from "next/link";
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <a className={styles.headerLinks} href="mailto:nickshwrd@gmail.com"><img src="/gmail.png" alt="Email icon" className={styles.headerIcons}/>nickshwrd@gmail.com</a>
            <Link className={styles.headerLinks} href="/pages/about"><img src="/list.png" alt="About me icon" className={styles.headerIcons}/>About Me</Link>
            <Link className={styles.headerLinks} href="/pages/cv"><img src="/documents.png" alt="CV icon" className={styles.headerIcons}/>CV</Link>
        </header>
    );
}