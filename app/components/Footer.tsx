import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-6 py-10 bg-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 text-sm md:text-base">
          <button className="text-gray-400 hover:text-white transition">
            About Us
          </button>
          <button className="text-gray-400 hover:text-white transition">
            Work with Us
          </button>
          <button className="text-gray-400 hover:text-white transition">
            Terms of Use & Privacy Policy
          </button>
        </div>

        <Image
          src="/utiles/logo-light.png.png"
          alt="Gravity Team Logo"
          width={150}
          height={50}
          priority
          className="object-contain"
        />
      </div>
    </footer>
  );
};

export default Footer;
