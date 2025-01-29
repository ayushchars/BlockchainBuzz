'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      text: "I was new to blockchain, but this podcast has been a game-changer. The way they break down information is incredible!",
      name: "Alex P.",
      image: "/assets/one.webp",
    },
    {
      text: "I love how they address all of the burning questions and spark new ideas. It's like having a personal crypto mentor!",
      name: "Casey L.",
      image: "/assets/one.webp",
    },
    {
      text: "The Blockchain Buzz Podcast completely transformed my understanding of crypto. It gave me complete knowledge.",
      name: "Jordan M.",
      image: "/assets/one.webp",
    },
    {
      text: "A must-listen for anyone serious about understanding blockchain technology and its real-world applications.",
      name: "Sophia D.",
      image: "/assets/one.webp",
    },
  ];

  const extendedTestimonials = [...testimonials, ...testimonials];

  const sliderRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);

  useEffect(() => {
    const updateScrollAmount = () => {
      if (sliderRef.current) {
        const firstCard = sliderRef.current.querySelector("div");
        if (firstCard) {
          setScrollAmount(firstCard.clientWidth + 24);
        }
      }
    };

    updateScrollAmount();
    window.addEventListener("resize", updateScrollAmount);
    return () => window.removeEventListener("resize", updateScrollAmount);
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      let newScroll = Math.max(0, currentScroll - scrollAmount);
      sliderRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
      setCurrentScroll(newScroll);
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      let maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      let newScroll = Math.min(maxScroll, currentScroll + scrollAmount);
      sliderRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
      setCurrentScroll(newScroll);
    }
  };

  return (
    <div className="bg-[#F4F8FC] px-6 md:px-12 py-16 relative overflow-hidden min-h-fit flex flex-col items-center">
      <section className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-black relative inline-block">
          What Our Listeners Say
          <span className="absolute -top-2 -right-8 text-red-500 animate-spin-slow">✦</span>
        </h2>
        <p className="text-gray-600 mt-2 text-lg">Their experience throughout every platform</p>
      </section>

      <section className="relative w-full">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar whitespace-nowrap"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg w-full sm:w-[85%] md:w-[400px] lg:w-[420px] flex-shrink-0 overflow-hidden"
            >
              <p className="text-red-500 text-4xl font-bold leading-none mb-4">“</p>
              <p className="text-gray-800 text-lg text-wrap break-words">{testimonial.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <p className="text-gray-800 font-semibold">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="absolute bottom-4 left-6 md:left-12 flex gap-3 mt-4">
        <button
          onClick={scrollLeft}
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-500 rounded-full hover:bg-gray-500 hover:text-white transition"
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition"
        >
          →
        </button>
      </section>
    </div>
  );
}
