'use client'
import { createContext } from "react";
import useCookieCheck from "@/lib/hooks/useCookieCheck";

export const VerifiedDanContext = createContext({ verifiedDan: false });

export const VerifiedDanProvider = ({ children }: { children: React.ReactNode }) => {
  const [verifiedDan] = useCookieCheck({
    cookieName: process.env.NEXT_PUBLIC_VERIFIED_DAN_COOKIE_NAME,
    cookieValue: process.env.NEXT_PUBLIC_VERIFIED_DAN_COOKIE_VALUE 
  });

  return (
    <VerifiedDanContext.Provider value={{ verifiedDan }}>
      {children}
    </VerifiedDanContext.Provider>
  )
};
