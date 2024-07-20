import { energyUsage } from "@/utils";
import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Tally1 } from "lucide-react";
import "./chart.scss";
import { useSearchParams } from "react-router-dom";

export default function UsageChart() {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const _filter = searchParams.get("filter") || "hourly";
  // const [filter, setFilter] = useState("hourly");

  useEffect(() => {
    const filter = energyUsage.filter(
      (item) => item.period.toLowerCase() === _filter.toLowerCase()
    );
    // setFilter(_filter);
    const mappedFilter = filter.map((item) => item.usage)[0];

    setData(mappedFilter);
    // setData(usageData);
  }, [_filter]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const interval = windowWidth < 600 ? 1 : 0;

  return (
    <div className="chart">
      <ResponsiveContainer
        width={"100%"}
        height={"100%"}
        minHeight={380}
        maxHeight={windowWidth < 768 ? 500 : 620}
      >
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ right: 24, left: 30, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="3%"
                stopColor="var(--text-color)"
                stopOpacity={0.16}
              />
              <stop
                offset="95%"
                stopColor="var(--text-color)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="key"
            tick={(props) => (
              <CustomizedAxisTick {...props} split={_filter === "monthly"} />
            )}
            tickLine={false}
            axisLine={false}
            interval={interval}
            // begin={1}
          />
          {/* <YAxis /> */}
          <CartesianGrid
            strokeDasharray="4"
            vertical={false}
            stroke="var(--text-color)"
            strokeOpacity={0.1}
          />
          <Tooltip
            cursor={{
              stroke: "var(--text-color)",
              strokeWidth: 0.5,
              opacity: 0.25,
            }}
            contentStyle={{
              backgroundColor: "var(--bg-color)",
              border: "none",
              color: "var(--text-color)",
              fontSize: 12,
            }}
            content={customTooltip}
          />
          <Area
            type="natural"
            dataKey="value"
            stroke="var(--text-color)"
            strokeLinecap="round"
            strokeOpacity={0.7}
            strokeWidth={2}
            fillOpacity={0.8}
            fill="url(#colorPv)"
            activeDot={{ r: 4, fill: "var(--text-color)", stroke: "none" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

const CustomizedAxisTick = (props) => {
  const { x, y, payload, split } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        fill="var(--text-color)"
        opacity={0.6}
        fontSize={12}
        textAnchor="middle"
      >
        {split ? payload.value.substring(0, 3) : payload.value}
      </text>
    </g>
  );
};

const customTooltip = (props) => {
  const { active, payload, label } = props;
  if (active) {
    return (
      <div className="custom-tooltip">
        <Tally1 size={70} strokeWidth={1.2} fill="var(--text-color)" />
        <div>
          <span>{label}</span>
          <span className="label">Usage</span>
          <span className="label">{payload[0].value}kWh</span>
        </div>
      </div>
    );
  }
  return null;
};
