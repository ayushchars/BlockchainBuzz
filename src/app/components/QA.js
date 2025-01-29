'use client';

import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white h-auto p-4 md:p-6">
      <section className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
          Your Questions Answered and Ideas Illuminated
        </h2>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
        <div className="max-w-xs md:max-w-sm text-center">
          <div className="w-full aspect-[16/9] rounded-lg mb-3 overflow-hidden">
            <Image
              src="/assets/QA.png"
              alt="Crypto learning"
              width={300}
              height={160}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <p className="text-gray-700 text-sm md:text-base">
            Confused about crypto? Dive into the Blockchain Buzz Podcast, where we decode the complexities and make sense of the digital revolution.
          </p>
        </div>

        <div className="max-w-xs md:max-w-sm text-center">
          <div className="w-full aspect-[16/9] rounded-lg mb-3 overflow-hidden">
            <Image
              src="/assets/Idea.png"
              alt="Crypto learning"
              width={300}
              height={160}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <p className="text-gray-700 text-sm md:text-base">
            Brighten and expand your crypto knowledge with the Blockchain Buzz Podcast. We illuminate the path to understanding blockchain, one idea at a time.
          </p>
        </div>
      </section>

      <section className="mt-10 text-center">
        <div className="bg-[#f8ede8] p-5 md:p-6 rounded-lg shadow-lg max-w-md md:max-w-xl mx-auto">
          <p className="text-lg md:text-xl font-bold text-black leading-relaxed">
            “The pulse of decentralized finance. Your gateway to all things crypto.”
          </p>
          <div className="mt-3 flex flex-col sm:flex-row justify-center items-center gap-3">
            <Image
              src="/assets/one.webp"
              alt="Allan Mendes"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="text-gray-700 font-semibold text-sm md:text-base">
              Allan Mendes <span className="text-green-600">● Social Community Manager</span>
            </p>
          </div>
        </div>
      </section>
    </div> 
  );
}
