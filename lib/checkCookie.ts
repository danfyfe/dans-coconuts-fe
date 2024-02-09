import { cookies } from 'next/headers';

const checkCookie = (cookieName='', cookieValue=''): boolean => {
  const cookieStore = cookies();
  return cookieStore.get(cookieName)?.value === cookieValue;
};

export default checkCookie;
