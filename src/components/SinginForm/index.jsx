import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/AuthContext";

import Loading from "../Loading";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import Logo from "../../assets/img/Logo.svg";

import { singInSchema } from "../../validations/singIn";

import Input from "../Input/input.style";
import * as S from "./singIn.style";
import { ButtonStyle } from "../Button/button.style";
import { StyledTitle } from "../../styles/typography";
import { ErrorMessage } from "../ErrorMessage/errorMessage.style";

const SingIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { setIsload, isLoad, submitLogin } = useContext(UserContext);

  const togglePasswordVisibility = (e) => {
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
  } = useForm({
    resolver: yupResolver(singInSchema),
  });

  return (
    <>
      {isLoad ? (
        <Loading />
      ) : (
        <S.SingInForm onSubmit={handleSubmit(submitLogin)}>
          <img src={Logo} alt="" />
          <StyledTitle tag="h3" titleType="title3">
            Login
          </StyledTitle>
          <label>
            Email:
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
            <div>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
              <ErrorMessage tag="span" titleType="headline" color="#E83F5B">
                {errors.password?.message}
              </ErrorMessage>
              <button onClick={(e) => togglePasswordVisibility(e)}>
                {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
              </button>
            </div>
          </label>
          <ButtonStyle tag="button" buttonType="primary">
            Entrar
          </ButtonStyle>
          <StyledTitle tag="span" titleType="headlineBold" color="#868E96">
            Ainda não possui uma conta?
          </StyledTitle>
          <ButtonStyle buttonType="default" tag="a" to="singUp">
            Cadastre-se
          </ButtonStyle>
        </S.SingInForm>
      )}
    </>
  );
};

export default SingIn;
