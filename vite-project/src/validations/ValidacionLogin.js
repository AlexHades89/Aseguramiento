import * as yup from "yup";

export const ValidacionLogin = yup.object().shape({
  user: yup.string().required("Ingrese un nombre de usuario"),
  password: yup.string().required("Ingrese un password de usuario"),
});