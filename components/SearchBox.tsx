import { FaChevronDown } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { LuCalendar, LuUserRound } from "react-icons/lu";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchBoxProps {
  sectionClass?: string;
}

const SearchBox = ({ sectionClass = "" }: SearchBoxProps) => {
  return (
    <section
      className={`${sectionClass} bg-white rounded-xl lg:rounded-full w-[85vw] max-w-4xl mx-auto flex flex-wrap items-center justify-around shadow-lg py-3 px-4 gap-4`}
    >
      {/* Location */}
      <div className="w-full sm:w-auto flex flex-col items-start">
        <span className="text-gray-400 text-sm mb-1">Location:</span>
        <div className="flex items-center space-x-2">
          <GrLocation className="text-gray-800" />
          <span className="text-gray-800">California City</span>
          <FaChevronDown className="text-gray-600" />
        </div>
      </div>

      {/* Check In */}
      <div className="w-full sm:w-auto flex flex-col items-start">
        <span className="text-gray-400 text-sm mb-1">Check In:</span>
        <div className="flex items-center space-x-2">
          <LuCalendar className="text-gray-800" />
          <span className="text-gray-800">dd/mm/yyyy</span>
          <FaChevronDown className="text-gray-600" />
        </div>
      </div>

      {/* Check Out */}
      <div className="w-full sm:w-auto flex flex-col items-start">
        <span className="text-gray-400 text-sm mb-1">Check Out:</span>
        <div className="flex items-center space-x-2">
          <LuCalendar className="text-gray-800" />
          <span className="text-gray-800">dd/mm/yyyy</span>
          <FaChevronDown className="text-gray-600" />
        </div>
      </div>

      {/* Guests */}
      <div className="w-full sm:w-auto flex flex-col items-start">
        <span className="text-gray-400 text-sm mb-1">Guest:</span>
        <div className="flex items-center space-x-2">
          <LuUserRound className="text-gray-800" />
          <span className="text-gray-800">Add Guests</span>
          <FaChevronDown className="text-gray-600" />
        </div>
      </div>

      {/* Search Button */}
      <button className="bg-[#560ce3] text-white px-8 py-2 rounded-full w-full sm:w-auto flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer hover:bg-[#4a1ba4]">
        <span>Search</span>
        <AiOutlineSearch size={18} />
      </button>
    </section>
  );
};

export default SearchBox;
