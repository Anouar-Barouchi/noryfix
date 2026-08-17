import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wrench, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Shop', path: '/shop' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={twMerge(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white group">
                    <div className="bg-primary-600 p-2 rounded-lg group-hover:bg-primary-500 transition-colors">
                        <Wrench className="w-6 h-6 text-white" />
                    </div>
                    <span className="tracking-tight">Nory<span className="text-primary-400">Fix</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={clsx(
                                "text-sm font-medium transition-colors hover:text-primary-400",
                                location.pathname === link.path ? "text-primary-400" : "text-slate-300"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/213775669489" // TODO: Add actual number
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary-600 hover:bg-primary-500 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2"
                    >
                        <Phone className="w-4 h-4" />
                        <span>Book Repair</span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-950 border-b border-white/10 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={clsx(
                                        "text-lg font-medium transition-colors hover:text-primary-400",
                                        location.pathname === link.path ? "text-primary-400" : "text-slate-300"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://wa.me/213775669489"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary-600 text-white px-5 py-3 rounded-xl font-medium text-center flex items-center justify-center gap-2"
                            >
                                <Phone className="w-5 h-5" />
                                <span>Book Repair Now</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
