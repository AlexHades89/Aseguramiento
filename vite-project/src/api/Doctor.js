import axios from "axios";
import config from "../config/config";
import { getCookie } from "../config/cookies";

const DoctorApi = axios.create({
  baseURL: `${config.urlAPI}`,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": getCookie(),
  },
});

export const getDoctor = async () => {
  const res = await DoctorApi.get("/obtenerdoctor")
    .then((data) => {
      return data.data;
    })
    .catch((error) => error.response);

  return res;
};

export const postDoctor = async (credentials) => {
  const res = await DoctorApi.post("/doctoragregar", credentials)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};