import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-green-500">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-wider text-center">
                    About Hackers' Den
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-justify">
                    Welcome to Hackers' Den, the ultimate online resource for hacking enthusiasts, cybersecurity professionals, and curious minds. 
                    Here, you will find a treasure trove of advanced tips, tricks, and resources to help you hone your skills, 
                    explore new techniques, and stay up-to-date with the latest trends in the world of hacking. Whether you're a 
                    seasoned hacker or just starting your journey, Hackers' Den is your go-to platform for all things related to 
                    ethical hacking, penetration testing, and cybersecurity.
                </p>
                <p className="text-lg md:text-xl leading-relaxed mt-6 text-justify">
                    Our mission is to empower individuals by providing them with the knowledge and tools they need to understand 
                    the complexities of the digital world. We believe that with the right guidance and resources, anyone can learn 
                    to navigate the digital landscape safely and securely. Join us as we explore the fascinating world of hacking, 
                    where curiosity meets expertise.
                </p>
            </div>
        </div>
    );
}

export default About;
