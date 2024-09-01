import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section h-screen flex flex-col justify-center items-center text-center bg-black text-green-400 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-75"></div>

      <div className="hero-content z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest">
          Welcome to HackerWolf
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-mono">
          Unleash your inner hacker and explore the secrets of the digital world.
        </p>
        <div className="mt-8">
          <a
            href="#resources"
            className="inline-block px-8 py-4 bg-green-600 text-black font-semibold rounded-full shadow-md hover:bg-green-500 transition-all duration-300"
          >
            Start Exploring
          </a>
        </div>
      </div>

      <div className="glitch-effect absolute inset-0 z-0">
        <div className="glitch" style={{ top: '5%', left: '10%' }}></div>
        <div className="glitch" style={{ top: '50%', left: '70%' }}></div>
        <div className="glitch" style={{ bottom: '20%', right: '15%' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;

