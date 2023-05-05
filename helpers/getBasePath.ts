const getBasePath = () => {
  let BASE_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `${process.env.NEXT_PUBLIC_PUBLIC_URL}`;

  return BASE_URL;
};

export default getBasePath;
