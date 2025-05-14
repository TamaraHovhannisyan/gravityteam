import Image from "next/image";
import React from "react";

const AboutTm = () => {
  return (
    <section className="flex flex-col items-center mt-40 gap-10 px-4 text-center">
      <h3 className="text-4xl font-bold text-white">About Gravity Team</h3>
      <p className="max-w-3xl text-base text-gray-400 leading-relaxed">
        At Gravity Team, we are on the mission to balance the supply and demand
        across crypto markets worldwide. We are a crypto native market maker
        founded by traders, developers, and innovators who are strong believers
        and supporters of the future of decentralization and digital assets.
      </p>

      <div className="relative w-full max-w-5xl h-64 md:h-72 lg:h-80">
        <Image
          src="/utiles/div.png"
          alt="img"
          fill
          priority
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default AboutTm;
