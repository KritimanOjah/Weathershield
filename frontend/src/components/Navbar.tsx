import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow px-6 py-3 ">
      <div className="flex justify-between items-center gap-5">
        {/* Brand */}
        <a href="#" className="text-2xl font-bold text-[#38b8e0]">WS  </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Nav Links */}
        <div className={`w-full lg:flex lg:items-center lg:justify-between ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row gap-4 mt-4 lg:mt-0">
            <li><a href="#" className="text-gray-700 hover:text-[#38b8e0]">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-[#38b8e0]">Link</a></li>
            
            {/* Dropdown */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-[#38b8e0]"
              >
                Dropdown <ChevronDown size={16} />
              </button>
              {dropdownOpen && (
                <div className="absolute bg-white shadow rounded mt-2 p-2 w-48 z-10">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Action</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Another action</a>
                  <hr className="my-1" />
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Something else here</a>
                </div>
              )}
            </li>

            <li><a href="#" className="text-gray-400 cursor-not-allowed">Disabled</a></li>
          </ul>

          {/* Search Form */}
          <form className="mt-4 lg:mt-0 flex gap-2">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 border border-gray-300 rounded focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-1 border border-green-500 text-green-500 hover:bg-green-100 rounded"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
