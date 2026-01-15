import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full font-sans sticky top-0 z-50 shadow-sm">
      
      {/* ===== Top Bar ===== */}
      <div className="bg-white py-2 px-6 flex justify-between items-center text-sm text-gray-600 border-b">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="../public/logo.png" alt="Young Achievers School" className="h-10" />
          </Link>
        </div>

        <div className="hidden md:flex gap-8">
          <div className="flex items-center gap-2">
            <span className="text-blue-400">📞</span>
            <span>
              Call Us <br />
              <b>+91 98765 43210</b>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-400">🕒</span>
            <span>
              School Timing <br />
              <b>Mon–Fri 8:00 AM – 2:00 PM</b>
            </span>
          </div>
        </div>
      </div>

      {/* ===== Main Navigation ===== */}
      <nav className="bg-[#FF5E5E] text-white px-6 flex justify-between items-center">
        <ul className="flex items-center text-sm font-medium h-full">

          <Link to="/" className="bg-[#00BCD4] px-6 py-4 hover:bg-cyan-600 transition">
            HOME
          </Link>

          <Link to="/about" className="px-6 py-4 hover:bg-[#e14d4d] transition">
            ABOUT US
          </Link>

          {/* Academics Dropdown */}
          <li className="relative group px-6 py-4 cursor-pointer hover:bg-[#e14d4d] transition">
            ACADEMICS ▾
            <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-gray-800 min-w-[220px] shadow-lg border-t-4 border-[#00BCD4] z-50">
              <Link to="/academics/pre-primary">
                <li className="px-4 py-3 hover:bg-gray-100 border-b">Nursery – UKG</li>
              </Link>
              <Link to="/academics/primary">
                <li className="px-4 py-3 hover:bg-gray-100 border-b">Class 1 – 5</li>
              </Link>
              <Link to="/academics/middle">
                <li className="px-4 py-3 hover:bg-gray-100">Class 6 – 8</li>
              </Link>
            </ul>
          </li>

          {/* Facilities Dropdown */}
          <li className="relative group px-6 py-4 cursor-pointer hover:bg-[#e14d4d] transition">
  FACILITIES ▾

  <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-gray-800 min-w-[220px] shadow-lg border-t-4 border-[#00BCD4] z-50">

    <li className="border-b">
      <Link
        to="/classrooms"
        className="block px-4 py-3 hover:bg-gray-100"
      >
        Smart Classrooms
      </Link>
    </li>

    <li className="border-b">
      <Link
        to="/playground"
        className="block px-4 py-3 hover:bg-gray-100"
      >
        Playground & Sports
      </Link>
    </li>

    <li className="border-b">
      <Link
        to="/library"
        className="block px-4 py-3 hover:bg-gray-100"
      >
        Library
      </Link>
    </li>

    <li>
      <Link
        to="/safety"
        className="block px-4 py-3 hover:bg-gray-100"
      >
        Safety & CCTV
      </Link>
    </li>

  </ul>
</li>

          <Link to="/gallery" className="px-6 py-4 hover:bg-[#e14d4d] transition">
            GALLERY
          </Link>

          <Link to="/contact" className="px-6 py-4 hover:bg-[#e14d4d] transition">
            CONTACT
          </Link>
        </ul>

        {/* Admission CTA */}
        <Link
          to="/admissions"
          className="bg-[#00BCD4] px-6 py-4 font-bold hover:bg-cyan-600 transition border-l border-white/10"
        >
          ADMISSION ENQUIRY
        </Link>
      </nav>
    </header>
  );
};

export default Header;
