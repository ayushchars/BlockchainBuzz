'use client';

import { FaTwitter, FaInstagram, FaTiktok, FaSpotify, FaYoutube, FaGooglePlay, FaApple } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white p-8 border-t text-gray-700">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div>
          <h2 className="text-lg font-bold flex items-center">
            <span className="text-black">Blockchain</span> <span className="text-red-500 ml-1">Buzz Podcast</span>
          </h2>
          <p className="mt-2">Unlocking the Future, One Block at a Time.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-red-500 text-xl"><FaTwitter /></a>
            <a href="#" className="text-black text-xl"><FaInstagram /></a>
            <a href="#" className="text-black text-xl"><FaTiktok /></a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500 font-medium">About</a></li>
              <li><a href="#" className="hover:text-red-500 font-medium">Testimonials</a></li>
              <li><a href="#" className="hover:text-red-500 font-medium">Features</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500 font-medium">Episodes</a></li>
              <li><a href="#" className="hover:text-red-500 font-medium">Pricing</a></li>
              <li><a href="#" className="hover:text-red-500 font-medium">Blog</a></li>
            </ul>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">Listen to episodes on your fav platform:</p>
          <div className="flex items-center space-x-4 mt-2">
            <a href="#" className="flex items-center space-x-2 text-green-500 text-sm">
              <FaSpotify /> <span>Spotify</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-red-500 text-sm">
              <FaYoutube /> <span>YouTube</span>
            </a>
          </div>
          
          <p className="text-sm font-semibold mt-4">Blockchain Buzz App available on:</p>
          <div className="flex items-center space-x-4 mt-2">
            <a href="#" className="text-gray-700 text-lg"><FaGooglePlay /></a>
            <a href="#" className="text-black text-lg"><FaApple /></a>
          </div>
        </div>

      </div>

      <div className="border-t mt-6 pt-4 text-center text-gray-600 text-sm">
        <p>© All Rights Reserved. <span className="text-red-500">Blockchain Buzz Podcast</span></p>
      </div>
    </footer>
  );
}
