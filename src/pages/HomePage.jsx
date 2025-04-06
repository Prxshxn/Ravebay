import React from "react";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";

const images = [event1, event2, event3];

const events = Array.from({ length: 8 }, (_, i) => ({
  title: "Electric Night",
  date: "March 15, 2025",
  image: images[Math.floor(Math.random() * images.length)],
}));

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="flex justify-center mt-8 px-4">
        <input
          type="text"
          placeholder="Search Events..."
          className="rounded-full px-6 py-2 text-black w-64 focus:outline-none"
        />
        <button className="ml-2 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
            image={event.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
