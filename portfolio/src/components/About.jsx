import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900 text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid md:grid-cols-2 gap-16 items-start">

                        {/* Bio & Approach */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                About <span className="text-teal-400">Me</span>
                            </h2>
                            <div className="text-slate-300 text-lg leading-relaxed space-y-6 mb-8">
                                <p>{profileData.bio}</p>
                            </div>

                            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                                <h4 className="text-xl font-semibold text-white mb-4">My Approach</h4>
                                <p className="text-slate-400 mb-4 italic">"I believe education grows when:"</p>
                                <ul className="space-y-3">
                                    {profileData.approach.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-slate-300">
                                            <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Experience & Education */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
                                    Experience
                                </h3>
                                <div className="space-y-8 border-l-2 border-slate-700 ml-3 pl-8 relative">
                                    {profileData.experience.map((exp, index) => (
                                        <div key={index} className="relative">
                                            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-slate-900 bg-teal-500"></span>
                                            <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                            <p className="text-teal-400 text-sm font-medium mb-2">{exp.company} • {exp.duration}</p>
                                            <p className="text-slate-400 text-sm leading-relaxed mb-1">{exp.description}</p>
                                            <p className="text-slate-500 text-xs">{exp.location}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                                    Education
                                </h3>
                                <div className="space-y-6">
                                    {profileData.education.map((edu, index) => (
                                        <div key={index} className="bg-slate-800 p-4 rounded-lg">
                                            <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                                            <p className="text-slate-400">{edu.institution}</p>
                                            <p className="text-slate-500 text-sm">{edu.year}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
