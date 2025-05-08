import React from 'react'

const Partners = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-20">
      <h2 className="text-4xl">
        Our Partners <br /> & Friends
      </h2>
      <h2 className="text-4xl">We are in a good company</h2>
      <p>
        Our partnerships have delivered great value to our projects and <br />
        we’re happy to share some of their feedback below
      </p>
      <div className="flex gap-4">
        <button className="border-2 border-white rounded-full px-4 py-2 text-white">
          {"<-"}
        </button>
        <button className="border-2 border-white rounded-full px-4 py-2 text-white">
          {"->"}
        </button>
      </div>

      <p>
        Since 2019, Gravity team has been an astounding <br /> market maker for Bitkub.
        They have proven themselves <br />to be one of the most consistent, committed
        and <br />driven market makers on our exchange. Gravity Team <br />has contributed
        high-quality volume and has proven to <br />be very reliable and trustworthy
        partner. We strongly <br /> advocate Gravity Team as they have been an <br />
        indispensable part of our market-making team.
      </p>
      <h2>Atthakrit Chimplapibul</h2>
    </div>
  );
}

export default Partners