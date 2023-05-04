"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Title, Subtitle, Divider } from "@tremor/react";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br p-10 from-[#A653AA] to-[#4112EB] flex flex-col justify-center items-center">
      <Card className="max-w-3xl mx-auto">
        <Title className="text-6xl text-center font-bold mb-10">
          How&apos;s the weather?
        </Title>
        <Subtitle className="text-2xl text-center mb-5">
          Find out the weather forecast of your desired city!
        </Subtitle>
        <Subtitle className="text-xl text-center">
          Powered By NextJS, GPT and more!
        </Subtitle>

        <Divider className="my-4" />
        <Card className=" bg-gradient-to-tr from-[#2617C9] to-[#2C1AEC]">
          <CityPicker />
        </Card>
      </Card>
    </main>
  );
}
