'use client'
import { useGetCookie } from "@/lib/hooks/useGetCookie";
import { IUser } from "@/models/User";
import { getRandomNumberInRange } from "@/lib/randoms";
import setCookie from "@/lib/setCookie";
import { createContext, useState, useEffect, useCallback, Dispatch, SetStateAction } from "react";

export type IUserContext = {
  user: IUser | undefined;
  setUser: Dispatch<SetStateAction<IUser | undefined>>
}

export const UserContext = createContext<IUserContext>({
  user: undefined,
  setUser: () => {}
});



export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | undefined>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
};
