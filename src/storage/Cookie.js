import { Cookies } from "react-cookie";


const cookies = new Cookies();

export const setAccessToken = (accessToken) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);

  return cookies.set("user_token", accessToken, {
    sameSite: "strict",
    path: "/",
    expires: new Date(expireDate),
  });
};

export const getCookieToken = () => {
  return cookies.get("user_token");
};

export const removeCookieToken = () => {
  return cookies.remove("user_token", { sameSite: "strict", path: "/" });
};
