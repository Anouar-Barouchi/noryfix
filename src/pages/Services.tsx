import { motion } from 'framer-motion';
import { Smartphone, Laptop, Battery, Droplets, Cpu, Wifi, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: Smartphone,
        title: 'Screen Repair',
        desc: 'Cracked screen replacement for iPhone, Samsung, and more. High-quality parts ensuring touch sensitivity and brightness restoration.',
        price: 'From $49'
    },
    {
        icon: Battery,
        title: 'Battery Replacement',
        desc: 'Is your phone draining fast? We replace old batteries with premium cells to restore your device\'s all-day power.',
        price: 'From $39'
    },
    {
        icon: Droplets,
        title: 'Water Damage Fix',
        desc: 'Advanced ultrasonic cleaning and board-level repairs to save water-damaged devices. Success rate over 85%.',
        price: 'Diagnosis: Free'
    },
    {
        icon: Laptop,
        title: 'MacBook & PC Repair',
        desc: 'Keyboard replacement, screen repair, and logic board fixes for all major laptop brands.',
        price: 'From $79'
    },
    {
        icon: Cpu,
        title: 'Micro-Soldering',
        desc: 'Complex motherboard repairs including FaceID fix, TouchIC, and charging port replacements.',
        price: 'Custom Quote'
    },
    {
        icon: Wifi,
        title: 'Network Unlocking',
        desc: 'Unlock your device for use with any carrier worldwide. Permanent solution.',
        price: 'From $29'
    }
];

const Services = () => {
    return (
        <div className="bg-slate-950 min-h-screen pb-20">
            {/* Header */}
            <div className="relative py-24 bg-slate-900 border-b border-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597424214771-3375838ccb3c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Professional <span className="text-primary-400">Repairs</span>
                    </motion.h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        We fix what others can't. Certified technicians, authentic parts, and a warranty you can trust.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl hover:border-primary-500/30 transition-all hover:bg-slate-900 group"
                        >
                            <div className="w-12 h-12 bg-primary-600/20 rounded-2xl flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 transition-transform">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed">{service.desc}</p>
                            <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                                <span className="text-lg font-semibold text-white">{service.price}</span>
                                <button className="text-primary-400 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                                    Book Now <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Process Section */}
            <div className="container mx-auto px-4 mt-32">
                <h2 className="text-3xl font-bold text-center text-white mb-16">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { step: '01', title: 'Book Online', desc: 'Choose your repair service and schedule a time.' },
                        { step: '02', title: 'Drop Off / Mail', desc: 'Bring your device to our shop or mail it in.' },
                        { step: '03', title: 'Expert Repair', desc: 'Our technicians fix your device quickly.' },
                        { step: '04', title: 'Pickup', desc: 'Get your device back working like new.' }
                    ].map((step, idx) => (
                        <div key={idx} className="text-center relative">
                            <div className="text-6xl font-black text-slate-800 mb-4 opacity-50">{step.step}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-slate-400">{step.desc}</p>
                            {idx !== 3 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-800" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
