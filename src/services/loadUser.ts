import { iUser } from "../contexts/AuthContext";
import api from "./api";

export const loadUser = async () => {
  const { data } = await api.get<iUser>("/profile");
  return data;
};
