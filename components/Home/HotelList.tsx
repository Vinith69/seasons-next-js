"use client";
import { useState, useMemo } from "react";
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

  // For multi-row layout
  const firstThree = tabs.slice(0, 3);
  const lastThree = tabs.slice(3, 6);
  const firstFour = tabs.slice(0, 4);
  const lastTwo = tabs.slice(4, 6);

  // Find the index of the active tab (0..5)
  const activeIndex = useMemo(() => tabs.findIndex((t) => t.name === activeTab), [activeTab]);

  /**
   * Renders tabs with their own border for mobile & tablet.
   * Each button gets a purple border if active, gray border if inactive.
   */
  const renderTabsWithBorder = (items: typeof tabs) =>
    items.map((tab) => {
      const isActive = tab.name === activeTab;
      return (
        <button
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
          className={`flex items-center justify-center 
            cursor-pointer py-2 transition-all duration-300
            ${
              isActive
                ? "text-purple-600 border-b-[3px] border-purple-600 font-bold"
                : "text-gray-500 border-b-[2px] border-gray-300 hover:text-purple-600"
            }`}
        >
          <span className="mr-1">{tab.icon}</span>
          <span>{tab.name}</span>
        </button>
      );
    });

  /**
   * Desktop: Single row with a sliding highlight bar.
   * Each button has no bottom border; the bar is shared.
   */
  const renderDesktopTabs = tabs.map((tab) => {
    const isActive = tab.name === activeTab;
    return (
      <button
        key={tab.name}
        onClick={() => setActiveTab(tab.name)}
        className={`flex-1 flex items-center justify-center 
          cursor-pointer py-3 transition-colors duration-300
          ${isActive ? "text-purple-600 font-bold" : "text-gray-500 hover:text-purple-600"}`}
      >
        <span className="mr-1">{tab.icon}</span>
        <span>{tab.name}</span>
      </button>
    );
  });

  return (
    <>
      {/* MOBILE (< md): 2 rows (3 + 3) */}
      <div className="block md:hidden">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 w-5/6 gap-0 mb-2">{renderTabsWithBorder(firstThree)}</div>
          <div className="grid grid-cols-3 w-full gap-0">{renderTabsWithBorder(lastThree)}</div>
        </div>
      </div>

      {/* TABLET (>= md and < lg): 2 rows (4 + 2) */}
      <div className="hidden md:block lg:hidden">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-4 gap-0 mb-4">{renderTabsWithBorder(firstFour)}</div>
          <div className="grid grid-cols-2 gap-0">{renderTabsWithBorder(lastTwo)}</div>
        </div>
      </div>

      {/* DESKTOP (>= lg): single row with a sliding + expanding purple bar */}
      <div className="hidden lg:block">
        {/* 
          1) A container with border-b so there's a baseline.
          2) We'll place a .borders <span> absolutely at bottom. 
        */}
        <div className="relative w-full max-w-3xl mx-auto border-b border-gray-300">
          {/* The row of tabs */}
          <div className="flex">{renderDesktopTabs}</div>

          {/* 
            The sliding + expanding bar. 
            - width: 16.6667% (1/6) so each tab is the same fraction
            - transform: translateX( activeIndex * 100% ) to move horizontally
            - inside, a .borders that animates from 0 to 100% scale
          */}
          <div
            className="absolute bottom-0 left-0 transition-transform duration-300"
            style={{
              width: "16.6667%",
              transform: `translateX(${activeIndex * 100}%)`,
            }}
          >
            {/* This .borders spans from 0 to 100% using a keyframe */}
            <span className="borders block h-[4px] bg-purple-600 origin-left animate-grow" />
          </div>
        </div>
      </div>
    </>
  );
}
