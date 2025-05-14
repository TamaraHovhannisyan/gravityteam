import React from "react";
import Button from "./Button";

const ContactUs = () => {
  return (
    <section className="flex flex-col items-center px-4 py-20 gap-8 bg-black text-white text-center">
      <h2 className="text-4xl font-bold">Contact Us</h2>

      <p className="max-w-2xl text-base text-gray-300 leading-relaxed">
        We are always open to discuss new value-adding partnerships. Do reach
        out if you are an exchange or a project looking for liquidity; an
        algorithmic trader or a software developer looking to improve the
        markets with us — or just have a great idea you can’t wait to share!
      </p>

      <Button/>
    </section>
  );
};

export default ContactUs;
