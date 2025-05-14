import React from "react";

const Partners = () => {
  return (
    <section className="flex flex-col items-center text-center gap-8 py-20 px-4 bg-[#0B0B0B] text-white">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold leading-tight mb-2">
          Our Partners <br /> & Friends
        </h2>
        <h3 className="text-2xl font-medium text-gray-300 mb-4">
          We are in good company
        </h3>
        <p className="text-base text-gray-400 leading-relaxed">
          Our partnerships have delivered great value to our projects,{" "}
          <br className="hidden sm:block" />
          and we’re happy to share some of their feedback below.
        </p>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          aria-label="Previous"
          className="bg-gradient-to-r from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] text-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition"
        >
          ←
        </button>
        <button
          aria-label="Next"
          className="bg-gradient-to-r from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] text-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition"
        >
          →
        </button>
      </div>

      <blockquote className="max-w-3xl text-gray-400 text-base leading-relaxed mt-6">
        <p>
          “Since 2019, Gravity Team has been an astounding market maker for
          Bitkub. They have proven themselves to be one of the most consistent,
          committed, and driven market makers on our exchange. Gravity Team has
          contributed high-quality volume and has proven to be a very reliable
          and trustworthy partner. We strongly advocate for Gravity Team as they
          have been an indispensable part of our market-making team.”
        </p>
        <footer className="mt-4 text-white font-semibold">
          Atthakrit Chimplapibul
        </footer>
      </blockquote>
    </section>
  );
};

export default Partners;
