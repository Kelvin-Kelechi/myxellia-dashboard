import React from "react";
import { IoPeopleOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

export const UsersOverview: React.FC = () => {
  return (
    <>
      <div className="bg-white rounded-[16px] border border-gray-200 overflow-hidden">
        <div className="relative px-4 ">
          <div className="absolute top-0 left-0 w-full h-16 bg-[#F5F5F5] rounded-t-[16px] z-0" />
          <div className="flex items-center justify-between relative z-10 h-14">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7   rounded-full flex items-center justify-center">
                <IoPeopleOutline size={22} className="text-[#5B6BFF]" />
              </div>
              <h3 className="font-semibold text-gray-900 text-[15px]">
                Users Overview
              </h3>
            </div>
            <button className="flex items-center space-x-1 text-[#5B6BFF] hover:text-blue-700 text-xs font-medium">
              <span>View all</span>
              <IoIosArrowForward size={14} />
            </button>
          </div>
        </div>

        <div className="h-px bg-gray-100 my-2 w-full" />

        <div className="px-3 py-10 flex justify-between text-center">
          <div>
            <span className="block text-xs text-gray-500">Total</span>
            <span className="block text-[20px] font-bold text-gray-900">
              20.7k
            </span>
          </div>

          <div>
            <span className="block text-xs text-gray-500">Active</span>
            <span className="block text-[20px] font-bold text-gray-900">
              8.5k
            </span>
          </div>

          <div>
            <span className="block text-xs text-gray-500">Subscribers</span>
            <span className="block text-[20px] font-bold text-gray-900">
              7.5k
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
