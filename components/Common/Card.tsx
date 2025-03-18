import Image from "next/image";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Card() {
  return (
    <div className="max-w-xs w-full  rounded-lg shadow-md overflow-hidden bg-white relative">
      {/* Top section: Image + Offer badge + Heart icon */}
      <div className="relative">
        {/* Offer Badge */}
        <div className="absolute top-2 left-0 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-e-md">% Offer</div>
        {/* Heart / Favorite Icon */}
        <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
          <AiFillHeart size={20} />
        </button>
        {/* Image Placeholder */}
        <Image
          src="https://seasons.jdprojects.in/assets/img/listing/listing-2.jpg"
          alt="Tour"
          width={288}
          height={180}
          className="w-full h-auto"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="font-semibold text-[16px] mb-1">When You Visit The Eternal Dubai City</h3>
        {/* Location + Duration */}
        <div className="flex items-center text-sm text-gray-600 space-x-2 mb-1">
          <div className="flex items-center space-x-1">
            <HiOutlineLocationMarker size={14} />
            <span>Dubai, Emirates</span>
          </div>
          <span className="text-gray-400">|</span>
          <span>5 Days</span>
        </div>
        {/* Pricing */}
        <div className="flex items-center space-x-2 mb-2">
          <span className="line-through text-gray-400 text-sm">$299</span>
          <span className="bg-purple-600 text-white text-sm px-2 py-1 rounded">
            $149 <span className="text-xs">/Person</span>
          </span>
        </div>
        {/* Reviews */}
        <div className="flex items-center text-sm text-gray-500 space-x-1">
          <AiFillStar className="text-yellow-500" size={16} />
          <span>(5 Reviews)</span>
        </div>
      </div>
    </div>
  );
}
