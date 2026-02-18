import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-slate-950 text-white pt-16 relative overflow-hidden">
            {/* Structural Background - Representing Systems & Order */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950 pointer-events-none"></div>

            {/* Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-12 z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-sm font-medium mb-6 backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
                        EdTech · Learning Systems · Growth
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                        Building Stronger <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                            Education Systems
                        </span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-slate-300 mb-6 font-light">
                        {profileData.role}
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 border-l-2 border-slate-800 pl-4">
                        {profileData.subRole}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#services"
                            className="px-8 py-3 rounded-full bg-teal-500 text-slate-950 font-semibold hover:bg-teal-400 transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]"
                        >
                            Explore Services
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-slate-700 text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-all backdrop-blur-sm"
                        >
                            Get in Touch
                        </a>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        {/* Abstract geometric elements behind image */}
                        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-teal-500/30 rounded-tr-3xl -mr-4 -mt-4"></div>
                        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-blue-500/30 rounded-bl-3xl -ml-4 -mb-4"></div>

                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800">
                            <img
                                src={profileImg}
                                alt={profileData.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent"></div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
