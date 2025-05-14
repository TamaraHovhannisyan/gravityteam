"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full shadow-sm fixed top-0 left-0 bg-black ">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image
            src="/utiles/logo-light.png.png"
            alt="Tamara Studio logo"
            width={150}
            height={50}
          />
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 transition">
            About Us
          </a>
          <a href="#services" className="hover:text-blue-600 transition">
            Our Services
          </a>
          <a href="#careers" className="hover:text-blue-600 transition">
            Work with Us
          </a>
          <a href="#blog" className="hover:text-blue-600 transition">
            Blog
          </a>
        </nav>

        <div className="hidden md:block">
          <Button />
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4 space-y-4 shadow-md">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About Us
            </a>
            <a href="#services" onClick={() => setIsOpen(false)}>
              Our Services
            </a>
            <a href="#careers" onClick={() => setIsOpen(false)}>
              Work with Us
            </a>
            <a href="#blog" onClick={() => setIsOpen(false)}>
              Blog
            </a>
          </nav>
          <Button />
    
        </div>
      )}
    </header>
  );
};

export default Navbar;
