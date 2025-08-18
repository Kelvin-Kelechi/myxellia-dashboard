import React, { useState } from "react";
import { MetricCard } from "./MetricCard";
import { METRICS } from "../../utils/constants";
import { SalesChart } from "../charts/SalesChart";

import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export const SalesOverview: React.FC = () => {
  const [timeframe, setTimeframe] = useState<"1 Week" | "1 Month" | "1 Year">(
    "1 Year"
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      {/* Header Row */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            Sales Overview
          </h2>
          <p className="text-sm text-gray-500">
            Showing overview Jan 2022 - Sep 2022
          </p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <button className="px-6 py-3 text-[12px] font-medium border border-gray-300 rounded-full bg-white hover:bg-gray-50 transition shadow-none">
            View Transactions
          </button>
          <div className="flex   rounded-full p-1 mt-2">
            {["1 Week", "1 Month", "1 Year"].map((period) => (
              <button
                key={period}
                onClick={() =>
                  setTimeframe(period as "1 Week" | "1 Month" | "1 Year")
                }
                className={`px-4 py-1.5 text-sm rounded-md font-medium transition-colors focus:outline-none ${
                  timeframe === period
                    ? "bg-[#F5F5F5] text-gray-900  "
                    : "text-gray-600 hover:text-gray-900"
                }`}
                style={{ minWidth: 80 }}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Horizontal Divider */}
      <div className="h-px bg-gray-200 my-4 w-full" />
      {/* Main Content Row */}
      <div className="flex gap-6">
        {/* Chart Section with Arrows */}
        <div className="flex-1 flex items-center bg-[#FAFAFA] rounded-xl p-4 relative min-w-[0]">
          <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-1 shadow hover:bg-gray-50 transition">
            <IoMdArrowDropleft size={20} />
          </button>
          <div className="flex-1 flex justify-center">
            <SalesChart />
          </div>
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-1 shadow hover:bg-gray-50 transition">
            <IoMdArrowDropright size={20} />
          </button>
        </div>
        {/* Metrics Section */}
        <div className="grid grid-cols-2 gap-4 w-[370px]">
          {METRICS.map((metric, index) => (
            <MetricCard key={index} metric={metric} />
          ))}
        </div>
      </div>
    </div>
  );
};
