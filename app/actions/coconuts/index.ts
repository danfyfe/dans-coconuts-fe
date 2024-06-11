import getErrorMessage from "@/lib/errors/getErrorMessage";
import connectMongoDB from "@/lib/mongodb";
import { ICoconut } from "@/models/coconuts/Coconut";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function getCoconuts(username: string) {
  try {
    const db = await connectMongoDB();
    const coconutsCollection = db?.connection.collection('Coconuts').find({
      $or: [
        {'message.sender.username': username},
        {'message.receiver.username': username}
      ]
    },);
    
    const coconuts = await coconutsCollection?.toArray();
    // console.log('in get coconuts,', coconuts)
    revalidatePath('/coconuts');
    return NextResponse.json({
      success: true,
      coconuts,
    })
  } catch(error) {
    const message = getErrorMessage(error);
    return NextResponse.json({
      success: false,
      message
    })
  }
};
