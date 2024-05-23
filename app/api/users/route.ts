import getErrorMessage from "@/lib/errors/getErrorMessage";
import { UserModel } from "@/lib/models/User";
import connectMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function GET(req: Request) {
  const { email, username, password, image } = await req.json();
  try {
    await connectMongoDB();
    const user = await UserModel.find({ 
      email,
      password,
    });
    return NextResponse.json({ status: 200, data: user });
  } catch (error) {
    const message = getErrorMessage(error);
    console.log("Error in create user: ", message)
    return NextResponse.json({ error: message });
  }
};

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
    return NextResponse.json({ status: 200, data: user });
  } catch (error) {
    const message = getErrorMessage(error);
    console.log("Error in create user: ", message)
    return NextResponse.json({ error: message });
  }
};

