import { getDataFromToken } from "@/lib/auth";
import { cookies } from "next/headers";

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
