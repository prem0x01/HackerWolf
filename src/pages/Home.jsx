import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TipsList from '../components/home/TipsList';
import FeaturedTricks from '../components/home/FeaturedTricks';

const Home = () => {
    return (
        <div className="min-h-screen bg-black text-green-500">
            <div className="relative overflow-hidden">
                {/* Sci-fi styled hero section */}
                <HeroSection />

                {/* Flickering Grid Overlay */}
                <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-10 pointer-events-none">
                    {[...Array(72)].map((_, i) => (
                        <div
                            key={i}
                            className={`border border-green-500 ${i % 2 === 0 ? 'opacity-30' : 'opacity-60'}`}
                            style={{
                                animation: `flicker ${Math.random() * 2 + 1}s infinite`,
                            }}
                        ></div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="relative z-10 container mx-auto px-4 py-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center tracking-wider">
                        Welcome to the Hackers' Matrix
                    </h2>
                    <p className="text-lg md:text-xl text-center leading-relaxed mb-12">
                        Dive into the world of hacking with our advanced tips, tricks, and resources.
                        Whether you're a novice or a seasoned pro, you'll find something here to
                        enhance your skills and keep you ahead of the curve.
                    </p>

                    {/* Sections */}
                    <div className="space-y-12">
                        <TipsList />
                        <FeaturedTricks />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
