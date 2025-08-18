import React from "react";
import { IoPeopleOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

export const UsersOverview: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 bg-purple-100 rounded-lg flex items-center justify-center">
            <IoPeopleOutline size={20} className="text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900 text-[15px]">
            Users Overview
          </h3>
        </div>
        <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-xs font-medium">
          <span>View all</span>
          <IoIosArrowForward size={14} />
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">Total</span>
          <span className="text-xs text-gray-500">Riders</span>
          <span className="text-xs text-gray-500">Subscribers</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">20.7k</span>
          <span className="text-xl font-bold text-gray-900">8.5k</span>
          <span className="text-xl font-bold text-gray-900">7.5k</span>
        </div>
      </div>
    </div>
  );
};
