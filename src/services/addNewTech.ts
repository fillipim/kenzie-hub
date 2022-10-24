import { iTech } from "../components/EditTechModal";
import api from "./api";

export const addNewTech =async (data:iTech) => {
  const response = await api.post<iTech>("users/techs", data);
  return response
}