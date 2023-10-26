import * as yup from "yup";

export const ValidaPaciente = yup.object().shape({
  cui: yup
    .string()
    .matches(/^[0-9]{13}$/, "El CUI debe contener exactamente 13 números")
    .required("Ingrese un CUI"),
  name: yup
    .string()
    .matches(/^(?!.* {2})([a-zA-Z ]+)$/, "Ingrese un nombre válido")
    .required("Ingrese Nombre"),
  age: yup
    .number()
    .positive("Solo numeros positivos")
    .max(125, "Pasa el maximo de edad")
    .typeError("Solo acepta números")
    .required("Ingrese Edad"),
  direccion: yup
    .string()
    //.matches(/^(?!.* {2}).*$/, "No se permiten espacios dobles")
    .required("Ingrese dirección"),
});
