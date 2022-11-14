export const getData = async () => {
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    const res = await fetch("data.txt").then((response) => response.json());
    return res.message;
  }
  const res = await fetch(
    `${import.meta.env.PUBLIC_API_URL}${import.meta.env.PUBLIC_END_POINT}`
  ).then((response) => response.json());
  return res.message;
};
