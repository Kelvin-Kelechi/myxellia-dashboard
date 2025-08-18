import React from "react";
import { clsx } from "clsx";
import { AiOutlineSearch } from "react-icons/ai";
import type { NavigationItem } from "../../types";

interface NavigationProps {
  items: (NavigationItem & {
    filledIcon: React.ComponentType;
    outlineIcon: React.ComponentType;
  })[];
  onItemClick: (item: NavigationItem) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  onItemClick,
}) => {
  return (
    <nav className="bg-white px-20 py-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-16">
          {items.map((item) => {
            const Icon = (
              item.active ? item.filledIcon : item.outlineIcon
            ) as React.ComponentType<{ size?: number; className?: string }>;
            return (
              <button
                key={item.id}
                onClick={() => onItemClick(item)}
                className={clsx(
                  "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  item.active
                    ? "bg-[#F5F5F5] text-gray-900  px-6"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white  px-6"
                )}
              >
                <Icon
                  size={24}
                  className={
                    item.active
                      ? "text-black"
                      : "text-gray-600 group-hover:text-black"
                  }
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="relative">
          <AiOutlineSearch
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search listings, users here..."
            className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </nav>
  );
};
