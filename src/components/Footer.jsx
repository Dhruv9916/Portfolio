import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-6 text-center">
      <p className="text-gray-600">
        Created By{' '}
        <a 
          href="https://www.linkedin.com/in/dhruv-kumar-29b279230/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          Dhruv Kumar
        </a>{' '}
        | © {currentYear} All rights reserved
      </p>
    </footer>
  );
};

export default Footer;