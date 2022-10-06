import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import Logo from "../../assets/img/Logo.svg";

import { post } from "../../services/api/request";
import { toast } from "react-toastify";

import Input from "../Input/style";
import * as S from "./style";
import Button from "../Button/style";
import { StyledTitle } from "../../styles/typography";
import { Loading } from "../Loading";

const SingIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoad, setIsload] = useState(true);
  const navigate = useNavigate();

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };

  useEffect(() => {
    setIsload(false);
  }, []);

  const singInSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório!").email("Email invalido"),
    password: yup.string().required("Campo obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(singInSchema),
  });

  const onSubmit = async (body) => {
    setIsload(true);
    const { data } = await post(body, "/sessions");
    if (data.message) {
      setIsload(false)
      toast.error("Email ou senha inválidos!");
    } else {
      toast.success("Login concluido");
      localStorage.setItem("userToken:", data.token);
      localStorage.setItem("userID:", data.user.id);
      navigate(`/dashboard/${data.user.id}`);
      setIsload(false);
    }
  };

  return (
    <>
      {isLoad ? (
        <Loading />
      ) : (
        <S.SingInForm onSubmit={handleSubmit(onSubmit)}>
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
            <StyledTitle tag="span" titleType="headline" color="#E83F5B">
              {errors.email?.message}
            </StyledTitle>
          </label>
          <label>
            Senha:
            <div>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Digite aqui seu nome"
                {...register("password")}
              />
              <StyledTitle tag="span" titleType="headline" color="#E83F5B">
                {errors.password?.message}
              </StyledTitle>
              <button onClick={(e) => togglePasswordVisibility(e)}>
                {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
              </button>
            </div>
          </label>
          <Button butttonType="primary">Entrar</Button>
          <StyledTitle tag="span" titleType="headlineBold" color="#868E96">
            Ainda não possui uma conta?
          </StyledTitle>
          <Link to="singUp">
            <Button butttonType="default">Cadastre-se</Button>
          </Link>
        </S.SingInForm>
      )}
    </>
  );
};

export default SingIn;
