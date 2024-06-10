import getErrorMessage from "@/lib/errors/getErrorMessage";
import connectMongoDB from "@/lib/mongodb";
import { ICoconut } from "@/models/coconuts/Coconut";
import { NextResponse } from "next/server";

export async function getCoconuts(useId: string) {

};

export async function createCoconutDB(coconut: ICoconut){
  await connectMongoDB();
  try {
    const { message } = coconut;
    const payload = {
      ...coconut,
      ...{
        ...message,
        sender: message.sender._id,
        receiver: message.sender._id
      }
    }
  } catch(error) {
    const message = getErrorMessage(error);
    return NextResponse.json({
      success: false,
      message
    })
  }
};
