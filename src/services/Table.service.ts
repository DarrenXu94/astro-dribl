import fs from "fs";

export const getData = async () => {
  if (process.env.NODE_ENV === "development") {
    const res = fs.readFileSync("./public/data.txt", "utf-8");
    const parsed = JSON.parse(res);
    return parsed.message;
  }
  const processData =
    "[" + process.env.JSON_RESPONSE.split("[").slice(1).join("[");

  const data = JSON.parse(processData) as any;
  return data;
};
