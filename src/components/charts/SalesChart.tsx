import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { SALES_DATA } from "../../utils/constants";
 

export const SalesChart: React.FC = () => {
  const chartData = SALES_DATA.map((item) => ({
    month: item.month,
    inflow: item.type === "inflow" ? item.value / 1000000 : 0,
    commission: item.type === "commission" ? item.value / 1000000 : 0,
    mrr: item.type === "mrr" ? item.value / 1000000 : 0,
    gmv: item.type === "gmv" ? item.value / 1000000 : 0,
  }));

  return (
    <div className="h-64 w-full">
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
            domain={[0, 50]}
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
          <Bar dataKey="gmv" fill="#f59e0b" radius={[1, 1, 0, 0]} barSize={8} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
