import styles from './homePage.module.css';
import Link from "next/link";

export default function HomePage() {
    return (
        <div className={styles.homePageContainer}>
            <div className={styles.content}>
                <h1 className={styles.heroHeading}>Hey, I’m Nick!</h1>

                <p className={styles.lead}>
                    I'm a self taught Software Engineer based in Bristol UK and a former Product Manager. Some of my skills include:
                </p>

                <ul className={styles.skillsList}>
                    <li>Experienced across the full stack, with a focus on backend development</li>
                    <li>AWS &amp; MongoDB qualified</li>
                    <li>sjjsjj</li>
                </ul>

                <Link href="pages/about" className={styles.ctaButton}><img src="/list.png" alt="About me icon" className={styles.headerIcons}/>About Me</Link>
            </div>
            <div>
                <img src="/ghibli-me.png" alt="AI generated image of me in Studio Ghibli style" className={styles.homePageImage}/>
            </div>
        </div>
    );
}