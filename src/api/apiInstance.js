import axios from "axios";
import { authHeader } from "../helpers/auth-header";

export function callAPI(options = {}) {
  options = options ?? {};
  let baseURL = options.env
    ? process.env[options.env]
    : process.env.REACT_APP_BACKEND_API;

  const callAPI = axios.create({
    baseURL: baseURL,
    headers: {
      ...authHeader(options.multipart),
    },
  });

  callAPI.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    }
  );

  return callAPI;
}
