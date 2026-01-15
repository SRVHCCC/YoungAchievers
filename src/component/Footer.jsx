import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-xl mb-4 text-[#4DD0E1]">YoungAchivers</h4>
          <p className="text-gray-400 text-sm">Providing a nurturing environment for your children to grow and learn through play.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>About Us</li>
            <li>Our Classes</li>
            <li>Teachers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2024 YoungAchivers School. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;