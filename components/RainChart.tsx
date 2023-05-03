"use client";
import { AreaChart, Card, Title } from "@tremor/react";

type Props = {
  results: Root;
};

export default function RainChart({ results }: Props) {
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
    "Rain (%)": results.hourly.precipitation_probability[i],
  }));

  const dataFormatter = (number: Number) => `${number}%`;
  return (
    <Card>
      <Title>Probability of Rain</Title>
      <AreaChart
        className="h-72 mt-4"
        data={data}
        showLegend
        index="time"
        categories={["Rain (%)"]}
        colors={["blue"]}
        valueFormatter={dataFormatter}
        minValue={0}
        maxValue={100}
        yAxisWidth={40}
      />
    </Card>
  );
}
