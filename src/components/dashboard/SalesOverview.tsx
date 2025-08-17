import React, { useState } from "react";
import { MetricCard } from "./MetricCard";
import { METRICS } from "../../utils/constants";
import { SalesChart } from "../charts/SalesChart";

export const SalesOverview: React.FC = () => {
  const [timeframe, setTimeframe] = useState<"1 Week" | "1 Month" | "1 Year">(
    "1 Month"
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Sales Overview
          </h2>
          <p className="text-xs text-gray-500">
            Showing overview Jan 2022 - Sep 2022
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-3 py-1 text-xs text-gray-600 hover:text-gray-900 border border-gray-300 rounded-full">
            View Transactions
          </button>
          <div className="flex bg-gray-100 rounded-lg p-1">
            {["1 Week", "1 Month", "1 Year"].map((period) => (
              <button
                key={period}
                onClick={() =>
                  setTimeframe(period as "1 Week" | "1 Month" | "1 Year")
                }
                className={`px-2 py-0.5 text-xs rounded-md transition-colors ${
                  timeframe === period
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5  ">
        {/* Chart Section */}
        <div className="col-span-3">
          <SalesChart />
        </div>

        {/* Metrics Section */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          {METRICS.map((metric, index) => (
            <MetricCard key={index} metric={metric} />
          ))}
        </div>
      </div>
    </div>
  );
};
