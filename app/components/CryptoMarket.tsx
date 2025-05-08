import Image from "next/image";
import React from "react";

const CryptoMarket = () => {
  return (
    <div className="flex flex-col items-center mt-30 gap-10">
      <h3 className="text-4xl font-bold">Crypto Market Making</h3>
      <p className="mb-10">
        We are a global crypto liquidity provider and algorithmic market <br />{" "}
        maker. We trade digital assets listed on Centralized Exchanges in <br />{" "}
        over 15 countries worldwide.
      </p>
      <div className="flex gap-30 ">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl ">
            Market Making for <br /> Crypto Projects
          </h2>
          <p>
            Accelerate your token’s journey by <br /> boosting its liquidity
          </p>
          <p>
            We invest in building long-term,
            <br /> sustainable relationships and support our <br /> projects in
            their growth journey with our <br /> services, industry expertise
            and network.
          </p>
          <button>Learn more</button>
        </div>
        <Image
          src="/utiles/div2.png"
          alt="img"
          width={340}
          height={300}
          priority
          className="object-contain"
        />
      </div>
      <div className="flex items-center gap-30">
        <div>
          <Image
            src="/utiles/exchange-screens-new.png"
            alt="img"
            width={340}
            height={300}
            priority
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">
            Market Making for <br /> Crypto Exchanges
          </h3>
          <h4>
            Attract more traders and projects with <br /> deep order books &
            liquidity
          </h4>
          <p>
            Our world-class market making services are <br /> proven to help
            local and emerging exchanges <br /> win traders and gain
            market-leading positions <br /> of up to 90% market dominance.
          </p>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default CryptoMarket;
