"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { motion } from "motion/react"

function Header() {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const links = [
        { href: "/about", label: "About" },
        { href: "/experience", label: "Experience" },
        { href: "/contact", label: "Contact" },
        { href: "/posts", label: "Posts" },
    ];










    return (
        <header className="flex items-center justify-between w-full max-w-4xl mx-auto px-4 py-6 border-b  border-gray-800 relative">
            {/* Logo */}
            <Image
                src="/logo.jpeg"
                alt="Profile"
                width={48}
                height={48}
                className="rounded-full hover:scale-105 transition-transform duration-300 ease-in-out"
                onClick={() => router.push("/")}
            />

            <nav className="hidden sm:flex items-center gap-6 text-sm">
                {links.map((link, index) => (
                    <Link key={link.href} href={link.href}>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.2 }}
                            className="hover:text-gray-400 hover:underline cursor-pointer"
                        >
                            {link.label}
                        </motion.span>
                    </Link>
                ))}
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            </nav>

            {/* Mobile Menu Icon */}
            <div className="sm:hidden">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h13M4 18h16"} />
                    </svg>
                </button>
            </div>


            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full h-screen bg-black border-t border-gray-800 sm:hidden flex flex-col gap-4 px-4 py-6 z-10">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="block text-white hover:text-gray-400 hover:underline">{link.label}</span>
                        </Link>
                    ))}
                    <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse self-start" />
                </div>
            )}
        </header>
    );
}

export default Header;
