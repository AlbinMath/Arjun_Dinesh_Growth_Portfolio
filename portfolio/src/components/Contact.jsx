import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Get In <span className="text-teal-400">Touch</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-12">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
                        {/* Email Card */}
                        <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profileData.contact.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-800 p-6 rounded-lg min-w-[250px] border border-slate-700 hover:border-teal-500/50 transition-all group flex flex-col items-center"
                        >
                            <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                                <Mail className="w-6 h-6 text-teal-400" />
                            </div>
                            <h4 className="text-white font-semibold mb-2">Email</h4>
                            <span className="text-slate-300 group-hover:text-teal-400 transition-colors text-sm">
                                {profileData.contact.email}
                            </span>
                        </a>

                        {/* LinkedIn Card */}
                        <a
                            href={profileData.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-800 p-6 rounded-lg min-w-[250px] border border-slate-700 hover:border-teal-500/50 transition-all group flex flex-col items-center"
                        >
                            <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                                <Linkedin className="w-6 h-6 text-teal-400" />
                            </div>
                            <h4 className="text-white font-semibold mb-2">LinkedIn</h4>
                            <span className="text-slate-300 group-hover:text-teal-400 transition-colors text-sm">
                                Connect with me
                            </span>
                        </a>
                    </div>

                    <a
                        href={`https://wa.me/${profileData.contact.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-teal-500 text-slate-900 font-bold rounded-full hover:bg-teal-400 transition-all shadow-lg hover:shadow-teal-500/25"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Say Hello on WhatsApp
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
