const standardFetch = ({ url, options } : {
  url: string;
  options: {
    method: string;
    body: string;
  }
}) => {
  return fetch(url, options)
};

export default standardFetch;
