import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-between ">
      <div className='ml-25'>
        <h6>Gravity Team</h6>
        <p>About Us</p>
        <p>Work with Us</p>
        <p>Terms of Use & Privacy Policy</p>
      </div>
      <div className='mr-25'>
        <Image
          src="/utiles/logo-light.png.png"
          alt="logo"
          width={150}
          height={50}
          priority
        />
      </div>
    </div>
  );
};

export default Footer;
