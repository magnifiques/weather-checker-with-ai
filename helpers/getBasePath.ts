const getBasePath = () => {
  let BASE_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  return BASE_URL;
};

export default getBasePath;
