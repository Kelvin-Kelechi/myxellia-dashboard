import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

export const ListingsOverview: React.FC = () => {
  return (
    <div className="bg-white rounded-[16px] border border-gray-200    overflow-hidden">
      {/* Gray header bar covering the header content */}
      <div className="relative px-3 ">
        <div className="absolute top-0 left-0 w-full h-12  bg-[#F5F5F5] rounded-t-[16px] z-0" />
        <div className="flex items-center justify-between relative z-10 h-10">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center">
              <IoHomeOutline size={22} className="text-[#5B6BFF]" />
            </div>
            <h3 className="font-semibold text-gray-900 text-[15px]">
              Listings Overview
            </h3>
          </div>
          <button className="flex items-center space-x-1 text-[#5B6BFF] hover:text-blue-700 text-xs font-medium">
            <span>View all</span>
            <IoIosArrowForward size={14} />
          </button>
        </div>
      </div>
      <div className="h-px bg-gray-100 my-2 w-full" />
      <div className=" px-3  flex flex-col gap-0">
        <div className="flex justify-between items-center py-1">
          <span className="text-xs text-gray-500">Total</span>
          <span className="text-xs text-gray-500">Active</span>
          <span className="text-xs text-gray-500">Archived</span>
        </div>
        <div className="flex justify-between items-center py-1">
          <span className="text-[20px] font-bold text-gray-900">1.8k</span>
          <span className="text-[20px] font-bold text-gray-900">80</span>
          <span className="text-[20px] font-bold text-gray-900">1k</span>
        </div>
      </div>
    </div>
  );
};
