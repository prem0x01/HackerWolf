import React from 'react';
import AdvancedTricks from '../components/tricks/AdvancedTricks';

const Tricks = () => {
    return (
        <div className="min-h-screen bg-black text-green-500">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center tracking-wider">
                    Advanced Hacking Tricks
                </h1>
                <p className="text-lg md:text-xl text-center leading-relaxed mb-16">
                    Explore advanced hacking techniques and strategies. These tricks are designed to give you an edge in the digital world and enhance your hacking prowess.
                </p>

                {/* Tricks Section */}
                <div className="space-y-12">
                    <AdvancedTricks />
                </div>
            </div>
        </div>
    );
};

export default Tricks;
