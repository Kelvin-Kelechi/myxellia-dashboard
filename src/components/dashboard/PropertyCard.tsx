import React, { useState, useEffect } from "react";
import type { PropertyListing } from "../../types";

interface PropertyCardProps {
  property: PropertyListing;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!property.images || property.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % property.images!.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [property.images]);

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

  return (
    <div className="relative rounded-xl overflow-hidden group cursor-pointer">
      <div className="aspect-[4/3] bg-gray-200">
        {property.images && property.images.length > 0 ? (
          <img
            src={property.images[currentIndex]}
            alt={property.title}
            className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          />
        ) : property.image ? (
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
            <div className="text-gray-600 text-sm">No Image</div>
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4">
        <div>
          <span className="text-xs font-semibold text-white opacity-80">
            {getCategoryLabel(property.category)}
          </span>
          <h3 className="text-white font-semibold text-lg">{property.title}</h3>
        </div>

        {property.images && property.images.length > 1 && (
          <div className="absolute bottom-[7px] left-1/2 -translate-x-1/2 flex space-x-2">
            {property.images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
