import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { UserContext } from "./AuthContext";

export const UserTechsContext = createContext();

const TechProvider = ({ children }) => {
  const { searchUser, setIsload } = useContext(UserContext);
  const [showModal, setShowModal] = useState(null);
  const [selectedTech, setSelectedTech] = useState({});

  const addTech = async (data) => {
    setIsload(true)
    try {
      await api.post("users/techs", data);
      toast.success("Tech adicionada!");
      searchUser();
      setShowModal(null);
    } catch (error) {
      console.error(error);
    }
  };

  const editTech = async (data, id) => {
    setIsload(true)
    try {
      await api.put(`/users/techs/${id}`, data)
      toast.success("Tech atualizada!")
      searchUser()
      setShowModal()
    } catch (error) {
        console.log(error);
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
        editTech
      }}
    >
      {children}
    </UserTechsContext.Provider>
  );
};

export default TechProvider;
