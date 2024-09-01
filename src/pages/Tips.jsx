import React from 'react';
import BasicTips from '../components/tips/BasicTips';

const Tips = () => {
    return (
        <div className="min-h-screen bg-black text-green-500">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center tracking-wider">
                    Hacking Tips
                </h1>
                <p className="text-lg md:text-xl text-center leading-relaxed mb-16">
                    Discover essential tips to enhance your hacking skills. From basic techniques to advanced strategies, our tips will help you navigate the world of cybersecurity more effectively.
                </p>

                {/* Tips Section */}
                <div className="space-y-12">
                    <BasicTips />
                </div>
            </div>
        </div>
    );
};

export default Tips;
