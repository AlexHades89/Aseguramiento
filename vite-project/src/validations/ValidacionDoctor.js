import * as yup from "yup";

export const ValidaDoctor = yup.object().shape({
    
  cuidoctor: yup.number().positive('Solo numeros positivos').typeError('Solo acepta números').min(13, 'Faltan digitos en el CUI').max(13).required("Ingrese una cui"),
  namedoctor: yup.string().matches(/^[a-zA-Z]$/, 'No se permiten símbolos y números en el nombre').matches(/^(?!. {2}).*$/, 'No se permiten espacios dobles').required("Ingrese una Nombre de Doctor"),
  clinica: yup.number().positive('Solo numeros positivos').typeError('Solo acepta números').required("Ingrese Número de clinica"),
  colegiado: yup.number().positive('Solo numeros positivos').typeError('Solo acepta números').min(9).max(9).required("Ingrese Número colegiado"),

});