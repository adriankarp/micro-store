import Cookies from "js-cookie";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

const defaultOptions: Cookies.CookieAttributes = {
  expires: 7,
  path: "/",
  secure: true,
  sameSite: "lax",
};

export function setAccessToken(token: string) {
  Cookies.set(ACCESS_TOKEN_KEY, token, defaultOptions);
}

export function getAccessToken(): string | undefined {
  return Cookies.get(ACCESS_TOKEN_KEY);
}

export function removeAccessToken() {
  Cookies.remove(ACCESS_TOKEN_KEY, defaultOptions);
}

export function setRefreshToken(token: string) {
  Cookies.set(REFRESH_TOKEN_KEY, token, defaultOptions);
}

export function getRefreshToken(): string | undefined {
  return Cookies.get(REFRESH_TOKEN_KEY);
}

export function removeRefreshToken() {
  Cookies.remove(REFRESH_TOKEN_KEY, defaultOptions);
}

export function setTokens(tokens: {
  access_token: string;
  refresh_token: string;
}) {
  setAccessToken(tokens.access_token);
  setRefreshToken(tokens.refresh_token);
}

export function clearTokens() {
  removeAccessToken();
  removeRefreshToken();
}
