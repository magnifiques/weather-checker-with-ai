"use client";
import { AreaChart, Card, Title } from "@tremor/react";
type Props = {
  results: Root;
};

export default function HumidityChart({ results }: Props) {
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
    "Humidity (%)": results.hourly.relativehumidity_2m[i],
  }));

  const dataFormatter = (number: Number) => `${number}%`;
  return (
    <Card>
      <Title>Humidity Level</Title>
      <AreaChart
        className="mt-4"
        data={data}
        showLegend
        index="time"
        categories={["Humidity (%)"]}
        colors={["teal"]}
        valueFormatter={dataFormatter}
        minValue={0}
        maxValue={100}
        yAxisWidth={40}
      />
    </Card>
  );
}
