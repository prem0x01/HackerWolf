import React from 'react';

const tips = [
  {
    title: 'Stay Anonymous Online',
    description: 'Use a VPN and Tor browser to mask your IP address and encrypt your internet traffic.',
  },
  {
    title: 'Master the Command Line',
    description: 'Learn essential command-line tools like `grep`, `awk`, `sed`, and `curl` to automate tasks and manage files efficiently.',
  },
  {
    title: 'Understand Cybersecurity Basics',
    description: 'Familiarize yourself with common threats like phishing, malware, and DDoS attacks, and learn how to protect against them.',
  },
  {
    title: 'Explore Ethical Hacking',
    description: 'Gain permission before testing systems for vulnerabilities. Remember, ethical hacking is about helping, not harming.',
  },
  {
    title: 'Keep Software Up-to-Date',
    description: 'Always update your operating system, software, and tools to protect against the latest vulnerabilities.',
  },
];

const TipsList = () => {
  return (
    <section className="tips-list bg-gray-900 text-green-400 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Hacker Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="tip-item p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-3">{tip.title}</h3>
              <p className="text-lg">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsList;
