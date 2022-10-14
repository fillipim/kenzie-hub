import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { singUpschema } from "../../validations/singUp";

import Input from "../Input/input.style";
import { StyledTitle } from "../../styles/typography";
import Logo from "../../assets/img/Logo.svg";
import * as S from "./singUp.style";
import Select from "../Select/select.style";
import { ButtonStyle } from "../Button/button.style";
import { ErrorMessage } from "../ErrorMessage/errorMessage.style";

const SingUp = () => {
  const { submitRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(singUpschema),
  });

  return (
    <>
      <S.SingUpForm onSubmit={handleSubmit(submitRegister)}>
        <img src={Logo} alt="" />
        <Link to="/">
          <ButtonStyle tag="button" butttonType="medium">
            Sair
          </ButtonStyle>
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
          <ErrorMessage tag="span" titleType="headline" color="#E83F5B">
            {errors.name?.message}
          </ErrorMessage>
        </label>
        <label>
          Email
          <Input
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <ErrorMessage tag="span" titleType="headline" color="#E83F5B">
            {errors.email?.message}
          </ErrorMessage>
        </label>
        <label>
          Senha:
          <Input
            type="password"
            placeholder="Digite aqui seu senha"
            {...register("password")}
          />
          <ErrorMessage tag="span" titleType="headline" color="#E83F5B">
            {errors.password?.message}
          </ErrorMessage>
        </label>
        <label>
          Confirmar Senha:
          <Input
            type="password"
            placeholder="Digite aqui seu senha"
            {...register("confirmPassword")}
          />
          <ErrorMessage tag="span" titleType="headline" color="#E83F5B">
            {errors.confirmPassword?.message}
          </ErrorMessage>
        </label>
        <label>
          Bio:
          <Input
            type="text"
            placeholder="Digite aqui sua bio"
            {...register("bio")}
          />
          <ErrorMessage tag="span" titleType="headline" color="#E83F5B">
            {errors.bio?.message}
          </ErrorMessage>
        </label>
        <label>
          Contato:
          <Input
            type="text"
            placeholder="Digite aqui seu numero"
            {...register("contact")}
          />
          <ErrorMessage tag="span" titleType="headline" color="#E83F5B">
            {errors.contact?.message}
          </ErrorMessage>
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
        <ButtonStyle tag="button" butttonType="primary" type="submit">
          Registrar
        </ButtonStyle>
      </S.SingUpForm>
    </>
  );
};

export default SingUp;
