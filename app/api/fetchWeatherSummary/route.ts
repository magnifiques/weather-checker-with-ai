import { NextResponse } from "next/server";
import openAI from "@/openai";

export async function POST(request: Request) {
  try {
    const { weatherData } = await request.json();

    const response = await openAI.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0.8,
      n: 1,
      stream: false,
      messages: [
        {
          role: "system",
          content: `Pretend that you're a weather news presenter presenting LIVE on television. be energetic and full of charisma. State the city you are provide the summery for. Then give a summery of today's weather only. Make it easy for the viewer to understand and know what to do to prepare for those weather conditions such as wear SPF if UV index is high than 5. use the uv_index data provided to provide UV Advice. Assume the data comes from your team at the news office and not the user.`,
        },
        {
          role: "user",
          content: `Hi there, can I get a summery of today's weather, use the following information to get the weather data: ${JSON.stringify(
            weatherData
          )} `,
        },
      ],
    });

    const { data } = response;

    return NextResponse.json({
      content: data.choices[0].message?.content,
    });
  } catch (error: any) {
    console.log(error.message);
    return;
  }
}
