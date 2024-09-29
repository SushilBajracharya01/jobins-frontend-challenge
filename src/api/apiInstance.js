import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

export const callAPI = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

callAPI.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
