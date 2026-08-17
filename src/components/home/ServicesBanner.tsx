import { motion } from 'framer-motion';
import { ArrowRight, Clock, ShieldCheck, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Image from '../ui/Image';

const ServicesBanner = () => {
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                                Expert Repair Services <br />
                                <span className="text-primary-400">You Can Trust</span>
                            </h2>
                            <p className="text-lg text-slate-300">
                                From cracked screens to logic board repairs, our certified technicians bring your devices back to life. Standard repairs completed in under 30 minutes.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: Clock, title: 'Fast Turnaround', desc: 'Same-day repair for most issues' },
                                { icon: ShieldCheck, title: 'Warranty Included', desc: '90-day warranty on all repairs' },
                                { icon: BadgeCheck, title: 'Certified Experts', desc: 'Skilled professionals' },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="p-3 rounded-lg bg-primary-600/20 text-primary-400">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">{item.title}</h3>
                                        <p className="text-sm text-slate-400">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-2xl font-semibold transition-all hover:scale-105"
                            >
                                View Repair Services
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/20 border border-slate-700">
                            <Image
                                src="https://images.unsplash.com/photo-1597424214771-3375838ccb3c?q=80&w=2670&auto=format&fit=crop"
                                alt="Phone Repair"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                fallbackText="Repair Lab"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-bold text-lg">Precision Micro-Soldering</p>
                                <p className="text-sm text-slate-300">Advanced diagnostic & repair lab</p>
                            </div>
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesBanner;
