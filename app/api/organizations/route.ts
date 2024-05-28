import P from "@/components/core/typography/P";
import getErrorMessage from "@/lib/errors/getErrorMessage";
import { Organization } from "@/lib/models/Organization";
import connectMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {

};


export async function POST(req: Request) {
  await connectMongoDB();
  try {
    const { title, user } = await req.json();
    const newOrganization = await Organization.create({ title, users:[ user ]});
    return NextResponse.json({
      success: true,
      organization: newOrganization
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: getErrorMessage(error)
    })
  }
};
