
import { iSingInUser } from "../components/SinginForm";
import { iUser } from "../contexts/AuthContext";
import api from "./api";

interface iUserLogin {
    token: string
    user: iUser
}

export const singIn = async (body: iSingInUser) => {
    const { data } = await api.post<iUserLogin>("/sessions", body);
    console.log(data);
    
    return data;
};