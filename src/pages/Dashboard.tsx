import React from "react";
import { SalesOverview } from "../components/dashboard/SalesOverview";
import { ListingsOverview } from "../components/dashboard/ListingsOverview";
import { UsersOverview } from "../components/dashboard/UsersOverview";
import { PROPERTY_LISTINGS } from "../utils/constants";
import { PropertyCard } from "../components/dashboard/PropertyCard";
 

export const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            Welcome, Ahmed
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {/* Sales Overview - spans 2 columns */}
          <div className="col-span-2">
            <SalesOverview />
          </div>

          {/* Right Side Cards - spans 1 column */}
          <div className="space-y-6">
            <ListingsOverview />
            <UsersOverview />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {PROPERTY_LISTINGS.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};
