import { useState, useEffect } from 'react';

const checkCookie = ({ cookieName, cookieValue }: { cookieName: String; cookieValue: String}): boolean => {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (cookieName === name && decodeURIComponent(value) === cookieValue) {
      return true;
    }
  }
  return false;
};

const useCookieCheck = ({ cookieName, cookieValue }: { cookieName: String; cookieValue: String}) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const cookieCheck = checkCookie({ cookieName, cookieValue });
    setIsValid(cookieCheck);
  }, [cookieName, cookieValue]);



  return [isValid];
};

export default useCookieCheck;
