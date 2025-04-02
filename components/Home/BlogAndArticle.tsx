"use client";

import React from "react";
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa";

const articles = [
  {
    title: "Spiritual Sojourn: Pilgrimagee Tours For Soul Seekers",
    category: "Travel River",
    date: "26th Sep, 2024",
    readTime: "5 Mins Read",
    image: "https://seasons.jdprojects.in/assets/img/blog/blog-1.jpg",
  },
  {
    title: "Wine Country Escapes: Vineyard Tours For Connoisseurs",
    category: "Hiking",
    date: "26th Sep, 2024",
    readTime: "5 Mins Read",
    image: "https://seasons.jdprojects.in/assets/img/blog/blog-1.jpg",
  },
  {
    title: "Thrills & Chills: Extreme Sports Tours For Adrenaline",
    category: "Adventure",
    date: "26th Sep, 2024",
    readTime: "5 Mins Read",
    image: "https://seasons.jdprojects.in/assets/img/blog/blog-1.jpg",
  },
];

export default function BlogAndArticle() {
  return (
    <section className="py-12 px-4 bg-gray-100">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <p className="text-xl font-[caveat] text-[#560ce3] font-bold">Blog And Article</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#020615]">Latest News & Articles</h2>
        <p className="text-gray-600 text-lg mt-2">
          Are You Tired Of The Typical Tourist Destinations And Looking To Step Out Of Your Comfort Zone?
        </p>
      </div>

      {/* Blog Section with Flexbox */}
      <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-4 w-full max-w-6xl mx-auto">
        {/* Large Card */}
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col w-full md:w-[376px] md:h-[397px]">
          <img src={articles[0].image} alt={articles[0].title} className="w-full h-[250px] rounded-lg object-cover" />
          <span className="bg-[#560ce3] text-white text-xs px-3 py-1 rounded-sm mt-3 inline-block w-fit">
            {articles[0].category}
          </span>
          <h3 className="text-lg font-bold mt-2">{articles[0].title}</h3>
          <div className="text-gray-500 text-sm flex gap-4 mt-2">
            <span className="flex items-center gap-1">
              <FaRegCalendarAlt /> {articles[0].date}
            </span>
            <span className="flex items-center gap-1">
              <FaRegClock /> {articles[0].readTime}
            </span>
          </div>
        </div>

        {/* Right Side - Small Cards */}
        <div className="flex flex-col gap-4">
          {articles.slice(1).map((article, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-sm p-4 flex gap-4 items-start w-full md:w-[536px] md:h-[196px]"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-[196px] h-[196px] md:w-[150px] md:h-[150px] rounded-lg object-cover"
              />
              <div>
                <span className="bg-[#560ce3] text-white text-xs px-3 py-1 rounded-sm inline-block w-fit">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold mt-1">{article.title}</h3>
                <div className="text-gray-500 text-sm flex gap-4 mt-1">
                  <span className="flex items-center gap-1">
                    <FaRegCalendarAlt /> {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRegClock /> {article.readTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="text-center mt-8 text-[#560ce3]">
        Want To See Our Recent News & Updates?{" "}
        <a href="#" className=" font-semibold hover:underline">
          Click Here To View More
        </a>
      </p>
    </section>
  );
}
