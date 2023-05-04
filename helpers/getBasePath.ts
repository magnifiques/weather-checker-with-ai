const getBasePath = () => {
  let BASE_URL = `${process.env.NEXT_PUBLIC_PUBLIC_URL}`;
  // process.env.NODE_ENV === "development"
  //   ? "http://localhost:3000"
  //   : `https://howstheweattherupthere.vercel.app`;

  return BASE_URL;
};

export default getBasePath;
