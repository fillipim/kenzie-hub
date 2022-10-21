import api from "./api";

export const loadUser = async () => {
  const { data } = await api.get("/profile");
  return data;
};
