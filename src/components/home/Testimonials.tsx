import { Star } from 'lucide-react';
import Image from '../ui/Image';

const Testimonials = () => {
    return (
        <section className="py-24 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-16">Trusted by Thousands</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: 'Sarah Johnson',
                            role: 'Graphic Designer',
                            text: 'My MacBook was dead, and Nory Fix brought it back to life in 24 hours. Incredible service!',
                            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop'
                        },
                        {
                            name: 'Michael Chen',
                            role: 'Business Owner',
                            text: 'The best place to buy original accessories. Quality is unmatched.',
                            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop'
                        },
                        {
                            name: 'David Smith',
                            role: 'Tech Enthusiast',
                            text: 'They fixed my cracked iPhone screen so perfectly, it looks brand new. Highly recommended!',
                            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop'
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative">
                            <div className="flex gap-1 mb-4 text-yellow-500">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            <p className="text-slate-300 mb-6 italic">"{item.text}"</p>
                            <div className="flex items-center gap-4">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    containerClassName="w-12 h-12 rounded-full overflow-hidden shrink-0"
                                    className="w-full h-full object-cover"
                                    fallbackText={item.name.charAt(0)}
                                />
                                <div>
                                    <h4 className="text-white font-semibold">{item.name}</h4>
                                    <p className="text-sm text-slate-500">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
