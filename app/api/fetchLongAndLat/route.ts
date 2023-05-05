import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_LATLONG_API_URL}?q=${query}&appid=${process.env.NEXT_PUBLIC_LATLONG_API_KEY}`
    );

    const data = await response.json();

    console.log(data);

    if (data.length === 0)
      return NextResponse.json({
        responseData: [],
      });

    const contents = {
      city: data[0].name,
      lat: data[0].lat,
      long: data[0].lon,
    };

    return NextResponse.json({
      responseData: [contents],
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error,
      status: 500,
    });
  }
}
