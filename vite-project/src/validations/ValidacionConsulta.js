import * as yup from "yup";

export const ValidaConsulta = yup.object().shape({
  cuiPaciente: yup
    .string()
    .matches(/^[0-9]{13}$/, "El CUI debe contener exactamente 13 números")
    .required("Ingrese un CUI"),
  namePaciente: yup
    .string()
    .matches(/^(?!.* {2})([a-zA-Z]+)$/, "Ingrese un nombre válido")
    .required("Ingrese una Nombre de paciente"),
  Doctor: yup
    .string()
    .matches(/^(?!.* {2})([a-zA-Z]+)$/, "Ingrese un nombre válido")
    .required("Ingrese nombre del doctor"),
  clinica: yup
    .number()
    .positive("Solo numeros positivos")
    .typeError("Solo acepta números")
    .required("Ingrese Número de clinica")
    .min(1)
    .max(2),
});
