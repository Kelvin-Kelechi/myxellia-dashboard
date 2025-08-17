import React from "react";
import type { PropertyListing } from "../../types";
 

interface PropertyCardProps {
  property: PropertyListing;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const getCategoryLabel = (category: PropertyListing["category"]) => {
    switch (category) {
      case "most-clicked":
        return "MOST CLICKED";
      case "most-watchlisted":
        return "MOST WATCHLISTED";
      case "hottest-listing":
        return "HOTTEST LISTING";
    }
  };

  const getCategoryColor = (category: PropertyListing["category"]) => {
    switch (category) {
      case "most-clicked":
        return "text-blue-600";
      case "most-watchlisted":
        return "text-green-600";
      case "hottest-listing":
        return "text-orange-600";
    }
  };

  return (
    <div className="relative rounded-lg overflow-hidden group cursor-pointer">
      <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200">
        {/* Placeholder for property image */}
        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
          <div className="text-gray-600 text-sm">Property Image</div>
        </div>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4">
        <div className="flex justify-between items-start">
          <span
            className={`text-xs font-semibold px-2 py-1 bg-white bg-opacity-90 rounded ${getCategoryColor(
              property.category
            )}`}
          >
            {getCategoryLabel(property.category)}
          </span>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-2">
            {property.title}
          </h3>
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((dot, index) => (
              <div
                key={dot}
                className={`w-2 h-2 rounded-full ${
                  index === 0 ? "bg-white" : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
