import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mt-4 ">
      <div className="flex items-center">
        <Image
          src="/utiles/logo-light.png.png"
          alt="logo"
          width={150}
          height={50}
          priority
          className="ml-5" 
        />
      </div>

      <ul className="flex gap-6">
        <li>About Us</li>
        <li>Our Services</li>
        <li>Work with Us</li>
        <li>Blog</li>
      </ul>

      <button className="mr-7">Get In Touch</button>
    </div>
  );
};

export default Navbar;
