import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Image from '../ui/Image';

const products = [
    {
        id: 1,
        name: 'Ultra Fast Charger 65W',
        category: 'Accessories',
        price: '$29.99',
        image: 'https://images.unsplash.com/photo-1625695287693-02cda5421711?q=80&w=2670&auto=format&fit=crop',
        tag: 'Best Seller'
    },
    {
        id: 2,
        name: 'Wireless Earbuds Pro',
        category: 'Audio',
        price: '$89.99',
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2832&auto=format&fit=crop',
    },
    {
        id: 3,
        name: 'iPhone 13 Screen Kit',
        category: 'Parts',
        price: '$120.00',
        image: 'https://images.unsplash.com/photo-1605236453806-6ff36a865379?q=80&w=2669&auto=format&fit=crop',
        tag: 'New'
    },
    {
        id: 4,
        name: 'Gaming Headset X',
        category: 'Audio',
        price: '$59.99',
        image: 'https://images.unsplash.com/photo-1599669454699-24889362302a?q=80&w=2670&auto=format&fit=crop',
    }
];

const FeaturedProducts = () => {
    return (
        <section className="py-24 bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Featured Products</h2>
                        <p className="text-slate-400">Hand-picked quality accessories and parts.</p>
                    </div>
                    <Link to="/shop" className="hidden md:block text-primary-400 font-medium hover:text-primary-300 transition-colors">
                        View All Products &rarr;
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 group hover:border-primary-500/30 transition-all shadow-lg"
                        >
                            <div className="relative aspect-square overflow-hidden bg-slate-800">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    fallbackText={product.category}
                                />
                                {product.tag && (
                                    <span className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {product.tag}
                                    </span>
                                )}
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

                <div className="mt-8 text-center md:hidden">
                    <Link to="/shop" className="text-primary-400 font-medium hover:text-primary-300 transition-colors">
                        View All Products &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
