import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { BookOpen, Users, Brain, TrendingUp, Search } from 'lucide-react';

const iconMap = {
    BookOpen: BookOpen,
    Users: Users,
    Brain: Brain,
    TrendingUp: TrendingUp,
    Search: Search
};

const Services = () => {
    return (
        <section id="services" className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/50 skew-x-12 transform origin-top-right"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <span className="text-teal-400 font-medium tracking-wider uppercase text-sm">What I Do</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
                            Areas of <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Consultation</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Strategic interventions designed to build scalable and sustainable education models.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {profileData.services.map((service, index) => {
                            const IconComponent = iconMap[service.icon] || BookOpen;

                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-teal-500/30 transition-all group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <IconComponent className="w-24 h-24 text-teal-500" />
                                    </div>

                                    <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500/10 transition-colors border border-slate-800 group-hover:border-teal-500/30">
                                        <IconComponent className="w-7 h-7 text-teal-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">{service.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm">
                                        {service.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
