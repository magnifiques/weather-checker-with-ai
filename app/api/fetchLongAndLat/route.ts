import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request, res: any) {
  try {
    const { query } = await request.json();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_LATLONG_API_URL}?q=${query}&appid=${process.env.NEXT_PUBLIC_LATLONG_API_KEY}`
    );

    const data = await response.json();

    console.log(data);

    if (data.length === 0)
      return res.status(404).json({
        responseData: [],
      });

    const contents = {
      city: data[0].name,
      lat: data[0].lat,
      long: data[0].lon,
    };

    return res.status(200).json({
      responseData: [contents],
    });
  } catch (error: any) {
    return res.status(500).json({
      error: error,
      status: 500,
    });
  }
}
