import getErrorMessage from "@/lib/errors/getErrorMessage";
import { UserModel } from "@/lib/models/User";
import connectMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(req: Request) {
  const { email, username, password, image } = await req.json();
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);
  try {
    await connectMongoDB();
    const user = await UserModel.create({ 
      email,
      username,
      password: hashedPassword,
      image
    });
    return NextResponse.json({
      success: true,
      data: user
    });
  } catch (error) {
    const message = getErrorMessage(error);
    console.log("Error in create user: ", message)
    return NextResponse.json({ error: message, success: false });
  }
};
