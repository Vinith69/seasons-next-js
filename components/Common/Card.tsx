import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineCalendarToday } from "react-icons/md";

export default function Card() {
  return (
    <div className="relative w-full max-w-xs bg-white rounded-md shadow-sm overflow-hidden">
      {/* Top Section: Badge + Heart Icon + Image */}
      <div className="relative">
        {/* % Offer Badge */}
        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-sm z-10">
          % Offer
        </div>

        {/* Heart (Wishlist) Icon */}
        <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 z-10">
          <AiOutlineHeart size={20} />
        </button>

        {/* Image Placeholder */}
        <img src="https://seasons.jdprojects.in/assets/img/listing/listing-2.jpg" alt="Tour" className="w-full h-auto" />
      </div>

      {/* Content Area */}
      <div className="relative p-4 pb-14">
        {/* Card Title */}
        <h3 className="text-[15px] font-semibold mb-1">When You Visit The Eternal Dubai City</h3>

        {/* Location & Duration */}
        <div className="flex flex-col items-start text-sm text-gray-500 space-x-2 mb-3">
          <div className="flex items-center space-x-1 mb-2">
            <HiOutlineLocationMarker size={14} />
            <span>Dubai, Emirates</span>
          </div>
          <div className="flex items-center space-x-1">
            <MdOutlineCalendarToday size={14} />
            <span>5 Days</span>
          </div>
        </div>

        {/* Angled Purple Shape for New Price */}
        {/* Outer container is absolute so it can overlap the bottom-left corner. */}
        <div className="absolute left-0 bottom-0 h-10 w-[60%] bg-[url(https://seasons.jdprojects.in/assets/img/listing/angle-4.png)] bg-no-repeat overflow-hidden">
          {/* Price text on top of angled shape */}
          <div className="absolute inset-0 flex flex-col items-start justify-start ml-3">
            {/* Old Price (Strikethrough) */}
            <div className="text-gray-400 text-sm line-through">$299</div>
            <span className="text-white text-sm font-semibold">
              $149 <span className="text-xs">/Person</span>
            </span>
          </div>
        </div>

        {/* Star Reviews on Bottom Right */}
        <div className="absolute bottom-2 right-2 flex items-center text-sm text-gray-500">
          <AiFillStar className="text-yellow-500 mr-1" />
          (5 Reviews)
        </div>
      </div>
    </div>
  );
}
