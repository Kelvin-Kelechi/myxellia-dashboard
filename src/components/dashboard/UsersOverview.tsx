import React from "react";

import { ExternalLink, Users } from "lucide-react";

export const UsersOverview: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
            <Users size={16} className="text-orange-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Users Overview</h3>
        </div>
        <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm">
          <span>View all</span>
          <ExternalLink size={14} />
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Total</span>
          <span className="text-sm text-gray-500">Riders</span>
          <span className="text-sm text-gray-500">Subscribers</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900">20.7k</span>
          <span className="text-2xl font-bold text-gray-900">8.5k</span>
          <span className="text-2xl font-bold text-gray-900">7.5k</span>
        </div>
      </div>
    </div>
  );
};
