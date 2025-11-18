import Link from "next/link";

export default function Header() {
    return (
        <header>
            <Link href="/">Home</Link>
            <Link href="/about">About Me</Link>
            <Link href="/cv">CV</Link>
            <Link href="/contact">Contact</Link>
        </header>
    );
}