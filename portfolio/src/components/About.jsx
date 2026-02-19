import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';

const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 px-6 md:px-16 bg-[#111111] border-y border-gold/10 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-start">

                    {/* Left - Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-[11px] tracking-[0.25em] uppercase text-gold">About Me</span>
                            <div className="w-10 h-px bg-gold/50"></div>
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-[62px] font-semibold leading-[1.1] text-white tracking-tight">
                            Strategic. <br /> Structured. <br /> Outcome-Driven.
                        </h2>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 text-[17px] leading-[1.8] text-[#bbb]"
                    >
                        <p>
                            I am Arjun Dinesh — an Academic Growth Consultant focused on building high-performance learning ecosystems for education brands, institutions, and educators who want to scale impact, not just output.
                        </p>
                        <p>
                            My work sits at the intersection of pedagogy, systems thinking, and technology. I design structured academic frameworks that remove guesswork from learning — replacing it with measurable outcomes, consistent delivery, and strategic intent.
                        </p>
                        <p>
                            I work with EdTech brands, education startups, and teacher communities to align their learning architecture with real-world results. I believe education should be engineered, not improvised — and AI is the most powerful enabler that classrooms and platforms have yet to fully unlock.
                        </p>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-gold/20 border border-gold/20 mt-16"
                >
                    <div className="p-10 bg-[#111111] text-center hover:bg-[#141414] transition-colors duration-300">
                        <span className="block font-serif text-[54px] font-bold text-gold leading-none shadow-gold/20 drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">8+</span>
                        <span className="text-xs text-[#999] uppercase tracking-[0.1em] mt-3 block">Years of Experience</span>
                    </div>
                    <div className="p-10 bg-[#111111] text-center hover:bg-[#141414] transition-colors duration-300">
                        <span className="block font-serif text-[54px] font-bold text-gold leading-none drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">50+</span>
                        <span className="text-xs text-[#999] uppercase tracking-[0.1em] mt-3 block">Education Brands Served</span>
                    </div>
                    <div className="p-10 bg-[#111111] text-center hover:bg-[#141414] transition-colors duration-300">
                        <span className="block font-serif text-[54px] font-bold text-gold leading-none drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">10K+</span>
                        <span className="text-xs text-[#999] uppercase tracking-[0.1em] mt-3 block">Educators Impacted</span>
                    </div>
                </motion.div>

                {/* Education Section - Conditionally Rendered */}
                {profileData.education && profileData.education.length > 0 && (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2,
                                    delayChildren: 0.6
                                }
                            }
                        }}
                        className="mt-16"
                    >
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-[11px] tracking-[0.25em] uppercase text-gold">Education</span>
                                <div className="w-10 h-px bg-gold/50"></div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {profileData.education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                                    className="p-8 bg-[#161616] border border-white/5 hover:border-gold/20 transition-all duration-300 group"
                                >
                                    <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-gold transition-colors leading-tight">{edu.degree}</h3>
                                    <p className="text-[#999] text-sm mb-2">{edu.institution}</p>
                                    <p className="text-gold text-xs tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">{edu.year}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default About;
