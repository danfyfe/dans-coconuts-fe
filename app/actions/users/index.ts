import { GetUserByUsernameQuery } from "@/graphql/users/queries";
import { getDataFromToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function getUserData() {
  const JWTtoken = cookies().get('token')?.value;
  if (JWTtoken) {
    const userData = getDataFromToken(JWTtoken);
    return userData;
  }
  return {
    success: false,
    message: 'No JWT Token found.'
  };
};

export async function getUserByUsername(username: string) {
  if (!process.env.MONGODB_API_URL || !process.env.MONGODB_API_KEY) {
    throw new Error('Make sure to supply a mongodb api url and key!')
  }

  const response = await fetch(process.env.MONGODB_API_URL!, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.MONGODB_API_KEY!,
    },
    method: 'POST',
    body: JSON.stringify({
      // query: GetUserByUsernameQuery(username)
      "collection": "Users",
      "database": "dans-coconuts",
      "dataSource": "dans-coconuts",
      "projection": {
          "_id": 1
      }
    }),
    next: {
      revalidate: 30
    }
  });
  const jsonRespData = await response.json();
  const { status } = response;
  const { message } = jsonRespData;
  // console.log(jsonRespData)
  if (status === 200) {
    return NextResponse.json({ ...jsonRespData, status })
  }
  return NextResponse.json({ error: message, status })
}

