import { iUserRegister } from "../components/SingUpForm";
import { iUser } from "../contexts/AuthContext";
import api from "./api";

export const singUp = async (body: iUserRegister) => {
    const {data} = await api.post<iUser>("/users", body);

    return data;
};