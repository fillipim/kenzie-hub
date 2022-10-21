import * as yup from "yup"

export const singInSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório!").email("Email invalido"),
    password: yup.string().required("Campo obrigatório!"),
  });