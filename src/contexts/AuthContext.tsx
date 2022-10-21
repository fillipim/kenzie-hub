import React, { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { HeadersDefaults } from "axios";

import { toast } from "react-toastify";
import { iTech } from "../components/EditTechModal";
import { iUserRegister } from "../components/SingUpForm";
import { iSingInUser } from "../components/SinginForm";
import { singUp } from "../services/submitRegister";
import { singIn } from "../services/submitLogin";
import { loadUser } from "../services/loadUser";

interface iUserContextProps{
  children: ReactNode
}
export interface iUser {
  name: string,
  course_module: string,
  techs: iTech[];
}

interface iRequestHeader extends HeadersDefaults {Authorization: string}

interface iUserContext{
  user: iUser ,
  searchUser: () => void,
  submitRegister: (body: iUserRegister) => void,
  isLoad: boolean,
  setIsload: React.Dispatch<React.SetStateAction<boolean>>
  submitLogin: (body: iSingInUser) => void,
  setUser: React.Dispatch<React.SetStateAction<iUser >>
}

const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<iUser >({} as iUser);
  const [isLoad, setIsload] = useState(true);
  const navigate = useNavigate();

  const searchUser = async () => {
    const token = localStorage.getItem("@kenzie-hub: token");

    if (token) {
      try {
        api.defaults.headers = {Authorization: `Bearer ${token}`} as iRequestHeader;
        const data = await loadUser()
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
    setIsload(false);
  };

  const submitRegister = async (body: iUserRegister) => {
    setIsload(true);
    try {
      await singUp(body)
      toast.success("Cadastro concluído faça login para continuar!");
      navigate("/")
    } catch({response: {data: {message}}}) {
      
      message === "Email already exists"
        ? toast.error("Esse email já está sendo usado!")
        : toast.error("Algo está errado!");
    } finally {
      setIsload(false);
    }
  };

  const submitLogin = async (body: iSingInUser) => {
    setIsload(true);
    try {
      const data = await singIn(body)
      toast.success("Login concluìdo!");
      setUser(data);
      localStorage.setItem("@kenzie-hub: token", data.token);
      api.defaults.headers = {Authorization: `Bearer ${data.token}`} as iRequestHeader;;
      navigate("/dashboard");
      setIsload(false);
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha inválidos!");
      setIsload(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        submitRegister,
        setIsload,
        isLoad,
        submitLogin,
        user,
        setUser,
        searchUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = (): iUserContext => {
  const context = useContext(UserContext)
  return context 
}