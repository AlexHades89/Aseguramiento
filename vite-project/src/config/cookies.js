import cookie from "js-cookie";

export const postCookie = (data) => {
  cookie.set("tokenResAPI", data, {
    expires: 2,
    secure: true,
    sameSite: "strict",
  });
};

export const getCookie = () => {
  return cookie.get("tokenResAPI");
};

export const deleteCookie = () => {
  cookie.set("tokenResAPI", null, {
    expires: 0,
    secure: true,
    sameSite: "strict",
  });
};