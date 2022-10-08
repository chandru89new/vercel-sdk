// import { RequestInfo } from "node-fetch";
// import { Primitives } from "../types/fetch";

export const constructQueryString = (
  url: string,
  query?: { [key: string]: string | number | boolean | undefined }
): string => {
  if (!query) {
    return url;
  }
  const kvPairs = Object.entries(query);
  const params = kvPairs
    .map(
      (value) => `${value[0]}=${value[1] ? encodeURIComponent(value[1]) : ""}`
    )
    .join("&");
  return `${url}?${params}`;
};
