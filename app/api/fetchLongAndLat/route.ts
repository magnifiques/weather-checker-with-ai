import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { query } = await request.json();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_LATLONG_API_URL}?q=${query}&appid=${process.env.NEXT_PUBLIC_LATLONG_API_KEY}`
    );

    const data = await response.json();

    if (data.length === 0)
      return NextResponse.json({
        contents: [],
      });

    const contents = {
      city: data[0].name,
      lat: data[0].lat,
      long: data[0].lon,
    };

    return NextResponse.json({
      contents,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    });
  }
  // http://api.openweathermap.org/geo/1.0/direct?q=asasffff&appid=67202518d2f878ce64d75c101cb8d578
}
