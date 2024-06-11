import getErrorMessage from "@/lib/errors/getErrorMessage";
import connectMongoDB from "@/lib/mongodb";
import { Coconut } from "@/models/coconuts/Coconut";
import { NextResponse } from "next/server";

export async function POST(req: Request){
  const coconut = await req.json();
  try {
    await connectMongoDB();
    const newCoconut = await Coconut.create({
      ...coconut
    });

    return NextResponse.json({
      success: true,
      coconut: newCoconut
    })
  } catch(error) {
    const message = getErrorMessage(error);
    return NextResponse.json({
      message,
      success: false
    })
  }
};
