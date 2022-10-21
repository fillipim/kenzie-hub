import { iUserRegister } from "../components/SingUpForm";
import api from "./api";

interface iUser {
    id: string,
    name: string
}

export const singUp = async (body: iUserRegister) => {
    const {data} = await api.post<iUser>("/users", body);

    return data;
};