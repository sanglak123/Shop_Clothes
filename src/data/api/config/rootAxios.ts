import axios from "axios";

export const baseURL = process.env.NEXT_PUBLIC_DOMAIN;
export const rootAxios = axios.create({
  baseURL: baseURL + "/api",
});
