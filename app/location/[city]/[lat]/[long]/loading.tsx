import React from "react";
import { SunIcon } from "@heroicons/react/solid";

export default function loading() {
  return (
    <div className="bg-gradient-to-br from-[#F8783D] to-[#9245F2]  min-h-screen flex flex-col items-center justify-center text-white">
      <SunIcon
        className="h-24 w-24 animate-bounce text-yellow-500s"
        color="yellow"
      />
      <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
        Loading the weather Information
      </h1>

      <h2 className="text-xl font-bold text-center mb-10 animate-pulse">
        Hold On, we are crunching the numbers and generating an AI summery of
        the Weather
      </h2>
    </div>
  );
}
