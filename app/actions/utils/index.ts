'use server'

import { cookies } from "next/headers"

export async function getCookie(cookieName: string) {
  return cookies().get(cookieName);
};
