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

export const setNickname = (nickname) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);

  return cookies.set("nickname", nickname, {
    sameSite: "strict",
    path: "/",
    expires: new Date(expireDate),
  });
};

export const getNickname = () => {
  return cookies.get("nickname");
};

export const removeNickname = () => {
  return cookies.remove("nickname", { sameSite: "strict", path: "/" });
};

export const setLocation = (location) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);

  return cookies.set("location", location, {
    sameSite: "strict",
    path: "/",
    expires: new Date(expireDate),
  });
};

export const getLocation = () => {
  return cookies.get("location");
};

export const removeLocation = () => {
  return cookies.remove("location", { sameSite: "strict", path: "/" });
};
