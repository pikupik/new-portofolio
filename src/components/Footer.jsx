import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0A37] text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {currentYear}{' '}
          <a
            href="https://github.com/pikupik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
            >
            pikupik
          </a>. All rights reserved.
        </p>
        <p className="mt-2">
          Made with ❤️ in Jakarta, Indonesia.
        </p>
      </div>
    </footer>
  );
};

export default Footer;