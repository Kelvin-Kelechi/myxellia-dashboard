import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { NEW_SALES_DATA } from "../../utils/constants";

interface ChartData {
  month: string;
  inflow: number;
  commission: number;
  mrr: number;
}

export const NewSalesChart: React.FC = () => {
  const chartData: ChartData[] = NEW_SALES_DATA.reduce<ChartData[]>(
    (acc, item) => {
      let existing = acc.find((d) => d.month === item.month);

      if (!existing) {
        existing = { month: item.month, inflow: 0, commission: 0, mrr: 0 };
        acc.push(existing);
      }

      if (
        item.type === "inflow" ||
        item.type === "commission" ||
        item.type === "mrr"
      ) {
        existing[item.type] = item.value / 1000000;
      }

      return acc;
    },
    []
  );

  return (
    <div className="h-50 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 20, left: 40, bottom: 20 }}
          barCategoryGap="20%"
        >
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 11 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 11 }}
            tickFormatter={(value) => `${value}m`}
          />
          <Bar
            dataKey="inflow"
            fill="#3b82f6"
            radius={[1, 1, 0, 0]}
            barSize={8}
          />
          <Bar
            dataKey="commission"
            fill="#10b981"
            radius={[1, 1, 0, 0]}
            barSize={8}
          />
          <Bar dataKey="mrr" fill="#06b6d4" radius={[1, 1, 0, 0]} barSize={8} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
