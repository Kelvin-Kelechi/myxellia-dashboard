import React from "react";
import { TbCalculatorFilled, TbMessage2Filled } from "react-icons/tb";
import { RiNotification2Fill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import myxillia from  '/src/assets/images/Myxellia-admin.png'
interface HeaderProps {
  user: {
    name: string;
    initials: string;
  };
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="bg-[#191919] text-white px-20 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src={myxillia}
            className="h-6 w-auto object-contain mr-4"
            alt="logo"
          />
        </div>

        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <RiNotification2Fill size={27} />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <TbCalculatorFilled size={27} />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <FaCalendarAlt size={22} />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <TbMessage2Filled size={27} />
          </button>

          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-medium">
            {user.initials}
          </div>
        </div>
      </div>
    </header>
  );
};
