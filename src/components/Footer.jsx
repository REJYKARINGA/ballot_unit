import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <p className="text-sm font-medium">Rejy K P</p>
          </div>
          <div>
            <p className="text-sm font-medium">Mobile: +91 7994870262</p>
          </div>
          <div className="mt-2 md:mt-0">
            <p className="text-xs text-gray-400">Freelancer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;