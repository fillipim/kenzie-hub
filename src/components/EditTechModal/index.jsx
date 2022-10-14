import { useContext } from "react";
import { UserTechsContext } from "../../contexts/UserTechsContext";
import { useForm } from "react-hook-form";
import api from "../../services/api";

import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { edittechSchema } from "../../validations/tech";

import Input from "../Input/input.style";
import Select from "../Select/select.style";
import { ErrorMessage } from "../ErrorMessage/errorMessage.style";
import * as S from "./editTech.style";
import { StyledTitle } from "../../styles/typography";

const EditTechModal = () => {
  const { showModal, setShowModal, editTech, selectedTech } =
    useContext(UserTechsContext);
  const { searchUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(edittechSchema)
  });

  const handleEditTech = (data) => {
    editTech(data, selectedTech.id);
  };

  const deleteTech = async (e) => {
    e.preventDefault();
    
    try {
      await api.delete(`/users/techs/${selectedTech.id}`);
      toast.success("Tech deletada!")
      searchUser()
      setShowModal(null)
    } catch (error) {
      console.log(error);
    }
  };

  console.log(errors);

  return (
    showModal === "editTech" && (
      <S.ModalContainer>
        <div>
          <S.FormHeader>
            <StyledTitle tag="h3" titleType="title3" color="withe">
              Tecnologia Detalhes
            </StyledTitle>
            <S.CloseModalButton
              onClick={() => {
                setShowModal(null);
              }}
            >
              X
            </S.CloseModalButton>
          </S.FormHeader>
          <S.ModalForm onSubmit={handleSubmit(handleEditTech)}>
            <label>
              Nome:
              <Input
                placeholder={selectedTech.title}
                {...register("title")}
                disabled
              />
            </label>
            <ErrorMessage
              tag="span"
              titleType="headline"
              color="#E83F5B"
            ></ErrorMessage>
            <label>
              Selecionar Status:
              <Select {...register("status")}>
                <option value="">Selecionar</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediario">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </Select>
              <ErrorMessage tag="span" titleType="headline" color="#E83F5B">
                {errors.status?.message}
              </ErrorMessage>
            </label>
            <div>
              <S.UpdateTechButton tag="button" buttonType="primary">
                Atualizar informações
              </S.UpdateTechButton>
              <S.DeleteTechButton
                onClick={deleteTech}
                tag="button"
                buttonType="default"
              >
                Excluir
              </S.DeleteTechButton>
            </div>
          </S.ModalForm>
        </div>
      </S.ModalContainer>
    )
  );
};

export default EditTechModal;
