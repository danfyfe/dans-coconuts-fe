import { getDataFromToken } from "@/lib/auth";
import getErrorMessage from "@/lib/errors/getErrorMessage";
import { UserModel } from "@/lib/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const JWTtoken = request.cookies.get('token')?.value || '';
    const userId = await getDataFromToken(JWTtoken);

    const user = await UserModel.findOne({
      _id: userId
    }).select('-password');

    return NextResponse.json({
      data: user,
      success: true
    })
  } catch(error) {
    const message = getErrorMessage(error);
    return NextResponse.json({
      success: false,
      message
    })
  }
}