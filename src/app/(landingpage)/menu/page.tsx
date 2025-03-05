"use client";
import React from "react";
import Image from "next/image";
import { menuItems } from "@/lib/utils";
import Footer from "@/components/footer";
import Header from "@/components/header";
const Menu = () => {
  return (
    <>
    
    <section className=" bg-pink-300 min-h-screen flex flex-col">
    <Header/>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-8 font-[cursive]">Our Menu</h2>
        {menuItems.map((section) => (
          <div key={section.id} className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              {React.createElement(section.icon,{size:50,className:"text-pink-600"})}
              <h3 className="text-2xl font-semibold text-white font-[cursive]">{section.category}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.items.map((item, index) => (
                <div key={index} className="bg-pink-200 rounded-lg shadow-md p-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h4 className="text-lg font-bold text-pink-600 mt-2">{item.name}</h4>
                  <p className="text-white font-semibold">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Menu;
