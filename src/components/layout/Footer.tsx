import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8 text-slate-400">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
                            <div className="bg-primary-600 p-2 rounded-lg">
                                <Wrench className="w-5 h-5 text-white" />
                            </div>
                            <span className="tracking-tight">Nory<span className="text-primary-400">Fix</span></span>
                        </Link>
                        <p className="text-sm leading-relaxed">
                            Your trusted partner for phone repairs, high-quality spare parts, and premium accessories.
                            Fast service, guaranteed quality.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
                            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Repair Services</Link></li>
                            <li><Link to="/shop" className="hover:text-primary-400 transition-colors">Shop</Link></li>
                            <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                                <span>123 Tech Street, Digital City, 10001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                                <span>+1 (234) 567-890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                                <span>support@noryfix.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="bg-slate-900 p-3 rounded-lg hover:bg-primary-600 hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-slate-900 p-3 rounded-lg hover:bg-primary-600 hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-slate-900 p-3 rounded-lg hover:bg-primary-600 hover:text-white transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Nory Fix. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
