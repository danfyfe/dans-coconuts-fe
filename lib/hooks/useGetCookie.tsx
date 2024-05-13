import { useState, useEffect } from 'react';

export const getCookie = (cookieName: string): string | undefined => {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (cookieName === name) {
      return value;
    }
  }
};

export const useGetCookie = (cookieName: string ) => {
  const [cookieVal, setCookieVal] = useState<string | undefined>('');

  useEffect(() => {
    const cookie = getCookie(cookieName);
    setCookieVal(cookie);
  }, [cookieName]);

  return cookieVal;
};
