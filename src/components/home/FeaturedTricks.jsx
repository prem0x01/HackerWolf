import React from 'react';

const tricks = [
  {
    title: 'SQL Injection Attack',
    description: 'Learn how to identify and exploit SQL injection vulnerabilities to access unauthorized data.',
  },
  {
    title: 'Bypass Firewalls',
    description: 'Understand techniques to bypass firewalls and intrusion detection systems (IDS) using advanced methods.',
  },
  {
    title: 'Password Cracking',
    description: 'Explore methods to crack passwords using tools like John the Ripper, Hashcat, and rainbow tables.',
  },
  {
    title: 'Wi-Fi Hacking',
    description: 'Master Wi-Fi hacking techniques to crack WPA/WPA2 encryption and gain access to wireless networks.',
  },
  {
    title: 'Reverse Engineering',
    description: 'Learn how to reverse engineer software and hardware to discover vulnerabilities and understand internal workings.',
  },
];

const FeaturedTricks = () => {
  return (
    <section className="featured-tricks bg-black text-lime-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Tricks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tricks.map((trick, index) => (
            <div key={index} className="trick-item p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-3">{trick.title}</h3>
              <p className="text-lg">{trick.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTricks;
