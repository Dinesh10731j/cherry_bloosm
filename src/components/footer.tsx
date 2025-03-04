import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Cherry Blossom Cafe. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
