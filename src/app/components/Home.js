
'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaSpotify, FaYoutube, FaPodcast } from "react-icons/fa";
export default function Home() {
  const guests = [
    { name: "Vitalik Buterin", image: "/assets/one.webp" },
    { name: "Beeple", image: "/assets/two.webp" },
    { name: "CZ Zhao", image: "/assets/three.webp" },
    { name: "Madeline", image: "/assets/four.webp" },
  ];

  return (
    <div className="bg-[#f8ede8] h-full p-8 flex flex-col items-center">
      <header className="text-center space-y-4 max-w-2xl">
        <h1 className="text-5xl font-bold text-black">
          Blockchain Buzz <div className="text-red-500 mt-2">Podcast</div>
        </h1>
        <p className="text-gray-700 text-lg leading-tight">
          Unlocking the Future,
        </p>
        <p className="text-gray-700 text-lg -mt-1 leading-tight">
          One Block at a Time
        </p>

        <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300">
          Subscribe
        </button>
      </header>

      <section className="mt-12 w-full max-w-6xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full"
        >
          {guests.map((guest, index) => (
            <SwiperSlide key={index}>
              <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="w-full h-60 relative">
                  <Image
                    src={guest.image}
                    alt={guest.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 flex items-end p-4">
                    <h3 className="text-white text-lg font-semibold">{guest.name}</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <footer className="mt-12 text-center border-b-2 border-t-2 p-6 w-full max-w-4xl border-gray-500">
      <p className="text-gray-700 text-lg mb-4">Available on:</p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-lg font-semibold text-center">
        <span className="text-black w-full sm:w-auto flex items-center space-x-2">
          <FaPodcast className="text-gray-700 text-xl" /> <span>Blockchain Buzz Podcast</span>
        </span>
        <span className="text-green-600 w-full sm:w-auto flex items-center space-x-2">
          <FaSpotify className="text-green-500 text-xl" /> <span>Spotify</span>
        </span>
        <span className="text-red-600 w-full sm:w-auto flex items-center space-x-2">
          <FaYoutube className="text-red-500 text-xl" /> <span>YouTube</span>
        </span>
      </div>
    </footer>
    </div>
  );
}
