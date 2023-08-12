import * as yup from "yup";

export const ValidaConsulta = yup.object().shape({
    
  cuipaciente: yup.string().typeError('Solo acepta números').required("Ingrese una cui"),
  namepaciente: yup.string().required("Ingrese una Nombre de paciente"),
  doctor: yup.string().required("Ingrese nombre del doctor"),
  clinica: yup.string().typeError('Solo acepta números').required("Ingrese Número de clinica"),

});