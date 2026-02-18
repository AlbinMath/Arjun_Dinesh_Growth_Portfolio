import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Instagram, Linkedin, Mail, Phone, MessageCircle, FileText } from 'lucide-react';
import resumePdf from '../assets/resume.pdf';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 md:px-16 bg-[#080808]">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.2
                            }
                        }
                    }}
                >
                    <motion.span
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                        className="text-[11px] tracking-[0.25em] uppercase text-gold block mb-6"
                    >
                        Get in Touch
                    </motion.span>

                    <motion.h2
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                        className="font-serif text-4xl md:text-5xl lg:text-[60px] font-semibold leading-[1.1] text-white tracking-tight mb-8"
                    >
                        Let's Build Something Meaningful
                    </motion.h2>

                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                        className="text-[#999] text-[16px] leading-[1.8] mb-12 max-w-2xl mx-auto"
                    >
                        Ready to transform your academic systems? Whether you're an EdTech brand, education startup, or an educator — I'd love to understand your goals and explore how we can work together.
                    </motion.p>

                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                        className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12"
                    >
                        <a href={`tel:${profileData.contact.whatsapp}`} className="flex items-center gap-4 text-[#999] text-[15px] px-6 py-4 border border-white/5 bg-white/[0.02] hover:border-gold/20 hover:text-white hover:bg-gold/5 rounded-lg transition-all duration-300 group">
                            <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Phone className="w-4 h-4 stroke-[1.5]" />
                            </div>
                            +{profileData.contact.whatsapp}
                        </a>

                        <a href={`mailto:${profileData.contact.email}`} className="flex items-center gap-4 text-[#999] text-[15px] px-6 py-4 border border-white/5 bg-white/[0.02] hover:border-gold/20 hover:text-white hover:bg-gold/5 rounded-lg transition-all duration-300 group">
                            <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Mail className="w-4 h-4 stroke-[1.5]" />
                            </div>
                            {profileData.contact.email}
                        </a>
                    </motion.div>

                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 0 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                        className="flex justify-center gap-6 mb-12"
                    >
                        <a href={profileData.contact.instagram} target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-gold/20 flex items-center justify-center text-[#999] hover:border-gold hover:text-gold hover:bg-gold/15 hover:-translate-y-1 transition-all duration-300 rounded-lg">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-gold/20 flex items-center justify-center text-[#999] hover:border-gold hover:text-gold hover:bg-gold/15 hover:-translate-y-1 transition-all duration-300 rounded-lg">
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </motion.div>

                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                        className="flex flex-col md:flex-row justify-center items-center gap-6"
                    >
                        <a
                            href={`https://wa.me/${profileData.contact.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-[#0a0a0a] font-semibold rounded hover:bg-[#f3e5ab] hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgba(212,175,55,0.3)] tracking-[0.15em] uppercase text-xs"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Say Hello on WhatsApp
                        </a>

                        <a
                            href={resumePdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-transparent border border-gold text-gold font-semibold rounded hover:bg-gold/10 hover:-translate-y-1 transition-all duration-300 tracking-[0.15em] uppercase text-xs"
                        >
                            <FileText className="w-5 h-5" />
                            View Resume
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
