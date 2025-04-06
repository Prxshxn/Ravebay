import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center bg-black rounded-full border border-purple-600 shadow-xl animate-pulse-purple">
      <div className="text-2xl font-extrabold text-purple-400">🎆 RAVEBAY</div>
      <ul className="hidden md:flex gap-6 text-sm font-medium">
        <li className="hover:text-purple-400 cursor-pointer">Home</li>
        <li className="hover:text-purple-400 cursor-pointer">About</li>
        <li className="hover:text-purple-400 cursor-pointer">Events</li>
        <li className="hover:text-purple-400 cursor-pointer">Merch</li>
        <li className="hover:text-purple-400 cursor-pointer">Contact</li>
        <li className="hover:text-purple-400 cursor-pointer">Download Tickets</li>
      </ul>
      <div className="text-xl">⚪</div>
    </nav>
  );
};

export default Navbar;
