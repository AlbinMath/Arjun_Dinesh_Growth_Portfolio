import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/Profile.png';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-6 md:px-16 pt-32 pb-20 relative overflow-hidden bg-bg">

            {/* Noise Background */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>

            {/* Left Content */}
            <div className="relative z-10 order-2 md:order-1 text-center md:text-left">
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-20 h-px bg-gold mb-10 shadow-[0_0_10px_#d4af37] mx-auto md:mx-0 origin-left"
                ></motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-xs tracking-[0.2em] uppercase text-gold mb-5 font-semibold"
                >
                    Academic Growth Consultant
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="font-serif text-5xl md:text-7xl lg:text-[90px] font-bold leading-[0.95] tracking-tight mb-6 text-white"
                >
                    Arjun <br /> <span className="text-gold">Dinesh</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-wrap justify-center md:justify-start gap-4 text-xs md:text-sm text-gray-400 tracking-[0.12em] uppercase mb-9"
                >
                    <span>Teacher</span>
                    <span className="w-px h-4 bg-gray-700"></span>
                    <span>Learning Strategist</span>
                    <span className="w-px h-4 bg-gray-700"></span>
                    <span>AI for Educators</span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="font-serif text-xl md:text-2xl font-light text-gray-200 max-w-xl leading-relaxed mb-12 italic mx-auto md:mx-0"
                >
                    "Transforming education through structured learning systems, teacher enablement, and AI integration."
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="flex flex-wrap gap-5 justify-center md:justify-start"
                >
                    <a href="#contact" className="px-10 py-4 bg-gold text-[#0a0a0a] font-sans text-[13px] font-semibold tracking-[0.1em] uppercase rounded hover:bg-[#f3e5ab] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_8px_30px_rgba(212,175,55,0.3)]">
                        Book Consultation
                    </a>
                    <a href="#services" className="px-10 py-4 bg-transparent text-gold border border-gold font-sans text-[13px] font-semibold tracking-[0.1em] uppercase rounded hover:bg-gold/15 hover:-translate-y-0.5 transition-all duration-300">
                        Explore Services
                    </a>
                </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative z-10 flex justify-center md:justify-end items-center order-1 md:order-2 mt-10 md:mt-0"
            >
                <div className="relative w-full max-w-[400px] group">
                    {/* Decorative Frame */}
                    <div className="absolute top-6 left-[-20px] w-full h-full border-2 border-gold rounded-lg opacity-40 transition-all duration-500 group-hover:top-4 group-hover:left-[-12px] group-hover:opacity-80 z-0"></div>

                    {/* Image */}
                    <img
                        src={profileImg}
                        alt="Arjun Dinesh"
                        className="w-full aspect-[4/5] object-cover rounded-lg shadow-2xl relative z-10 border border-white/5 grayscale-[40%] contrast-[110%] transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-100 group-hover:-translate-y-2 group-hover:border-gold group-hover:shadow-[0_30px_60px_rgba(212,175,55,0.15)]"
                    />
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-gray-500"
            >
                <span>Scroll</span>
                <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent"></div>
            </motion.div>

        </section>
    );
};

export default Hero;
