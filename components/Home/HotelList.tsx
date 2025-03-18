"use client";
import { useState, useMemo } from "react";
import "./css/homepage.css";
import Card from "../Common/Card";

/** 1) Same tabs array as before */
const tabs = [
  { name: "Tour", icon: "🚀" },
  { name: "Hotel", icon: "🏨" },
  { name: "Restaurant", icon: "🍽️" },
  { name: "Rental", icon: "🚗" },
  { name: "Activity", icon: "🎭" },
  { name: "Car Rental", icon: "🚙" },
];

/** 2) Some sample card data. Each has a "category" that matches one of the tabs. */
const toursData = [
  {
    category: "Tour",
    title: "When You Visit The Eternal Dubai City",
    location: "Dubai, Emirates",
    days: 5,
    oldPrice: 299,
    newPrice: 149,
    reviews: 5,
    image: "https://seasons.jdprojects.in/assets/img/listing/listing-2.jpg",
  },
  {
    category: "Tour",
    title: "Amazing Paris Experience",
    location: "Paris, France",
    days: 7,
    oldPrice: 399,
    newPrice: 299,
    reviews: 10,
    image: "https://seasons.jdprojects.in/assets/img/listing/listing-2.jpg",
  },
  {
    category: "Hotel",
    title: "Luxury Stay at NYC",
    location: "New York, USA",
    days: 3,
    oldPrice: 499,
    newPrice: 359,
    reviews: 12,
    image: "https://seasons.jdprojects.in/assets/img/listing/listing-2.jpg",
  },
  {
    category: "Restaurant",
    title: "Luxury Stay at NYC",
    location: "New York, USA",
    days: 3,
    oldPrice: 499,
    newPrice: 359,
    reviews: 12,
    image: "https://seasons.jdprojects.in/assets/img/listing/listing-2.jpg",
  },
  {
    category: "Rental",
    title: "Luxury Stay at NYC",
    location: "New York, USA",
    days: 3,
    oldPrice: 499,
    newPrice: 359,
    reviews: 12,
    image: "https://seasons.jdprojects.in/assets/img/listing/listing-2.jpg",
  },
  // ... add more items with categories like "Restaurant", "Rental", "Activity", "Car Rental"
];

export default function HotelList() {
  /** 3) Track the active tab, defaulting to "Tour" */
  const [activeTab, setActiveTab] = useState("Tour");

  /** 4) Filter the data by active tab */
  const filteredTours = useMemo(() => toursData.filter((item) => item.category === activeTab), [activeTab]);

  return (
    <section className="hotelListSection px-4 py-4 w-full bg-[#f8f8f8] text-[#020615]">
      <div className="text-center mb-6">
        <h5 className="capitalize font-bold text-lg text-[#560ce3] font-[caveat] mb-4">Most Popular Tour Packages</h5>
        <h2 className="text-4xl font-bold mb-4">Something Amazing Waiting For You</h2>
      </div>

      {/* 5) The existing tab component: no changes to its structure or UI */}
      <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 6) A responsive grid for the filtered cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTours.map((item, idx) => (
          <Card key={idx} data={item} />
        ))}
      </div>
    </section>
  );
}

/**
 * Keep the same TabComponent structure.
 * Just accept activeTab and setActiveTab as props
 * so we can manage it in the parent.
 */
function TabComponent({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (val: string) => void }) {
  // The same multi-row "pyramid" approach
  const firstThree = tabs.slice(0, 3);
  const lastThree = tabs.slice(3, 6);
  const firstFour = tabs.slice(0, 4);
  const lastTwo = tabs.slice(4, 6);

  // For desktop highlight bar
  const activeIndex = useMemo(() => tabs.findIndex((t) => t.name === activeTab), [activeTab]);

  /** Mobile/Tablet border-based tabs */
  const renderTabsWithBorder = (items: typeof tabs) =>
    items.map((tab) => (
      <button
        key={tab.name}
        onClick={() => setActiveTab(tab.name)}
        className={`flex items-center justify-center cursor-pointer py-2 transition-all duration-300
          ${
            activeTab === tab.name
              ? "text-purple-600 border-b-[3px] border-purple-600 font-bold"
              : "text-gray-500 border-b-[2px] border-gray-300 hover:text-purple-600"
          }`}
      >
        <span className="mr-1">{tab.icon}</span>
        <span>{tab.name}</span>
      </button>
    ));

  /** Desktop single row w/ sliding bar */
  const renderDesktopTabs = tabs.map((tab) => (
    <button
      key={tab.name}
      onClick={() => setActiveTab(tab.name)}
      className={`flex-1 flex items-center justify-center 
        cursor-pointer py-3 transition-colors duration-300
        ${activeTab === tab.name ? "text-purple-600 font-bold" : "text-gray-500 hover:text-purple-600"}`}
    >
      <span className="mr-1">{tab.icon}</span>
      <span>{tab.name}</span>
    </button>
  ));

  return (
    <>
      {/* MOBILE (< md): 2 rows (3 + 3) */}
      <div className="block md:hidden">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 w-5/6 gap-0 mb-2">{renderTabsWithBorder(firstThree)}</div>
          <div className="grid grid-cols-3 w-full gap-0">{renderTabsWithBorder(lastThree)}</div>
        </div>
      </div>

      {/* TABLET (>= md < lg): 2 rows (4 + 2) */}
      <div className="hidden md:block lg:hidden">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-4 gap-0 mb-4">{renderTabsWithBorder(firstFour)}</div>
          <div className="grid grid-cols-2 gap-0">{renderTabsWithBorder(lastTwo)}</div>
        </div>
      </div>

      {/* DESKTOP (>= lg): single row with sliding underline */}
      <div className="hidden lg:block">
        <div className="relative w-full max-w-3xl mx-auto border-b border-gray-300">
          <div className="flex">{renderDesktopTabs}</div>
          <div
            className="absolute bottom-0 left-0 transition-transform duration-300"
            style={{
              width: "16.6667%",
              transform: `translateX(${activeIndex * 100}%)`,
            }}
          >
            <span className="borders block h-[4px] bg-purple-600 origin-left animate-grow" />
          </div>
        </div>
      </div>
    </>
  );
}
