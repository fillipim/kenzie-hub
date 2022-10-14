import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserTechsContext } from "../../contexts/UserTechsContext";
import { addTechSchema } from "../../validations/tech";

import { ButtonStyle } from "../Button/button.style";
import Input from "../Input/input.style";
import Select from "../Select/select.style";
import * as S from "./AddTechModal.style";
import { ErrorMessage } from "../ErrorMessage/errorMessage.style";
import { StyledTitle } from "../../styles/typography";

const AddTechModal = () => {
  const { showModal, setShowModal, addTech } = useContext(UserTechsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addTechSchema),
  });

  return (
    showModal === "addTech" && (
      <S.ModalContainer>
        <div>
          <S.FormHeader >
            <StyledTitle tag="h3" titleType="title3" color="withe">
            Cadastrar Tecnologia
            </StyledTitle>
            <S.CloseModalButton 
            type="button"
              onClick={() => {
                setShowModal(null);
              }}
            >
              X
            </S.CloseModalButton>
          </S.FormHeader>
          <S.ModalForm onSubmit={handleSubmit(addTech)}>
            <label>
              Nome:
              <Input type="text" placeholder="Nome da Tech" {...register("title")} />
            </label>
            <ErrorMessage tag="span" titleType="headline" color="#E83F5B">
            {errors.title?.message}
          </ErrorMessage>
            <label>
              Selecionar Status:
              <Select {...register("status")}>
                <option value="">Selecionar</option>
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avan">Iniciante</option>
              </Select>
              <ErrorMessage tag="span" titleType="headline" color="#E83F5B">
            {errors.status?.message}
          </ErrorMessage>
            </label>
            <ButtonStyle tag="button" buttonType="primary">
              Cadastrar Tecnologia
            </ButtonStyle>
          </S.ModalForm>
        </div>
      </S.ModalContainer>
    )
  );
};

export default AddTechModal;
