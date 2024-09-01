import React from 'react';
import Tools from '../components/resources/Tools';
import Articles from '../components/resources/Articles';

const Resources = () => {
    return (
        <div className="min-h-screen bg-black text-green-500">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center tracking-wider">
                    Hacker Resources
                </h1>
                <p className="text-lg md:text-xl text-center leading-relaxed mb-16">
                    Explore a curated list of tools, articles, and tutorials to elevate your hacking knowledge and skills. Whether you're looking for the latest software or in-depth guides, we've got you covered.
                </p>

                <div className="space-y-12">
                    {/* Tools Section */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 tracking-wide">Tools</h2>
                        <Tools />
                    </div>

                    {/* Articles Section */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 tracking-wide">Articles & Tutorials</h2>
                        <Articles />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
