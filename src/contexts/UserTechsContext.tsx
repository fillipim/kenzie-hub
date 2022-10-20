import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { iTech } from "../components/EditTechModal";
import api from "../services/api";
import { useUserContext } from "./AuthContext";

interface iTechContextProp{
  children: ReactNode
}

interface iTechContext {
  setShowModal: React.Dispatch<React.SetStateAction<string | boolean>>,
  showModal: string | boolean,
  addTech(data: iTech): void,
  selectedTech: iTech,
  setSelectedTech: React.Dispatch<React.SetStateAction<iTech>>
  editTech(data: iTech, id: string): void

}

export const UserTechsContext = createContext({} as iTechContext);

const TechProvider = ({ children }: iTechContextProp) => {
  const { searchUser, setIsload } = useUserContext();
  const [showModal, setShowModal] = useState< string | boolean>(false);
  const [selectedTech, setSelectedTech] = useState<iTech>({} as iTech);

  const addTech = async (data: iTech) => {
    setIsload(true);
    try {
      await api.post("users/techs", data);
      toast.success("Tech adicionada!");
      searchUser();
      setShowModal(false);
      setIsload(false);
    } catch (error) {
      console.error(error);
      setIsload(false);
    }
  };

  const editTech = async (data: iTech, id: string) => {
    setIsload(true);

    try {
      await api.put(`/users/techs/${id}`, data);
      toast.success("Tech atualizada!");
      searchUser();
      setShowModal(false);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => setIsload(false), 5000);
    }
  };

  return (
    <UserTechsContext.Provider
      value={{
        showModal,
        setShowModal,
        addTech,
        setSelectedTech,
        selectedTech,
        editTech,
      }}
    >
      {children}
    </UserTechsContext.Provider>
  );
};

export default TechProvider;

export const useTechContext = (): iTechContext => {
  const context = useContext(UserTechsContext)
  
  return context
}