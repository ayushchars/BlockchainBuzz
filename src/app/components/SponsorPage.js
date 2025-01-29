'use client';

export default function SponsorPage() {
  const plans = [
    {
      name: "Normie",
      description: "Perfect for casual listeners, this tier offers early access to episodes, bonus content, community engagement, and discounts on merch.",
      price: "$3.99",
      features: [
        "Early Access to Episodes",
        "Exclusive Bonus Content",
        "Community Access",
        "5% Merch Discounts"
      ],
      highlight: false,
    },
    {
      name: "Degen",
      description: "Tailored to dedicated crypto enthusiasts, so-called crypto degens. You know how you are.",
      price: "$7.99",
      features: [
        "<strong>All Normie Benefits</strong>",
        "Members-Only Q&A",
        "Exclusive Reports",
        "Priority Event Registration",
        "Exclusive Live Webinars"
      ],
      highlight: true,
    },
    {
      name: "Whale",
      description: "The ultimate experience for those whose seed phrase is stored in three different continents.",
      price: "$99.99",
      features: [
        "<strong>All Normie & Degen Benefits</strong>",
        "Exclusive Badge on Livestreaming",
        "Influence Podcast Topics",
        "Premium Networking Events",
        "30 min 1-on-1 Consultation"
      ],
      highlight: false,
    }
  ];

  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-black">Become our sponsor</h1>
        <p className="text-gray-700 mt-4 text-lg">Get exclusive episodes, merch and more</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl border ${
              plan.highlight ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"
            } shadow-lg text-center transition-transform hover:scale-105 relative`}
          >
            {plan.highlight && (
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                MOST POPULAR
              </span>
            )}
            <h2 className="text-2xl font-semibold text-gray-900">{plan.name}</h2>
            <p className="text-gray-600 mt-3">{plan.description}</p>
            <p className="text-3xl font-bold text-black mt-6">{plan.price} <span className="text-sm font-normal">/month</span></p>
            <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              SUBSCRIBE
            </button>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-16">
  {plans.map((plan, index) => (
    <div
      key={index}
      className={`p-6 border border-gray-300 rounded-lg shadow-lg ${
        plan.highlight ? "bg-red-50 border-red-300" : "bg-white"
      }`}
    >
      <h3 className="text-lg font-semibold text-gray-900">What's Included:</h3>
      <ul className="mt-4 space-y-2 text-gray-700">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <span className="text-red-500 mr-2">•</span>
            <span dangerouslySetInnerHTML={{ __html: feature }} />
          </li>
        ))}
      </ul>
    </div>
  ))}
</section>
    </div>
  );
}
