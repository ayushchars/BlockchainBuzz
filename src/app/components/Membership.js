'use client';

export default function Membership() {
  const benefits = [
    {
      title: "Exclusive Early Access",
      description: "📅 Get access to new episodes 24 hours before they're available to the public.",
      image: "/assets/earlyAccess.jpg"
    },
    {
      title: "Bonus Content",
      description: "🎧 Enjoy exclusive bonus episodes, deep dives, and behind-the-scenes content not available to regular listeners.",
      image: "/assets/bonuscontent.jpg"

    },
    {
      title: "Community Access",
      description: "💬 Join a private community of like-minded crypto enthusiasts for networking, discussions, and insider tips.",
      image: "/assets/community.jpeg"

    },
    {
      title: "Members-Only Q&A Sessions",
      description: "❓ Participate in live Q&A sessions with industry experts to get your crypto questions answered directly.",
      image: "/assets/QAsession.jpg"

    },
    {
      title: "Discounts on Merchandise",
      description: "🛍 Receive special discounts on Blockchain Buzz merchandise, including apparel, books, and more.",
      image: "/assets/merchandise.webp"

    },
    {
      title: "And much more!",
      description: "🚀 Priority event access, exclusive reports, and the opportunity to shape future episodes.",
      image: "/assets/star.jpg  "

    }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-8">
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black">Membership Benefits</h2>
        <p className="text-gray-700 mt-2">Become our sponsor and unlock exclusive perks</p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-center flex flex-col items-center"
          >
            <img src={benefit.image} alt={benefit.title} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
            <p className="text-gray-700 mt-3">{benefit.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 text-center">
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          SEE PRICING
        </button>
      </section>
    </div>
  );
}
