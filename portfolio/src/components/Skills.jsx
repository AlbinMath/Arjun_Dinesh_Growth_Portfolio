import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-950 text-white relative">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Technical & Professional <span className="text-teal-400">Skills</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {profileData.skills.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800"
                            >
                                <h3 className="text-xl font-bold text-teal-400 mb-6 border-b border-slate-800 pb-2">
                                    {category.category}
                                </h3>
                                <div className="space-y-3">
                                    {category.items.map((skill, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                            <span className="text-slate-300 font-medium">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
