import React from "react";
import { offers } from "@/lib/utils";

const WhatWeOffer = () => {
  return (
    <section className="py-16 bg-pink-300">
      <div className="max-w-6xl mx-auto px-7 text-center">
        <h2 className="text-3xl font-bold text-white mb-8 font-[cursive]">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="p-6 bg-pink-200 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center text-pink-500 mb-4">
                {React.createElement(offer.icon, { size: 60 })} 
              </div>
              
              <h3 className="text-lg font-semibold text-pink-500 font-[cursive]">{offer.title}</h3>
              <p className="text-white font-[cursive] mt-2">{offer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
