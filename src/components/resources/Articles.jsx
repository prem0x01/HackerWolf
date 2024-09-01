import React from 'react';

const articles = [
  {
    title: 'Understanding Network Security: Basics and Beyond',
    description: 'An in-depth guide to network security fundamentals, best practices, and advanced techniques.',
    link: 'https://example.com/understanding-network-security',
    date: 'August 20, 2024',
  },
  {
    title: 'Top 10 Tools Every Ethical Hacker Should Know',
    description: 'Explore the must-have tools for ethical hackers and how they can be used to strengthen security.',
    link: 'https://example.com/top-10-ethical-hacker-tools',
    date: 'July 15, 2024',
  },
  {
    title: 'The Future of Cybersecurity: Emerging Trends',
    description: 'A look at the future of cybersecurity, including AI-driven security measures and emerging threats.',
    link: 'https://example.com/future-of-cybersecurity',
    date: 'September 1, 2024',
  },
  {
    title: 'Ethical Hacking: How to Get Started',
    description: 'A beginner’s guide to ethical hacking, covering essential skills, tools, and certification paths.',
    link: 'https://example.com/ethical-hacking-get-started',
    date: 'June 10, 2024',
  },
  {
    title: 'Cybersecurity Breaches: Lessons Learned from the Biggest Attacks',
    description: 'A review of major cybersecurity breaches and the lessons that organizations can learn from them.',
    link: 'https://example.com/cybersecurity-breaches-lessons-learned',
    date: 'May 5, 2024',
  },
];

const Articles = () => {
  return (
    <section className="articles-section bg-gray-900 text-lime-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="article-item p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
              <p className="text-lg mb-4">{article.description}</p>
              <p className="text-sm text-gray-400 mb-4">{article.date}</p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-lime-500 hover:text-lime-300 transition-colors duration-200"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
