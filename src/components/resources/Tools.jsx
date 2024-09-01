import React from 'react';

const tools = [
  {
    name: 'Nmap',
    description: 'A network scanning tool used for network discovery and security auditing.',
    link: 'https://nmap.org/',
  },
  {
    name: 'Metasploit',
    description: 'A penetration testing framework that makes discovering, exploiting, and validating vulnerabilities easy.',
    link: 'https://www.metasploit.com/',
  },
  {
    name: 'Wireshark',
    description: 'A network protocol analyzer that lets you capture and interactively browse the traffic running on a computer network.',
    link: 'https://www.wireshark.org/',
  },
  {
    name: 'John the Ripper',
    description: 'A fast password cracker, currently available for many flavors of Unix, Windows, DOS, and OpenVMS.',
    link: 'https://www.openwall.com/john/',
  },
  {
    name: 'Burp Suite',
    description: 'A leading range of cybersecurity tools, used by professionals to conduct advanced security testing of web applications.',
    link: 'https://portswigger.net/burp',
  },
];

const Tools = () => {
  return (
    <section className="tools-section bg-black text-lime-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Essential Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="tool-item p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-lg mb-4">{tool.description}</p>
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-lime-500 hover:text-lime-300 transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
