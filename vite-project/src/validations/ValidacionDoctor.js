import * as yup from "yup";

export const ValidaDoctor = yup.object().shape({
  cuidoctor: yup
    .string()
    .matches(/^[0-9]{13}$/, "El CUI debe contener exactamente 13 números")
    .required("Ingrese un CUI"),
  namedoctor: yup
    .string()
    .matches(/^(?!.* {2})([a-zA-Z ]+)$/, "Ingrese un nombre válido")
    .required("Ingrese una Nombre de Doctor"),
  clinica: yup
    .number()
    .positive("Solo numeros positivos")
    .typeError("Solo acepta números")
    .required("Ingrese Número de clinica"),
  colegiado: yup
    .string()
    .required("Ingrese Número colegiado"),
});
