import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ShoppingCart, Heart } from 'lucide-react';
import Image from '../components/ui/Image';

const products = [
    { id: 1, name: 'iPhone 13 Pro Max Screen', price: '$129.99', category: 'Parts', image: 'https://images.unsplash.com/photo-1605236453806-6ff36a865379?q=80&w=2669&auto=format&fit=crop' },
    { id: 2, name: 'Samsung S22 Battery', price: '$49.99', category: 'Parts', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2832&auto=format&fit=crop' }, // Placeholder
    { id: 3, name: 'USB-C Fast Charger', price: '$29.99', category: 'Accessories', image: 'https://images.unsplash.com/photo-1625695287693-02cda5421711?q=80&w=2670&auto=format&fit=crop' },
    { id: 4, name: 'AirPods Pro Case', price: '$19.99', category: 'Accessories', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2670&auto=format&fit=crop' },
    { id: 5, name: 'MacBook Air M1 Screen', price: '$299.99', category: 'Parts', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?q=80&w=2626&auto=format&fit=crop' },
    { id: 6, name: 'Gaming Mouse', price: '$59.99', category: 'Accessories', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2667&auto=format&fit=crop' },
];

const categories = ['All', 'Parts', 'Accessories', 'Phones', 'Computers'];

const Shop = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="bg-slate-950 min-h-screen py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <h1 className="text-3xl font-bold text-white">Shop Quality Parts & Gear</h1>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative flex-grow md:flex-grow-0">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full md:w-64 bg-slate-900 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-primary-500 transition-colors"
                            />
                        </div>
                        <button className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-slate-600 transition-all">
                            <Filter className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex overflow-x-auto pb-4 mb-8 gap-3 scrollbar-hide">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${activeCategory === cat
                                ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                                : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key={product.id}
                            className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden group hover:border-primary-500/30 transition-all"
                        >
                            <div className="relative aspect-square overflow-hidden bg-slate-800">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    fallbackText={product.category}
                                />
                                <button className="absolute top-3 right-3 p-2 bg-slate-950/50 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary-600">
                                    <Heart className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="p-5">
                                <p className="text-xs text-primary-400 font-medium mb-1">{product.category}</p>
                                <h3 className="text-white font-semibold mb-2 line-clamp-1">{product.name}</h3>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-lg font-bold text-white">{product.price}</span>
                                    <button className="p-2 bg-white text-slate-950 rounded-lg hover:bg-primary-400 transition-colors">
                                        <ShoppingCart className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
