import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import type { MetricData } from "../../types";

interface MetricCardProps {
  metric: MetricData;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  const isIncrease = metric.changeType === "increase";

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 flex flex-col gap-1 min-w-[140px] h-[73%] shadow-sm">
      <div className={`text-base font-bold ${metric.color}`}>
        {metric.value}
      </div>
      <div className="flex items-center   w-full mt-0.5">
        <span className="text-[11px] text-gray-600 font-medium">
          {metric.title}
        </span>
        <span className="flex items-center gap-1">
          {isIncrease ? (
            <TrendingUp size={13} className="text-green-500" />
          ) : (
            <TrendingDown size={13} className="text-red-500" />
          )}
          <span
            className={`text-[11px] font-semibold ${
              isIncrease ? "text-green-600" : "text-red-600"
            }`}
          >
            {Math.abs(metric.change)}%
          </span>
        </span>
      </div>
    </div>
  );
};
