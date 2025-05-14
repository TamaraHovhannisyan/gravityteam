import Button from "./Button";

const Balancing = () => {
  return (
    <section className="flex flex-col items-center gap-10 mt-22">
      <h1 className="text-3xl md:text-5xl font-bold text-center ">
        Balancing <br /> Crypto Markets
      </h1>
      <p className="max-w-[90%] md:max-w-lg text-sm md:text-base text-gray-500  mx-auto">
        Our fully automated proprietary quantitative trading software provides
        24/7 liquidity to 170+ crypto assets across 25+ centralized spot and
        derivative crypto exchanges.
      </p>
     <Button/>
    </section>
  );
};

export default Balancing;
