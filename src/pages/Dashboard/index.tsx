import { useNavigate } from "react-router-dom";
import { useTechContext } from "../../contexts/UserTechsContext";
import { useUserContext } from "../../contexts/AuthContext";

import Logo from "../../assets/img/Logo.svg";
import AddTechModal from "../../components/AddTechModal";
import EditTechModal from "../../components/EditTechModal";
import TechsList from "../../components/TechsList";

import { ButtonStyle } from "../../components/Button/button.style";
import { Text } from "../../styles/typography";
import * as S from "./dashboard.style";
import Loading from "../../components/Loading";

const Dashboard = () => {
  const { setShowModal, showModal } = useTechContext();
  const {
    isLoad,
    user: { name, course_module },
  } = useUserContext();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <S.Dashboard>
      {isLoad && <Loading />}
      <S.Header>
        <img src={Logo} alt="" />
        <ButtonStyle buttonType="medium" onClick={logout}>
          Sair
        </ButtonStyle>
      </S.Header>
      <S.ProfileInfo>
        <Text level={3} fontWeight={700} size="size1">
          Olá: {name}
        </Text>
        <Text level={6} size="size3" fontWeight={400} color="grey1">{course_module}</Text>
      </S.ProfileInfo>
      <S.TechsHeader>
        <Text level={3}>Tecnologias</Text>
        <button onClick={() => setShowModal("addTech")}>+</button>
      </S.TechsHeader>
      <S.UserTechs>
        <TechsList />
      </S.UserTechs>
      {showModal === "addTech" && <AddTechModal />}
      {showModal === "editTech" && <EditTechModal />}
    </S.Dashboard>
  );
};

export default Dashboard;
