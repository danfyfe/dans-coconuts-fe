const setCookie = (cookieName: string | number | boolean, cookieValue: string | number | boolean): void => {
  const cookieString: string = `${encodeURIComponent(cookieName)}=${encodeURIComponent(cookieValue)}`;
  document.cookie = cookieString;
};

export default setCookie;
