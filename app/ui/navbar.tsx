import Link from 'next/link';
// import NavLinks from '@/app/ui/nav-links'

export default function Navbar() {
    return (
        <div>
            <Link className="" href="/">Home</Link>
            <Link className="" href="/terms">Terms</Link>
            <Link className="" href="/privacy">Privacy</Link>
            <Link className="" href="/contact">Contact</Link>
            <Link className="" href="/about">About</Link>
        </div>
    );
}