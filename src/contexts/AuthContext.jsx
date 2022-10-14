import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import api from "../services/api";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoad, setIsload] = useState(true);
  const navigate = useNavigate();

  const searchUser = async () => {
    const token = localStorage.getItem("@kenzie-hub: token");

    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get("/profile");
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
    setIsload(false);
  };

  const submitRegister = async (body) => {
    try {
      const { data } = await api("/users", body);
      toast.success("Cadastro concluído faça login para continuar!")
      navigate("/singIn");
      setIsload(false);
    } catch (error) {
      setIsload(false);
    }
  };

  const submitLogin = async (body) => {
    setIsload(true);
    try {
      const { data } = await api.post("/sessions", body);
      toast.success("Login concluìdo!");
      setUser(data);
      localStorage.setItem("@kenzie-hub: token", data.token);
      api.defaults.headers.athorization = `Bearer ${data.token}`;
      navigate("/dashboard");
      setIsload(false);
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha inválidos!")
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
