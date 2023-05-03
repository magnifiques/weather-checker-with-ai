"use client";

import React from "react";
import { Callout } from "@tremor/react";
import { CheckIcon, ExclamationIcon } from "@heroicons/react/solid";

type Props = {
  message: string;
  warning?: boolean;
};

export default function CalloutCard({ message, warning }: Props) {
  return (
    <Callout
      className="mt-4"
      title={message}
      icon={warning ? ExclamationIcon : CheckIcon}
      color={warning ? "rose" : "teal"}
    />
  );
}
