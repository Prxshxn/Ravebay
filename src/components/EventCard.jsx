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
