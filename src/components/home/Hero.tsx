import { motion } from 'framer-motion';
import { ArrowRight, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import Image from '../ui/Image';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 opacity-90" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
            </div>

            <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 text-center lg:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 font-medium text-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                        </span>
                        Available for Express Repair
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                        Tech Care, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">
                            Redefined.
                        </span>
                    </h1>

                    <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0">
                        Premium phone and computer repairs, high-quality spare parts, and accessories.
                        Experience the future of device care with Nory Fix.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <Link
                            to="/services"
                            className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-2xl font-semibold transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-primary-600/25"
                        >
                            <Wrench className="w-5 h-5" />
                            Book Repair
                        </Link>
                        <Link
                            to="/shop"
                            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-semibold transition-all flex items-center gap-2 border border-slate-700 hover:border-slate-600"
                        >
                            Shop Accessories
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>

                {/* Hero Visual/Floating Elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 w-full max-w-lg mx-auto aspect-square rounded-full bg-gradient-to-tr from-primary-600/20 to-cyan-400/20 blur-3xl animate-pulse" />
                    <Image
                        src="https://images.unsplash.com/photo-1592899677712-a5a250f8c063?q=80&w=1000&auto=format&fit=crop"
                        alt="Latest Tech"
                        className="relative z-20 w-full max-w-md mx-auto object-contain drop-shadow-2xl rounded-3xl opacity-90 -rotate-12 hover:rotate-0 transition-transform duration-700"
                        fallbackText="Latest Tech"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
