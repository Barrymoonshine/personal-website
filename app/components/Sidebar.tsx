import Link from "next/link";

export default function Sidebar() {
    return (
        <aside id="sidebar">
            <section>NS</section>
            <section><a href="https://www.linkedin.com/in/nick-sheward-5a990977/"><img src="/linkedin.png" alt="LinkedIn icon" className="icons"/></a></section>
            <section><a href="https://github.com/Barrymoonshine"><img src="/github.png" alt="GitHub icon" className="icons"/></a></section>
        </aside>
    );
}