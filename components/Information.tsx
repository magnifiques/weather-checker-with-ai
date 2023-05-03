import React from "react";
import CityPicker from "./CityPicker";
import Image from "next/image";
import weatherCodeToString from "@/helpers/weatherCodeToString";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

type Props = {
  city: string;
  results: Root;
};

export default function Information({ city, results }: Props) {
  return (
    <div className="bg-gradient-to-br from-[#F8783D] to-[#9245F2] text-white p-10">
      <h1 className="text-6xl pb-5 font-bold">{decodeURI(city)}</h1>

      <CityPicker />

      <hr className="my-8" />

      <div className="mt-8 flex items-center justify-between space-x-10 mb-5">
        <p className="text-xl">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <p className="text-xl uppercase font-extrabold">
          {new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>

      <hr className="my-8" />

      <div className="flex justify-start items-center space-x-5">
        <Image
          src={`https://www.weatherbit.io/static/img/icons/${
            weatherCodeToString[results.current_weather.weathercode].icon
          }.png`}
          alt={weatherCodeToString[results.current_weather.weathercode].label}
          width={75}
          height={75}
        />

        <div className="flex items-center justify-between space-x-10">
          <p className="text-6xl font-semibold">
            {results.current_weather.temperature.toFixed(1)}°C
          </p>
          <p className="text-right font-extralight text-lg">
            {weatherCodeToString[results.current_weather.weathercode].label}
          </p>
        </div>
      </div>

      <div className="space-y-2 py-5">
        <div className="flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]">
          <SunIcon className="h-10 w-10 text-gray-400" />
          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight">Sunrise</p>
            <p>
              {new Date(results.daily.sunrise[0]).toLocaleTimeString("en-us", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]">
          <MoonIcon className="h-10 w-10 text-gray-400" />
          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight">Sunset</p>
            <p>
              {new Date(results.daily.sunset[0]).toLocaleTimeString("en-us", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
