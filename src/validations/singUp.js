import * as yup from "yup"

export const singUpschema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email(),
    password: yup
      .string()
      .required(
        "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo!"
      )
      .min(8, "Deve ter no mínimo 8 caracteres")
      .matches(/(?=.*\d)/, "Deve conter um número!")
      .matches(
        /(?=.*[$*&@#])/,
        "Deve conter ao menos um caractere especial! Ex: $*&@#"
      ),
    confirmPassword: yup
      .string()
      .required("Comfirme a senha")
      .oneOf([yup.ref("password")], "As Senhas não coincidem"),
    bio: yup
      .string()
      .required("Bio obrigatória")
      .max(30, "Máximo 30 caracteres"),
    contact: yup.string().required("Contato Obrigatório"),
    course_module: yup.string().required("Módulo Obrigatório1"),
  });
