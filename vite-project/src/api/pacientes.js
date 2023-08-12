import axios from "axios";
import config from "../config/config";
import { getCookie } from "../config/cookies";

const PacienteApi = axios.create({
  baseURL: `${config.urlAPI}`,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": getCookie(),
  },
});

export const getPaciente = async () => {
  const res = await PacienteApi.get("/obtenerpacientes")
    .then((data) => {
      return data.data;
    })
    .catch((error) => error.response);
  return res;
};


export const postPaciente = async (credentials) => {
  const res = await PacienteApi.post("/agregarpacientes", credentials)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};