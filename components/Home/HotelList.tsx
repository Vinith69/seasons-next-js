"use client";
import { useState } from "react";
import "./css/homepage.css";

const tabs = [
  { name: "Tour", icon: "🚀" },
  { name: "Hotel", icon: "🏨" },
  { name: "Restaurant", icon: "🍽️" },
  { name: "Rental", icon: "🚗" },
  { name: "Activity", icon: "🎭" },
  { name: "Car Rental", icon: "🚙" },
];

export default function HotelList() {
  return (
    <section className="hotelListSection px-4 py-4 w-full bg-[#f8f8f8] text-[#020615]">
      <div className="text-center mb-6">
        <h5 className="capitalize font-bold text-lg text-[#560ce3] font-[caveat] mb-4">Most Popular Tour Packages</h5>
        <h2 className="text-4xl font-bold mb-4">Something Amazing Waiting For You</h2>
      </div>
      <TabComponent />
    </section>
  );
}

function TabComponent() {
  const [activeTab, setActiveTab] = useState("Tour");

  // Slicing for your layout
  const firstThree = tabs.slice(0, 3);
  const lastThree = tabs.slice(3, 6);

  const firstFour = tabs.slice(0, 4);
  const lastTwo = tabs.slice(4, 6);

  // Helper to render a row of tabs
  const renderTabs = (items: typeof tabs) =>
    items.map((tab) => (
      <button
        key={tab.name}
        onClick={() => setActiveTab(tab.name)}
        className={`
          relative flex items-center justify-center py-2 px-2 
          cursor-pointer transition-all duration-300
          text-sm md:text-base 
          ${
            activeTab === tab.name
              ? "text-purple-600 font-bold" // Active text color
              : "text-gray-500 hover:text-purple-600"
          }
          `}
      >
        {/* Icon + Label */}
        <span className="mr-1">{tab.icon}</span>
        <span>{tab.name}</span>

        {/* Active underline (pseudo-element) */}
        {activeTab === tab.name && (
          <span
            className="
              absolute bottom-0 left-0 w-full h-[2px] 
              bg-purple-600
            "
          />
        )}
      </button>
    ));

  return (
    <>
      {/* MOBILE (< md): 2 rows, each with a single bottom border */}
      <div className="block md:hidden">
        <div className="flex flex-col items-center">
          {/* First row (3 items) */}
          <div className="grid grid-cols-3 w-5/6 border-b border-gray-300">{renderTabs(firstThree)}</div>
          {/* Second row (3 items) */}
          <div className="grid grid-cols-3 w-full border-b border-gray-300 mt-2">{renderTabs(lastThree)}</div>
        </div>
      </div>

      {/* TABLET (md to < lg): 2 rows with single bottom border each */}
      <div className="hidden md:block lg:hidden">
        <div className="flex flex-col items-center">
          {/* First row (4 items) */}
          <div className="grid grid-cols-4 border-b border-gray-300">{renderTabs(firstFour)}</div>
          {/* Second row (2 items) */}
          <div className="grid grid-cols-2 border-b border-gray-300 mt-2 w-1/2">{renderTabs(lastTwo)}</div>
        </div>
      </div>

      {/* DESKTOP (>= lg): single row, 6 equal columns, single border */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-6 border-b border-gray-300 max-w-4xl mx-auto">{renderTabs(tabs)}</div>
      </div>
    </>
  );
}
