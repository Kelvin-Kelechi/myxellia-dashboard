import React from "react";
 
import { Building2, ExternalLink } from "lucide-react";
 

export const ListingsOverview: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <Building2 size={16} className="text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Listings Overview</h3>
        </div>
        <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm">
          <span>View all</span>
          <ExternalLink size={14} />
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Total</span>
          <span className="text-sm text-gray-500">Active</span>
          <span className="text-sm text-gray-500">Archived</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900">1.8k</span>
          <span className="text-2xl font-bold text-gray-900">80</span>
          <span className="text-2xl font-bold text-gray-900">1k</span>
        </div>
      </div>
    </div>
  );
};
