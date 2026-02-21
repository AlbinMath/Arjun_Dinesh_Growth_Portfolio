import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { profileData } from '../data/profile';

const Footer = () => {
    return (
        <footer className="bg-[#050505] border-t border-gold/10 py-12 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
                <div className="font-serif text-2xl font-semibold text-gold mb-2">Arjun Dinesh M</div>
                <div className="text-xs text-[#666] tracking-[0.1em] uppercase">
                    Education Brand Growth Consultant | Teacher | Learning Strategist | AI for Educators
                </div>
            </div>

            <div className="text-xs text-[#666]">
                © {new Date().getFullYear()} Arjun Dinesh M. All rights reserved.
            </div>

            <div className="flex gap-4">
                <a href={profileData.contact.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gold/20 flex items-center justify-center text-[#999] hover:border-gold hover:text-gold hover:bg-gold/15 transition-all duration-300 rounded">
                    <Instagram className="w-4 h-4" />
                </a>
                <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gold/20 flex items-center justify-center text-[#999] hover:border-gold hover:text-gold hover:bg-gold/15 transition-all duration-300 rounded">
                    <Linkedin className="w-4 h-4" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
