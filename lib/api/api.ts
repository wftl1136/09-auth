import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

if (!apiUrl) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined. Додайте цю змінну у .env.local");
}

const baseURL = apiUrl + "/api";

export const api = axios.create({
  baseURL,
  withCredentials: true,
});