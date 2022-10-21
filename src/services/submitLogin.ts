
import { iSingInUser } from "../components/SinginForm";
import api from "./api";

export const singIn = async (body: iSingInUser) => {
    const { data } = await api.post("/sessions", body);
    return data;
};