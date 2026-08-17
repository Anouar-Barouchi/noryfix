import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import ServicesBanner from '../components/home/ServicesBanner';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <FeaturedCategories />
            <ServicesBanner />
            <FeaturedProducts />
            <Testimonials />
        </div>
    );
};

export default Home;
