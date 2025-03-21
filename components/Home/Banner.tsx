import { FaPlay } from "react-icons/fa";
import "./css/homepage.css";

const Banner = () => {
  return (
    <section className=" max-w-5xl md:max-h-64 mx-20 lg:mx-auto my-8 overflow-hidden rounded-xl shadow-md flex flex-col md:flex-row">
      {/* Left Side: Video Preview + Play Button */}
      <div className="video-section relative bg-gray-300 w-full md:w-3/5 h-64 md:h-[230px] flex items-center justify-center">
        {/* Play Button (pulsing) */}
        <button className="group absolute flex items-center justify-center cursor-pointer">
          {/* The pulsing ring */}
          <span className="absolute inline-flex h-16 w-16 rounded-full bg-purple-600 opacity-75 animate-ping" />
          {/* The white circle behind the play icon */}
          <span className="relative inline-flex h-16 w-16 rounded-full bg-white items-center justify-center text-purple-600">
            <FaPlay />
          </span>
        </button>
      </div>

      {/* Right Side: Promo Content */}
      <div className="promo-section w-full md:w-1/3 lg:w-1/2 bg-[#0d1b4c] text-white p-6 flex flex-col items-center justify-center">
        <h2 className="text-sm mb-1">Enjoy Summer Deals</h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Up to 40% Discount!</h3>
        <button className="bg-[#560ce3] hover:bg-[#570ce3c0] text-white cursor-pointer text-sm px-4 py-2 rounded-sm flex items-center">
          SEE DETAILS
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Banner;
