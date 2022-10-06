import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

import { post } from "../../services/api/request";
import { toast } from "react-toastify";

import Button from "../Button/style";
import Input from "../Input/style";
import { StyledTitle } from "../../styles/typography";
import Logo from "../../assets/img/Logo.svg";
import * as S from "./style";
import Select from "../Select/style";

const SingUp = () => {
  const navigate = useNavigate();

  const singUpschema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email(),
    password: yup
      .string()
      .required(
        "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo!"
      )
      .matches(/(\d{0,8})/, "Deve conter no mínimo 8 caracteres!")
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(singUpschema),
  });

  const onSubmit = async (body) => {
    const data = await post(body, "/users");

    if (data.status === "error") {
      toast.error("Esse email ja esta sendo usado!");
    } else {
      toast.success("cadastro concluido faça login!");
      navigate("/");
    }
  };

  return (
    <>
      <S.SingUpForm onSubmit={handleSubmit(onSubmit)}>
        <img src={Logo} alt="" />
        <Link to="/">
          <Button butttonType="medium">Sair</Button>
        </Link>
        <StyledTitle tag="h3" titleType="title3">
          Crie sua conta
          <StyledTitle tag="span" titleType="headline" color="#868E96">
            Rapido e grátis, vamos nessa
          </StyledTitle>
        </StyledTitle>
        <label>
          Nome:
          <Input
            type="text"
            placeholder="Digite aqui seu email"
            {...register("name")}
          />
          <StyledTitle tag="span" titleType="headline" color="#E83F5B">
            {errors.name?.message}
          </StyledTitle>
        </label>
        <label>
          Email:
          <Input
            type="email"
            placeholder="Digite aqui seu nome"
            {...register("email")}
          />
          <StyledTitle tag="span" titleType="headline" color="#E83F5B">
            {errors.email?.message}
          </StyledTitle>
        </label>
        <label>
          Senha:
          <Input
            type="password"
            placeholder="Digite aqui seu nome"
            {...register("password")}
          />
          <StyledTitle tag="span" titleType="headline" color="#E83F5B">
            {errors.password?.message}
          </StyledTitle>
        </label>
        <label>
          Confirmar Senha:
          <Input
            type="password"
            placeholder="Digite aqui seu nome"
            {...register("confirmPassword")}
          />
          <StyledTitle tag="span" titleType="headline" color="#E83F5B">
            {errors.confirmPassword?.message}
          </StyledTitle>
        </label>
        <label>
          Bio:
          <Input
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("bio")}
          />
          <StyledTitle tag="span" titleType="headline" color="#E83F5B">
            {errors.bio?.message}
          </StyledTitle>
        </label>
        <label>
          Contato:
          <Input
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("contact")}
          />
          <StyledTitle tag="span" titleType="headline" color="#E83F5B">
            {errors.contact?.message}
          </StyledTitle>
        </label>
        <label>
          Selecionar módulo:
          <Select {...register("course_module")}>
            <option value="" disabled>
              Selecione Um Modulo
            </option>
            <option value="M1 HTML e CSS basico">M3 HTML e CSS basico</option>
            <option value="M2 JavaScript e POO">M2 JavaScript e POO</option>
            <option value="M3 React">M3 React</option>
          </Select>
        </label>
        <Button butttonType="primary" type="submit">
          Registrar
        </Button>
      </S.SingUpForm>
    </>
  );
};

export default SingUp;
