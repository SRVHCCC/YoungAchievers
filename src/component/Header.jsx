import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to close all menus
  const closeAllMenus = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  // Toggle dropdown specifically for mobile
  const toggleDropdown = (e) => {
    // Stop event from reaching the NavLinks inside
    if (window.innerWidth < 768) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  // Active link style function
  const activeStyle = ({ isActive }) =>
    isActive
      ? "bg-[#00BCD4] text-white px-6 py-4 w-full md:w-auto transition"
      : "px-6 py-4 w-full md:w-auto hover:bg-[#e14d4d] transition";

  return (
    <header className="w-full font-sans sticky top-0 z-50 shadow-sm">
      
      {/* ===== Top Bar ===== */}
      <div className="bg-white py-2 px-4 md:px-6 flex justify-between items-center text-sm text-gray-600 border-b">
        <Link to="/" onClick={closeAllMenus}>
          <img src="/logo.png" alt="Young Achievers" className="h-8 md:h-10" />
        </Link>

        <div className="hidden md:flex gap-8">
          <div className="flex items-center gap-2">
            <span className="text-blue-400">📞</span>
            <span>Call Us <br /> <b>+91 87706 98713</b></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-400">🕒</span>
            <span>School Timing <br /> <b>Mon–Fri 8:00 AM – 2:00 PM</b></span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => {
            setIsOpen(!isOpen);
            if(isOpen) setIsDropdownOpen(false); // Menu band ho to dropdown bhi reset ho
          }}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* ===== Main Navigation ===== */}
      <nav className={`${isOpen ? "block" : "hidden"} md:flex bg-[#FF5E5E] text-white px-0 md:px-6 justify-between items-center transition-all`}>
        <ul className="flex flex-col md:flex-row items-start md:items-center text-sm font-medium w-full md:w-auto">
          
          <NavLink to="/" className={activeStyle} onClick={closeAllMenus}>
            HOME
          </NavLink>

          <NavLink to="/about" className={activeStyle} onClick={closeAllMenus}>
            ABOUT US
          </NavLink>

          {/* Academics Dropdown */}
          <li 
            className="relative group w-full md:w-auto cursor-pointer"
            onClick={toggleDropdown} 
          >
            <div className="px-6 py-4 border-b border-white/10 md:border-none hover:bg-[#e14d4d] flex justify-between items-center uppercase">
              ACADEMICS {isDropdownOpen ? "▴" : "▾"}
            </div>
            
            {/* Dropdown Menu */}
            <ul className={`md:absolute left-0 top-full bg-white text-gray-800 min-w-[220px] shadow-lg border-t-4 border-[#00BCD4] z-50 
              ${isDropdownOpen ? "block" : "hidden"} md:group-hover:block`}>
              
              <NavLink to="/academics/pre-primary" onClick={closeAllMenus}>
                <li className="px-4 py-3 hover:bg-gray-100 border-b">Nursery – UKG</li>
              </NavLink>
              
              <NavLink to="/academics/primary" onClick={closeAllMenus}>
                <li className="px-4 py-3 hover:bg-gray-100 border-b">Class 1 – 5</li>
              </NavLink>
              
              <NavLink to="/academics/middle" onClick={closeAllMenus}>
                <li className="px-4 py-3 hover:bg-gray-100">Class 6 – 8</li>
              </NavLink>
            </ul>
          </li>

          <NavLink to="/gallery" className={activeStyle} onClick={closeAllMenus}>
            GALLERY
          </NavLink>

          <NavLink to="/contact" className={activeStyle} onClick={closeAllMenus}>
            CONTACT
          </NavLink>
        </ul>

        {/* Admission CTA */}
        <NavLink
          to="/admissions"
          onClick={closeAllMenus}
          className={({ isActive }) => 
            `block w-full md:w-auto px-6 py-4 font-bold text-center border-t md:border-t-0 md:border-l border-white/20 transition ${
              isActive ? "bg-cyan-700" : "bg-[#00BCD4] hover:bg-cyan-600"
            }`
          }
        >
          ADMISSION ENQUIRY
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;