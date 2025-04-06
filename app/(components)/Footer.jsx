import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
function Footer() {
    return (
        <footer className="flex items-center justify-between w-full max-w-4xl mx-auto px-4 py-6 border-t border-gray-800">
            <p className="text-sm text-slate-400">
                &copy; Kesraoui Mohamed, France
            </p>

            <div className="flex space-x-4">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="text-slate-400 hover:text-blue-500" size="lg" />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className="text-slate-400 hover:text-blue-400" size="lg" />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="text-slate-400 hover:text-pink-500" size="lg" />
                </Link>

            </div>

            <p className="text-sm text-slate-400">
                {new Date().getFullYear()}    All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
