import axios from "axios";
import config from "../config/config";
import { postCookie, getCookie } from "../config/cookies";

const login = axios.create({
  baseURL: `${config.urlAPI}`,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": getCookie(),
  },
});

export const signIn = async (credentials) => {
  const res = await login
    .post("/signin", credentials)
    .then((data) => {
      if (data.status === 200) postCookie(data.data.token);

      return data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};

