import getErrorMessage from "@/lib/errors/getErrorMessage";
import { UserModel } from "@/models/User";
import connectMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  try {
    await connectMongoDB();
    const user = await UserModel.findOne({ 
      email
    });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: 'User not found.'
      })
    }

    // check password
    const passwordValid = await bcryptjs.compare(
      password,
      user.password
    );

    if (!passwordValid) {
      return NextResponse.json({
        success: false,
        message: 'Incorrect password.'
      })
    }

    // create JWT
    const tokenData = {
      id: user._id,
      email: user.email,
      username: user.username
    }

    if (!process.env.JWT_SECRET) {
      throw new Error('Must include a JWT SECRET in env!');
    };

    const JWTtoken = jwt.sign(tokenData, process.env.JWT_SECRET);

    const response = NextResponse.json({
      success: true
    });

    response.cookies.set("token", JWTtoken, {
      httpOnly: true
    });

    return response;
  } catch (error) {
    const message = getErrorMessage(error);
    console.log("Error in get user: ", message)
    return NextResponse.json({ message, success: false });
  }
};