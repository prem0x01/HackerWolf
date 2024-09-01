import React from 'react';

const advancedTricks = [
  {
    title: 'Exploit Vulnerabilities with Metasploit',
    description: 'Learn how to use the Metasploit framework to identify and exploit vulnerabilities in various systems. Metasploit provides a wide range of tools for penetration testing and security research.',
  },
  {
    title: 'Buffer Overflow Attacks',
    description: 'Understand how buffer overflow attacks work, and learn how to write exploits that can manipulate the flow of execution in vulnerable software.',
  },
  {
    title: 'Reverse Engineering with IDA Pro',
    description: 'Use IDA Pro to disassemble and reverse engineer binary files. This skill is essential for understanding malware, cracking software, and developing exploits.',
  },
  {
    title: 'Social Engineering Techniques',
    description: 'Master advanced social engineering tactics to manipulate human behavior and gain unauthorized access to systems. This involves pretexting, phishing, and other psychological manipulation techniques.',
  },
  {
    title: 'Wi-Fi Hacking with Aircrack-ng',
    description: 'Learn how to use Aircrack-ng to crack WEP, WPA, and WPA2 encryption on wireless networks. This involves packet capturing, de-authentication attacks, and dictionary-based cracking.',
  },
];

const AdvancedTricks = () => {
  return (
    <section className="advanced-tricks-section bg-gray-900 text-lime-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Advanced Hacking Tricks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advancedTricks.map((trick, index) => (
            <div key={index} className="trick-item p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-2">{trick.title}</h3>
              <p className="text-lg mb-4">{trick.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedTricks;
