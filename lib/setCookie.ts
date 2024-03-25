const setCookie = (cookieName: string | number | boolean, cookieValue: string | number | boolean): void => {
  const cookieString: string = `${encodeURIComponent(cookieName)}=${encodeURIComponent(cookieValue)}`;
  global.document.cookie = cookieString;
};

export default setCookie;
