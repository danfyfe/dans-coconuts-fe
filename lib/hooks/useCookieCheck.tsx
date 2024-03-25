import { useState, useEffect } from 'react';

export const checkCookie = ({ cookieName, cookieValue }: { cookieName: String | undefined; cookieValue: String | undefined | number }): boolean => {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (cookieName === name && decodeURIComponent(value) === cookieValue) {
      return true;
    }
  }
  return false;
};

export const getCookieNumberValue = ({ cookieName }: { cookieName: string }) : number | undefined => {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (cookieName === name) {
      return +value;
    }
  }
};

export const useCookieCheck = ({ cookieName, cookieValue }: { cookieName: String | undefined; cookieValue: String | undefined}) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const cookieCheck = checkCookie({ cookieName, cookieValue });
    setIsValid(cookieCheck);
  }, [cookieName, cookieValue]);



  return [isValid];
};
