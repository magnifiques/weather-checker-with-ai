"use client";
import { AreaChart, Card, Title } from "@tremor/react";
type Props = {
  results: Root;
};

const TempChart = ({ results }: Props) => {
  const hourly = results?.hourly.time
    .map((time) =>
      new Date(time).toLocaleString("en-US", {
        hour12: false,
        hour: "numeric",
      })
    )
    .slice(0, 24);

  const data = hourly.map((hour, i) => ({
    time: Number(hour),
    "UV-Index": results.hourly.uv_index[i],
    "Temperature (°C)": results.hourly.temperature_2m[i],
  }));

  const dataFormatter = (number: Number) => `${number} °C`;
  return (
    <Card>
      <Title>Temperature & UV-Index</Title>
      <AreaChart
        className="mt-4"
        data={data}
        index="time"
        categories={["Temperature (°C)", "UV-Index"]}
        colors={["yellow", "rose"]}
        valueFormatter={dataFormatter}
        minValue={0}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default TempChart;
