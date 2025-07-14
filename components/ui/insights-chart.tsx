"use client"

import * as React from "react"
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "Jan", revenue: 15000, campaigns: 8 },
  { month: "Feb", revenue: 18500, campaigns: 12 },
  { month: "Mar", revenue: 22000, campaigns: 15 },
  { month: "Apr", revenue: 19500, campaigns: 11 },
  { month: "May", revenue: 26000, campaigns: 18 },
  { month: "Jun", revenue: 31000, campaigns: 22 },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
  campaigns: {
    label: "Campaigns",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function InsightsChart() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ChartContainer config={chartConfig} className="h-[200px] w-[300px]">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
            top: 12,
            bottom: 12,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
          <XAxis hide />
          <YAxis hide />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="revenue"
            type="monotone"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth={2}
            dot={{
              fill: "rgba(255,255,255,0.9)",
              strokeWidth: 2,
              r: 4,
            }}
            activeDot={{
              r: 6,
              fill: "white",
              stroke: "rgba(255,255,255,0.5)",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  )
}