'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header className="bg-[#f8ede8] shadow-md sticky top-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 relative">
        <div className="flex items-center space-x-6">
          <div className="text-black font-bold text-xl">
            <Link href="/">Blockchain Buzz</Link>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/" className="text-black font-semibold hover:text-red-500 transition">
                Episodes
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-black font-semibold hover:text-red-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-black font-semibold hover:text-red-500 transition">
                More
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="border-2 border-black font-bold py-2 px-4 rounded hover:bg-black hover:text-white transition">
            Recent Episodes
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>

        <div className="md:hidden z-50 relative">
          <button
            type="button"
            className={`focus:outline-none transition text-gray-800 `}
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX className="h-8 w-8 z-50 relative" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {isOpen && <div className="fixed inset-0 bg-black/30 z-40" onClick={toggleMenu}></div>}

      <div
        className={`absolute top-16 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[60%] md:hidden z-50 
          ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} 
          transition-all duration-300 ease-in-out`}
      >
        <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
          <ul className="space-y-3">
            <li>
              <Link href="/" className="block text-black font-semibold hover:text-red-500 transition">
                Episodes
              </Link>
            </li>
            <li>
              <Link href="/about" className="block text-black font-semibold hover:text-red-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block text-black font-semibold hover:text-red-500 transition">
                More
              </Link>
            </li>
            <li>
              <button className="w-full bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition">
                Recent Episodes
              </button>
            </li>
            <li>
              <button className="w-full border-2 border-black text-black font-bold py-2 px-4 rounded-lg hover:bg-black hover:text-white transition">
                Subscribe
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
