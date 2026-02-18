import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        id: 1,
        title: "Consultation & System Audit",
        description: "A deep-dive into your current academic structure, identifying gaps, bottlenecks, and untapped opportunities.",
        icon: (
            <svg className="w-7 h-7 stroke-gold fill-none stroke-[1.5]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 3" /></svg>
        )
    },
    {
        id: 2,
        title: "Strategy & Framework Design",
        description: "Custom learning framework design — aligned to your goals, learner profile, and delivery capabilities.",
        icon: (
            <svg className="w-7 h-7 stroke-gold fill-none stroke-[1.5]" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="2" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="13" y2="16" /></svg>
        )
    },
    {
        id: 3,
        title: "Implementation & AI Integration",
        description: "Guided rollout of the learning system with intelligent AI tools embedded into daily workflows.",
        icon: (
            <svg className="w-7 h-7 stroke-gold fill-none stroke-[1.5]" viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
        )
    },
    {
        id: 4,
        title: "Optimization & Performance Tracking",
        description: "Continuous review and refinement using performance data, feedback loops, and outcome benchmarks.",
        icon: (
            <svg className="w-7 h-7 stroke-gold fill-none stroke-[1.5]" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
        )
    }
];

const Process = () => {
    return (
        <section id="process" className="py-24 px-6 md:px-16 bg-[#111111] border-y border-gold/10 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[11px] tracking-[0.25em] uppercase text-gold block mb-4">How We Work</span>
                    <div className="w-10 h-px bg-gold/50 mb-6"></div>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-[62px] font-semibold leading-[1.1] text-white tracking-tight mb-20">
                        A Strategic, <br /> 4-Step Framework
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                    {/* Horizontal Line for Desktop */}
                    <div className="hidden lg:block absolute top-[36px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="relative group pt-4"
                        >
                            <div className="w-[72px] h-[72px] border border-gold/20 rounded-full flex items-center justify-center mb-7 bg-[#111111] relative z-10 transition-all duration-300 group-hover:border-gold group-hover:bg-gold/15 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                                {step.icon}
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold text-[#0a0a0a] rounded-full flex items-center justify-center text-[11px] font-bold shadow-[0_0_10px_rgba(212,175,55,0.4)]">
                                    {step.id}
                                </div>
                            </div>

                            <h4 className="font-serif text-xl md:text-2xl font-semibold text-white mb-4">
                                {step.title}
                            </h4>

                            <p className="text-[#999] text-sm leading-[1.7]">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
