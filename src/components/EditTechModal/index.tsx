import { useContext } from "react";
import { UserTechsContext } from "../../contexts/UserTechsContext";
import { useForm } from "react-hook-form";
import api from "../../services/api";

import { yupResolver } from "@hookform/resolvers/yup";
import { useUserContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { edittechSchema } from "../../validations/tech";

import {Input} from "../Input/input.style";
import {Select} from "../Select/select.style";
import { ErrorMessage } from "../ErrorMessage/errorMessage.style";
import * as S from "./editTech.style";
import { Text } from "../../styles/typography";

export interface iTech {
  title: string;
  status: string;
  id: string;
}

const EditTechModal = () => {
  const { setShowModal, editTech, selectedTech } =
    useContext(UserTechsContext);
  const { searchUser } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iTech>({
    resolver: yupResolver(edittechSchema),
  });

  const handleEditTech = (data: iTech) => {
    editTech(data, selectedTech.id);
  };

  const deleteTech = async (e: any) => {
    e.preventDefault();

    try {
      await api.delete(`/users/techs/${selectedTech.id}`);
      toast.success("Tech deletada!");
      searchUser();
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.ModalContainer>
      <div>
        <S.FormHeader>
          <Text level={2} fontWeight={700} color="grey0">
            Tecnologia Detalhes
          </Text>
          <S.CloseModalButton
            onClick={() => {
              setShowModal(false);
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
          <ErrorMessage></ErrorMessage>
          <label>
            Selecionar Status:
            <Select {...register("status")}>
              <option value="">Selecionar</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediario">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </Select>
            <ErrorMessage>{errors.status?.message}</ErrorMessage>
          </label>
          <div>
            <S.UpdateTechButton buttonType="primary">
              Atualizar informações
            </S.UpdateTechButton>
            <S.DeleteTechButton onClick={deleteTech} buttonType="default">
              Excluir
            </S.DeleteTechButton>
          </div>
        </S.ModalForm>
      </div>
    </S.ModalContainer>
  );
};

export default EditTechModal;
