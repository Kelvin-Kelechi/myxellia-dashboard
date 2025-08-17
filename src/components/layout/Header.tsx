import React from "react";
import { Bell, Calendar, Calculator, Dice6 } from "lucide-react";

interface HeaderProps {
  user: {
    name: string;
    initials: string;
  };
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="bg-gray-900 text-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <div className="w-6 h-6 bg-gray-900 rounded-sm flex items-center justify-center">
              <div className="text-white text-xs font-bold">⚙</div>
            </div>
          </div>
          <span className="text-xl font-semibold">myxellia</span>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <Bell size={20} />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <Calendar size={20} />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <Calculator size={20} />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <Dice6 size={20} />
          </button>

          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-medium">
            {user.initials}
          </div>
        </div>
      </div>
    </header>
  );
};
