import * as yup from "yup";

export const ValidaPaciente = yup.object().shape({
    
  cui: yup.number().positive('Solo numeros positivos').typeError('Solo acepta números').min(13, 'Faltan digitos en el CUI').max(13).required("Ingrese una cui"),
  name: yup.string().matches(/^(?!.* {2}).$/, 'No se permiten espacios dobles').matches(/^[a-zA-Z]$/, 'No se permiten símbolos y números en el nombre').required("Ingrese una Nombre de Paciente"),
  age: yup.number().positive('Solo numeros positivos').max(125, 'Pasa el maximo de edad').typeError('Solo acepta números').required("Ingrese Edad"),
  direccion: yup.string().matches(/^(?!.* {2}).*$/, 'No se permiten espacios dobles').required("Ingrese dirección"),

});