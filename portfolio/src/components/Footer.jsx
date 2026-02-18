import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="mb-2">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
                <p className="text-sm">Built with React & Tailwind CSS</p>
            </div>
        </footer>
    );
};

export default Footer;
