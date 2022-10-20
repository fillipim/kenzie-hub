import api from "./api";

interface iUser {
    id: string,
    name: string
}

export const register = async (body: object) => {
    const {data} = await api.post<iUser>("/users", body);

    return data;
}