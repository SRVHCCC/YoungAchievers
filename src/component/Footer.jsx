import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Enhanced hover style for links
  const linkHoverStyle = "hover:text-[#00BCD4] hover:translate-x-2 transition-all duration-300 flex items-center gap-2 justify-center md:justify-start font-medium";

  return (
    <footer className="bg-[#1A202C] text-white pt-16 pb-8 px-6 font-sans border-t-4 border-[#673AB7]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* --- 1. Brand Section --- */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-xl shadow-lg">
               <img src="/logo.png" alt="School Logo" className="h-10 w-auto" />
            </div>
            <div className="leading-tight">
              <h4 className="font-black text-2xl tracking-tighter italic">
                YOUNG <span className="text-[#00BCD4]">ACHIEVERS</span>
              </h4>
              <p className="text-[10px] uppercase font-black tracking-[0.2em] text-[#FFB74D]">School of Excellence</p>
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left font-medium">
            The best educational hub in Patna Tamoli. We give wings to your child's future with modern technology and strong moral values.
          </p>
          {/* Social Media Icons */}
          
        </div>

        {/* --- 2. Quick Explorer --- */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-black mb-8 uppercase tracking-widest relative inline-block">
            Quick Links
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-12 h-1.5 bg-[#FF5E5E] rounded-full"></span>
          </h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/" className={linkHoverStyle}>Home</Link></li>
            <li><Link to="/about" className={linkHoverStyle}>About Us</Link></li>
            <li><Link to="/gallery" className={linkHoverStyle}>Photo Gallery</Link></li>
            <li><Link to="/contact" className={linkHoverStyle}>Contact Us</Link></li>
          </ul>
        </div>

        {/* --- 3. Academics Section --- */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-black mb-8 uppercase tracking-widest relative inline-block">
            Academics
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-12 h-1.5 bg-[#00BCD4] rounded-full"></span>
          </h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/academics/pre-primary" className={linkHoverStyle}>Nursery - UKG</Link></li>
            <li><Link to="/academics/primary" className={linkHoverStyle}>Primary (1-5)</Link></li>
            <li><Link to="/academics/middle" className={linkHoverStyle}>Middle (6-8)</Link></li>
            <li><Link to="/admissions" className={linkHoverStyle}>Admission Process</Link></li>
          </ul>
        </div>

        {/* --- 4. Contact Details --- */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-black mb-8 uppercase tracking-widest relative inline-block">
            Find Us
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-12 h-1.5 bg-[#FFB74D] rounded-full"></span>
          </h4>
          <div className="space-y-6 text-sm text-gray-400 font-medium">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 px-4 md:px-0">
              <span className="text-[#00BCD4] text-2xl">📍</span>
              <p className="leading-relaxed">Gram Patna Tamoli, <br /> District Panna, MP - 488001</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3 border-y border-gray-800 py-6 mx-4 md:mx-0">
              <span className="text-[#00BCD4] text-2xl">📞</span>
              <a href="tel:+918770698713" className="text-white font-black text-lg hover:text-[#FF5E5E] transition-colors">
                +91 87706 98713
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3 px-4 md:px-0">
              <span className="text-[#00BCD4] text-2xl">✉️</span>
              <a href="mailto:info@youngachievers.com" className="hover:text-white transition-colors underline decoration-[#00BCD4] underline-offset-4">
                info@youngachievers.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom Footer --- */}
      <div className="container mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-500 font-black tracking-[0.3em] text-center">
        <p className="uppercase">© {new Date().getFullYear()} YOUNG ACHIEVERS SCHOOL. ALL RIGHTS RESERVED.</p>
        <div className="flex items-center gap-2">
          <span>DESIGNED IN PANNA</span>
          <span className="text-[#FF5E5E] text-lg animate-pulse">❤️</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;