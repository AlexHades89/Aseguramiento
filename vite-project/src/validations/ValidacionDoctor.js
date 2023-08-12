import * as yup from "yup";

export const ValidaDoctor = yup.object().shape({
    
  cuidoctor: yup.string().required("Ingrese una cui"),
  namedoctor: yup.string().required("Ingrese una Nombre"),
  clinica: yup.string().typeError('Solo acepta números').required("Ingrese número de clinica"),
  colegiado: yup.string().typeError('Solo acepta números').required("Ingrese Número de colegiado"),

});