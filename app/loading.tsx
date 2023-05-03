import React from "react";
import { SunIcon } from "@heroicons/react/solid";

function loading() {
  return (
    <div className="bg-gradient-to-br p-10 from-[#A653AA] to-[#4112EB] min-h-screen flex flex-col items-center justify-center text-white">
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

export default loading;
