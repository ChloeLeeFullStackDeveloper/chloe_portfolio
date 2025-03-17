import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6">
        © {new Date().getFullYear()} Chloe Lee — Built with React + Tailwind CSS
      </footer>

      {/* Animated gradient bar */}
      <div className="fixed bottom-0 left-0 w-full h-[2px] z-50 bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 animate-gradient bg-[length:200%_200%]" />
    </>
  );
};

export default Footer;
