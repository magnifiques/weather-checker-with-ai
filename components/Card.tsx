import React from "react";
import { Card, Color, Metric, Text } from "@tremor/react";

type Props = {
  title: string;
  metric: string;
  color?: Color;
};

export default function CardComponent({ title, metric, color }: Props) {
  return (
    <Card decoration="top" decorationColor={color}>
      <Text>{title}</Text>
      <Metric>{metric}</Metric>
    </Card>
  );
}
