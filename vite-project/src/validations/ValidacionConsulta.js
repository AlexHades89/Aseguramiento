import * as yup from "yup";

export const ValidaConsulta = yup.object().shape({
    
  cuiPaciente: yup.number().positive('Solo numeros positivos').typeError('Solo acepta números').min(13, 'Faltan digitos en el CUI').max(13).required("Ingrese una cui"),
  namePaciente: yup.string().matches(/^[a-zA-Z]$/, 'No se permiten símbolos y números en el nombre').matches(/^(?!. {2}).*$/, 'No se permiten espacios dobles').required("Ingrese una Nombre de paciente"),
  Doctor: yup.string().matches(/^[a-zA-Z]$/, 'No se permiten símbolos y números en el nombre').matches(/^(?!. {2}).*$/, 'No se permiten espacios dobles').required("Ingrese nombre del doctor"),
  clinica: yup.number().positive('Solo numeros positivos').typeError('Solo acepta números').required("Ingrese Número de clinica").min(1).max(2),

});