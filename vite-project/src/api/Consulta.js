import axios from "axios";
import config from "../config/config";
import { getCookie } from "../config/cookies";

const ConsultaApi = axios.create({
  baseURL: `${config.urlAPI}`,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": getCookie(),
  },
});

export const getConsulta = async () => {
  const res = await ConsultaApi.get("/obtenerconsulta")
    .then((data) => {
      return data.data;
    })
    .catch((error) => error.response);

  return res;
};


export const postConsulta = async (credentials) => {
  const res = await AutoApi.post("/agregarconsulta", credentials)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};