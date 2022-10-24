import { iTech } from "../components/EditTechModal";
import api from "./api";

export const editExistingTech = async (body:iTech, id: string) => {
   const response = await api.put<iTech>(`/users/techs/${id}`, body);
   return response;
}