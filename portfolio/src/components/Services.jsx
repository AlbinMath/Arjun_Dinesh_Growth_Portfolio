import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        id: "01",
        title: "Academic Growth Consultation",
        description: "Designing structured academic systems and performance frameworks for education brands that want consistency, quality, and measurable growth at scale."
    },
    {
        id: "02",
        title: "Teacher Performance & Enablement",
        description: "Improving teaching workflows, pedagogy alignment, and instructional consistency — empowering educators to deliver at their highest potential."
    },
    {
        id: "03",
        title: "Learning Strategy Design",
        description: "Building outcome-driven learning journeys that improve engagement, knowledge retention, and course completion for modern learners."
    },
    {
        id: "04",
        title: "AI for Educators",
        description: "Helping educators adopt AI tools responsibly — boosting productivity, enhancing content delivery, and preparing classrooms for the future of learning."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 px-6 md:px-16 bg-[#080808]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[11px] tracking-[0.25em] uppercase text-gold block mb-4">What I Do</span>
                        <div className="w-10 h-px bg-gold/50 mb-6"></div>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-[62px] font-semibold leading-[1.1] text-white tracking-tight">
                            Services & <br /> Expertise
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-gold/10 border border-gold/10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative bg-[#161616] p-12 overflow-hidden hover:bg-[#1a1a1a] transition-all duration-400"
                        >
                            {/* Top Gold Border Hover Effect */}
                            <div className="absolute top-0 left-0 w-[3px] h-0 bg-gold transition-all duration-500 ease-out group-hover:h-full shadow-[0_0_15px_#d4af37]"></div>

                            <span className="block font-serif text-[60px] font-bold text-gold/10 leading-none mb-6 transition-all duration-500 group-hover:text-gold/30 group-hover:translate-x-2">
                                {service.id}
                            </span>

                            <h3 className="font-serif text-2xl font-semibold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                                {service.title}
                            </h3>

                            <p className="text-[#999] text-[15px] leading-[1.7] mb-8">
                                {service.description}
                            </p>

                            <a href="#contact" className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-gold border-b border-transparent pb-[2px] transition-all duration-300 group-hover:border-gold group-hover:gap-4">
                                Work With Me <span>→</span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
