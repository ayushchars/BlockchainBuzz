'use client';

import Image from "next/image";

export default function RecentEpisodes() {
  const episodes = [
    {
      ep: "32",
      title: "From Bitcoin to Altcoins: Navigating Crypto Landscape",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut ultricies odio.",
      image: "/assets/bitcoin.jpeg",
      tags: ["bitcoin", "altcoins"],
      hostAvatar: "/assets/one.webp"
    },
    {
      ep: "31",
      title: "The Rise of Crypto Regulation: What It Means for You",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/regulation.jpeg",
      tags: ["regulations", "law"],
      hostAvatar: "/assets/two.webp"
    },
    {
      ep: "30",
      title: "DeFi Demystified: How Decentralized Finance is Shaping the Future",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/finance.jpeg",
      tags: ["decentralized finance"],
     hostAvatar: "/assets/one.webp"
    },
    {
      ep: "29",
      title: "Smart Contracts: Revolutionizing Transactions",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/Smart.jpeg",
      tags: ["smart contracts", "finance"],
      hostAvatar: "/assets/one.webp"
    },
    {
      ep: "28",
      title: "NFTs Unveiled: The Art of Digital Ownership",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/NFTs Unveiled.jpeg",
      tags: ["nft", "digital ownership"],
      hostAvatar: "/assets/three.webp"
    },
    {
      ep: "27",
      title: "Decoding the Blockchain: Basics and Beyond",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/DecodingBlockchain.jpeg",
      tags: ["blockchain", "crypto basics"],
      hostAvatar: "/assets/one.webp"
    }
  ];

  return (
    <div className="bg-[#F9F6F2] min-h-screen p-8 flex flex-col items-center">
      <section className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-black">Recent Episodes</h2>
        <p className="text-gray-700 mt-2">Available on your favorite platform</p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {episodes.map((episode, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden">
                <Image src={episode.image} alt={episode.title} width={80} height={80} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-red-500">Eps. {episode.ep}</p>
                <h3 className="text-lg font-semibold text-gray-900">{episode.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{episode.description}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {episode.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-500">Hosted by:</p>
              <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
                <Image
            src={episode.hostAvatar}
              alt="Host"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-12 text-center">
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          BROWSE ALL EPISODES
        </button>
      </section>
    </div>
  );
}
