import Image from "next/image";
import React from "react";

const AboutTm = () => {
  return (
    <div className="flex flex-col items-center mt-40 gap-10">
      <h3 className="text-4xl font-bold">About Gravity Team</h3>
      <p>
        At Gravity Team, we are on the mission to balance the supply <br />
        and demand across crypto markets worldwide. We are a crypto <br />
        native market maker founded by traders, developers, and
        <br />
        innovators who are strong believers and supporters of the future <br />
        of decentralization and digital assets.
      </p>

      <div className="relative w-[870px] h-[270px]">
        <Image
          src="/utiles/div.png"
          alt="img"
          fill
          priority
          className="object-contain" 
        />
      </div>
    </div>
  );
};

export default AboutTm;
