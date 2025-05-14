import React from "react";

const JoinTeam = () => {
  return (
    <section className="flex justify-center px-4 py-20 bg-black text-white">
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center lg:text-left">
          Join <br /> Gravity Team
        </h2>

        <div className="flex flex-col gap-6 max-w-2xl">
          <p className="text-gray-300 leading-relaxed text-base">
            Join our community of innovators, problem solvers and owners who
            apply scientific discovery techniques to make crypto markets a
            better place for everyone.
          </p>
          <p className="text-gray-300 leading-relaxed text-base">
            As we emphasize it in our name – Gravity Team – we are a team. A
            team of bright, talented people, each a master of their specialty,
            curious about the world and eager to solve new, exciting
            cryptocurrency market problems, build cool stuff and have fun whilst
            doing so!
          </p>

          <a
            href="#"
            className="self-start text-white font-medium underline underline-offset-4"
          >
            Learn more about working with us
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;
