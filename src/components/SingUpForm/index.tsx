import { useForm } from "react-hook-form";
import { useUserContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { singUpschema } from "../../validations/singUp";

import {Input} from "../Input/input.style";
import { Text } from "../../styles/typography";
import LogoPath from "../../assets/img/Logo.svg";
import * as S from "./singUp.style";
import {Select} from "../Select/select.style";
import { ButtonStyle } from "../Button/button.style";
import { ErrorMessage } from "../ErrorMessage/errorMessage.style";

export interface iUserRegister  {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  bio: string,
  contact: string,
  course_module: string
}

const SingUp = () => {
  const { submitRegister } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRegister>({
    resolver: yupResolver(singUpschema),
  });

  return (
    <>
      <S.SingUpForm onSubmit={handleSubmit(submitRegister)}>
        <img src={LogoPath} alt="" />
        <Link to="/">
          <ButtonStyle buttonType="medium">
            Sair
          </ButtonStyle>
        </Link>
        <Text level={2} fontWeight={700} color="grey0">
          Crie sua conta
          <Text level={6} fontWeight={400} size="size3" color="grey1">
            Rapido e grátis, vamos nessa
          </Text>
        </Text>
        <label>
          Nome:
          <Input
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <ErrorMessage>
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
          <ErrorMessage>
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
          <ErrorMessage>
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
          <ErrorMessage>
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
          <ErrorMessage>
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
          <ErrorMessage>
            {errors.contact?.message}
          </ErrorMessage>
        </label>
        <label>
          Selecionar módulo:
          <Select {...register("course_module")}>
            <option value="" >
              Selecione Um Modulo
            </option>
            <option value="M1 HTML e CSS basico">M3 HTML e CSS basico</option>
            <option value="M2 JavaScript e POO">M2 JavaScript e POO</option>
            <option value="M3 React">M3 React</option>
          </Select>
          <ErrorMessage >
              {errors.course_module?.message}
          </ErrorMessage>
        </label>
        <ButtonStyle buttonType="primary" type="submit">
          Registrar
        </ButtonStyle>
      </S.SingUpForm>
    </>
  );
};

export default SingUp;
