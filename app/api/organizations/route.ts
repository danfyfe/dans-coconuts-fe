import P from "@/components/core/typography/P";
import getErrorMessage from "@/lib/errors/getErrorMessage";
import Organization from "@/lib/models/Organization";
import dbConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {

};


export async function POST(req: Request) {
  await dbConnect();
  try {
    const { title, user } = await req.json();
    const { name, email } = user;
    const newOrganization = await Organization.create({ title, users:[{ name, email }]});
    return NextResponse.json({
      organization: newOrganization
    })
  } catch (error) {
    return NextResponse.json({
      error: getErrorMessage(error)
    })
  }
}