import { jwtCheck } from "./token-handler";

/**
 * return authorization header with jwt token
 */
export function authHeader(multipart) {
  let Token = jwtCheck();

  let headers = {};
  if (multipart) {
    headers["Content-Type"] = "multipart/form-data";
  } else {
    headers["Content-Type"] = "application/json";
  }

  if (Token) {
    headers["Authorization"] = `Bearer ${Token}`;
  }

  return headers;
}
