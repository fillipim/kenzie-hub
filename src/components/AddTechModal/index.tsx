import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTechContext } from "../../contexts/UserTechsContext";
import { addTechSchema } from "../../validations/tech";

import { ButtonStyle } from "../Button/button.style";
import Input from "../Input/input.style";
import Select from "../Select/select.style";
import * as S from "./AddTechModal.style";
import { ErrorMessage } from "../ErrorMessage/errorMessage.style";
import { Text } from "../../styles/typography";
import { iTech } from "../EditTechModal";

const AddTechModal = () => {
  const { setShowModal, addTech } = useTechContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iTech>({
    resolver: yupResolver(addTechSchema),
  });

  const onError = (error: any) => console.log(error);

  return (
    <S.ModalContainer>
      <div>
        <S.FormHeader>
          <Text level={1} fontWeight={700} color="grey0">
            Cadastrar Tecnologia
          </Text>
          <S.CloseModalButton
            type="button"
            onClick={() => {
              setShowModal(false);
            }}
          >
            X
          </S.CloseModalButton>
        </S.FormHeader>
        <S.ModalForm onSubmit={handleSubmit(addTech, onError)}>
          <label>
            Nome:
            <Input
              type="text"
              placeholder="Nome da Tech"
              {...register("title")}
            />
          </label>
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
          <label>
            Selecionar Status:
            <Select {...register("status")}>
              <option value="">Selecionar</option>
              <option value="iniciante">Iniciante</option>
              <option value="intermediario">Intermediário</option>
              <option value="avan">Iniciante</option>
            </Select>
            <ErrorMessage>{errors.status?.message}</ErrorMessage>
          </label>
          <ButtonStyle buttonType="primary">Cadastrar Tecnologia</ButtonStyle>
        </S.ModalForm>
      </div>
    </S.ModalContainer>
  );
};

export default AddTechModal;
