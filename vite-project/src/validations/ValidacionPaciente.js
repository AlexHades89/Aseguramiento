import * as yup from "yup";

export const ValidaPaciente = yup.object().shape({
    
  cui: yup.string().required("Ingrese una cui"),
  name: yup.string().required("Ingrese una Nombre"),
  age: yup.string().typeError('Solo acepta números').required("Ingrese edad"),
  direccion: yup.string().required("Ingrese la dirección"),

});