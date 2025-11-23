import styles from './homePage.module.css';

export default function HomePage() {
    return (
        <div className={styles.homePageContainer}>
            <div>
                <h1>Hi I'm Nick Sheward, welcome to my personal website!</h1>
            </div>
            <div>
                <img src="/ghibli-me.png" alt="AI generated image of me in Studio Ghibli style" className={styles.homePageImage}/>
            </div>
        </div>
    );
}