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

  // Slice arrays for easier layout
  const firstThree = tabs.slice(0, 3);
  const lastThree = tabs.slice(3, 6);

  const firstFour = tabs.slice(0, 4);
  const lastTwo = tabs.slice(4, 6);

  // A helper to render tab buttons
  const renderTabs = (items: typeof tabs) =>
    items.map((tab) => (
      <button
        key={tab.name}
        onClick={() => setActiveTab(tab.name)}
        className={`flex items-center justify-center 
          cursor-pointer py-2 px-0 transition-colors 
          ${
            activeTab === tab.name
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500 border-b-2 border-gray-500 hover:text-purple-600"
          }
        `}
      >
        <span className="mr-1">{tab.icon}</span>
        <span className={`${activeTab === tab.name && "font-bold"}`}>{tab.name}</span>
      </button>
    ));

  return (
    <>
      {/* 1) MOBILE: < md 
          - 2 rows, each with 3 columns 
          - 1st row narrower (w-3/4), 2nd row full (w-full)
      */}
      <div className="block md:hidden">
        <div className="flex flex-col items-center">
          {/* First row (3 items, narrower width) */}
          <div className="grid grid-cols-3 w-5/6 gap-0 mb-2">{renderTabs(firstThree)}</div>
          {/* Second row (3 items, full width) */}
          <div className="grid grid-cols-3 w-full gap-0">{renderTabs(lastThree)}</div>
        </div>
      </div>

      {/* 2) TABLET: >= md and < lg
          - 2 rows: 
            - first row has 4 columns, 
            - second row has 2 columns 
          - both centered
      */}
      <div className="hidden md:block lg:hidden">
        <div className="flex flex-col items-center">
          {/* First row (4 items) */}
          <div className="grid grid-cols-4 gap-0 mb-4">{renderTabs(firstFour)}</div>
          {/* Second row (2 items) */}
          <div className="grid grid-cols-2 gap-0">{renderTabs(lastTwo)}</div>
        </div>
      </div>

      {/* 3) DESKTOP: >= lg
          - single row of all 6
      */}
      <div className="hidden lg:flex space-x-6 justify-center">{renderTabs(tabs)}</div>
    </>
  );
}
