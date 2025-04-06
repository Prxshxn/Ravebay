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
import React from "react";

const EventCard = ({ title, date, image }) => {
  return (
    <div className="bg-[#1f1f1f] rounded-lg p-4 text-center shadow-lg">
      <img src={image} alt={title} className="rounded-md mb-4 w-full h-56 object-cover" />
      <h2 className="text-purple-400 font-bold">{title}</h2>
      <p className="text-sm">{date}</p>
      <button className="mt-3 px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition text-sm">
        CHECK OUT
      </button>
    </div>
  );
};

export default EventCard;
