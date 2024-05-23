import getErrorMessage from "@/lib/errors/getErrorMessage";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const response = NextResponse.json({
      success: true
    });

    response.cookies.set("token", "", {
      httpOnly: true, expires: new Date(0)
    });

    return response;
  } catch (error) {
    const message = getErrorMessage(error);
    return NextResponse.json({
      success: false,
      message
    })
  }
};
