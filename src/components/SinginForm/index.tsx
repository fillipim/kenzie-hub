import { FormEvent, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iUser, useUserContext } from "../../contexts/AuthContext";

import Loading from "../Loading";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { singInSchema } from "../../validations/singIn";

import LogoPath from "../../assets/img/Logo.svg"

import Input from "../Input/input.style";
import * as S from "./singIn.style";
import { ButtonStyle } from "../Button/button.style";
import { Text } from "../../styles/typography";
import { ErrorMessage } from "../ErrorMessage/errorMessage.style";

export interface iSingInUser {
  email: string;
  password: string;
}

const SingIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { setIsload, isLoad, submitLogin } = useUserContext();

  const togglePasswordVisibility = (e: FormEvent) => {
    e.preventDefault();
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };

  useEffect(() => {
    setIsload(false);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iSingInUser>({
    resolver: yupResolver(singInSchema),
  });

  return (
    <>
      {isLoad ? (
        <Loading />
      ) : (
        <S.SingInForm onSubmit={handleSubmit(submitLogin)}>
          <img src={LogoPath} alt="" />
          <Text level={2} fontWeight={700} color="grey0">
            Login
          </Text>
          <label>
            Email:
            <Input
              type="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </label>
          <label>
            Senha:
            <S.PasswordInput>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
              <button onClick={(e) => togglePasswordVisibility(e)}>
                {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
              </button>
            </S.PasswordInput>
          </label>
          <ButtonStyle type="submit" buttonType="primary">
            Entrar
          </ButtonStyle>
          <Text level={4} size="size3" color="grey1">
            Ainda não possui uma conta?
          </Text>
          <S.SingUpButton to="/singUp">Cadastre-se</S.SingUpButton>
        </S.SingInForm>
      )}
    </>
  );
};

export default SingIn;
