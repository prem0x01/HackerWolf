import React from 'react';

const basicTips = [
  {
    title: 'Use Strong Passwords',
    description: 'Always use complex passwords that include a mix of letters, numbers, and special characters. Avoid using easily guessable information like birthdays or common words.',
  },
  {
    title: 'Enable Two-Factor Authentication (2FA)',
    description: 'Adding an extra layer of security through 2FA can significantly reduce the risk of unauthorized access to your accounts.',
  },
  {
    title: 'Keep Your Software Up-to-Date',
    description: 'Regularly update your operating system, antivirus, and other software to protect against the latest threats and vulnerabilities.',
  },
  {
    title: 'Be Wary of Phishing Scams',
    description: 'Always verify the source of emails and links before clicking on them. Phishing scams are designed to steal your personal information.',
  },
  {
    title: 'Use a VPN for Secure Browsing',
    description: 'A Virtual Private Network (VPN) encrypts your internet connection, making it harder for hackers to intercept your data while you browse online.',
  },
];

const BasicTips = () => {
  return (
    <section className="basic-tips-section bg-gray-900 text-lime-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Basic Tips for Cybersecurity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {basicTips.map((tip, index) => (
            <div key={index} className="tip-item p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-2">{tip.title}</h3>
              <p className="text-lg mb-4">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BasicTips;
