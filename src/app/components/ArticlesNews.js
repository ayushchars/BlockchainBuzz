'use client';

import Image from "next/image";

export default function ArticlesNews() {
  const articles = [
    {
      title: "5 Common Crypto Myths Debunked",
      category: "BASICS",
      description: "Separating Fact from Fiction in the Digital Economy",
      image: "/assets/Debunked.jpeg",
      tags: ["crypto", "myths"],
      date: "Sep 14",
    },
    {
      title: "Why NFTs Matter",
      category: "ART & NFTs",
      description:
        "Exploring the impact of digital ownership on art and beyond, and the transformation of traditional art markets through NFTs.",
      image: "/assets/Why NFTs.jpg",
      tags: ["art", "nft", "digital ownership"],
      date: "Sep 12",
    }
  ];

  return (
    <div className="bg-white flex flex-col items-center p-8 h-auto">
      <section className="text-center mb-4">
        <h1 className="text-5xl font-extrabold text-black">Articles & News</h1>
        <p className="text-gray-700 mt-2 text-lg">Yes, we have a blog too</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition transform hover:scale-105 overflow-hidden">
            <div className="w-full h-48">
              <Image src={article.image} alt={article.title} width={500} height={200} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <p className="text-xs font-bold text-gray-500">{article.category}</p>
              <h2 className="text-xl font-bold text-gray-900 mt-1">{article.title}</h2>
              <p className="text-gray-600 mt-1 text-sm">{article.description}</p>
              <div className="mt-3 flex justify-between items-center">
                <div className="flex gap-2">
                  {article.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{article.date}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="w-full flex justify-center mt-14">
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          SEE MORE
        </button>
      </section>
    </div>
  );
}
