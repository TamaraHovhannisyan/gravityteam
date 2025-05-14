import Image from "next/image";
import React from "react";

const CryptoMarket = () => {
  return (
    <section className="flex flex-col items-center mt-12 gap-10 px-4">
      <h3 className="text-4xl font-bold text-white text-center">
        Crypto Market Making
      </h3>

      <p className="max-w-3xl text-center text-gray-400 mb-10 leading-relaxed">
        We are a global crypto liquidity provider and algorithmic market maker.
        We trade digital assets listed on centralized exchanges in over 15
        countries worldwide.
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-6xl gap-10 md:gap-20">
        <div className="flex flex-col gap-4 flex-1">
          <h4 className="text-2xl font-semibold text-white">
            Market Making for <br /> Crypto Projects
          </h4>
          <p className="text-gray-400">
            Accelerate your token’s journey by boosting its liquidity.
          </p>
          <p className="text-gray-400">
            We invest in building long-term, sustainable relationships and
            support our projects in their growth journey with our services,
            industry expertise, and network.
          </p>
          <a
            href="#"
            className="self-start text-white font-medium underline underline-offset-4"
          >
            Learn more
          </a>
        </div>

        <div className="flex-1">
          <Image
            src="/utiles/div2.png"
            alt="Crypto project example"
            width={500}
            height={300}
            className="object-contain w-full"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-6xl">
        <div className="flex-1 w-full">
          <Image
            src="/utiles/exchange-screens-new.png"
            alt="img"
            width={500}
            height={300}
            className="object-contain w-full"
            priority
          />
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-2xl font-semibold text-white">
            Market Making for <br /> Crypto Exchanges
          </h3>
          <h4 className="text-white">
            Attract more traders and projects with deep order books & liquidity
          </h4>
          <p className="text-gray-400">
            Our world-class market making services are proven to help local and
            emerging exchanges win traders and gain market-leading positions of
            up to 90% market dominance.
          </p>
          <div>
            <a
              href="#"
              className="self-start text-white font-medium underline underline-offset-4"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoMarket;
