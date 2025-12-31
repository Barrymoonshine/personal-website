import Link from 'next/dist/client/link';
import styles from './About.module.css';

export default function AboutPage() {
    return (
           <div>
                <h1>About Me</h1>
                <div className={styles.aboutContainer}>
                    <div>
                        <p> Hey, I’m Nick — welcome to my website.</p>
                        <p>
                            I’m a backend-focused Software Engineer based in Bristol, UK. Before moving into engineering, I worked as a Product Manager, which left me with a lasting interest in how technology can solve real-world problems while balancing customer needs, business goals and the inevitable trade-offs that come with both. </p>
                        <p>
                            Most of my experience sits on the backend, working with TypeScript (Node.js) and C# (ASP.NET) with Datadog for monitoring and observability. I also hold AWS and MongoDB certifications. On the front-end side, I’ve mainly worked with React and Next.js, using TypeScript across the stack.  
                        </p>
                        <p>
                            Outside of work, I like to go to the gym, play the piano, collect vinyl records, and spend time with my family — including my cat, Mr Sprinkles.
                        </p>
                         <p>
                            I'm always keen to contribute to projects which I think are important and find interesting, and happy to chat with others with similar interests. Please get in touch if you'd like more information about my experiences to date.
                        </p>
                        <Link href="/cv" className={styles.ctaButton}>
                            <img src="/documents.png" alt="Documents icon" className={styles.headerIcons}/>
                            Request my CV
                        </Link>       
                    </div>
                    <div>
                        <img src="/me.jpeg" alt="Picture of me" className={styles.meImg}></img>
                    </div>     
                </div>
            </div>
    );
}