import { motion } from 'framer-motion';
import { Smartphone, Laptop, Headphones, CircuitBoard } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
    {
        icon: Smartphone,
        name: 'Smartphones',
        desc: 'Latest models & repairs',
        color: 'bg-blue-500',
        link: '/shop/smartphones'
    },
    {
        icon: Laptop,
        name: 'Computers',
        desc: 'Laptops, PCs & upgrades',
        color: 'bg-purple-500',
        link: '/shop/computers'
    },
    {
        icon: Headphones,
        name: 'Accessories',
        desc: 'Premium audio & charging',
        color: 'bg-cyan-500',
        link: '/shop/accessories'
    },
    {
        icon: CircuitBoard,
        name: 'Spare Parts',
        desc: 'Authentic components',
        color: 'bg-emerald-500',
        link: '/shop/parts'
    }
];

const FeaturedCategories = () => {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What We Offer</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Explore our wide range of products and professional services designed to keep your tech running smoothly.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <Link key={index} to={cat.link}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-primary-500/50 transition-colors overflow-hidden"
                            >
                                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full ${cat.color} opacity-10 group-hover:opacity-20 blur-2xl transition-opacity`} />

                                <div className={`w-14 h-14 rounded-2xl ${cat.color} bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <cat.icon className={`w-7 h-7 ${cat.color.replace('bg-', 'text-')}`} />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
                                <p className="text-slate-400 text-sm">{cat.desc}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;
