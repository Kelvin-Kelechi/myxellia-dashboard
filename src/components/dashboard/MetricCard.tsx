import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "../ui";
import type { MetricData } from "../../types";

interface MetricCardProps {
  metric: MetricData;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  const isIncrease = metric.changeType === "increase";

  return (
    <Card className="p-3">
      <div className="flex flex-col space-y-2">
        <div className={`text-lg font-bold ${metric.color}`}>
          {metric.value}
        </div>
        <div className="text-xs text-gray-600">{metric.title}</div>
        <div className="flex items-center space-x-1">
          {isIncrease ? (
            <TrendingUp size={16} className="text-green-500" />
          ) : (
            <TrendingDown size={16} className="text-red-500" />
          )}
          <span
            className={`text-xs ${
              isIncrease ? "text-green-600" : "text-red-600"
            }`}
          >
            {Math.abs(metric.change)}%
          </span>
        </div>
      </div>
    </Card>
  );
};
