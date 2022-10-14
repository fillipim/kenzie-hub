import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserTechsContext } from "../../contexts/UserTechsContext";
import { UserContext } from "../../contexts/AuthContext";

import Logo from "../../assets/img/Logo.svg";
import AddTechModal from "../../components/AddTechModal";
import EditTechModal from "../../components/EditTechModal";
import TechsList from "../../components/TechsList";

import { ButtonStyle } from "../../components/Button/button.style";
import { StyledTitle } from "../../styles/typography";
import * as S from "./dashboard.style";
import Loading from "../../components/Loading";

const Dashboard = () => {
  const { setShowModal } = useContext(UserTechsContext);
  const { isLoad } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    user: { name, course_module },
  } = useContext(UserContext);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <S.Dashboard>
      { isLoad && <Loading/>}
      <S.Header>
        <img src={Logo} alt="" />
        <ButtonStyle tag="button" buttonType="medium" onClick={logout}>
          Sair
        </ButtonStyle>
      </S.Header>
      <S.ProfileInfo>
        <StyledTitle tag="h3" titleType="title1" color="#fff">
          Olá: {name}
        </StyledTitle>
        <StyledTitle tag="span" titleType="headline" color="#868E96">
          {course_module}
        </StyledTitle>
      </S.ProfileInfo>
      <S.TechsHeader>
        <StyledTitle tag="h3" titleType="title2" color="white">
          Tecnologias
        </StyledTitle>
        <button onClick={() => setShowModal("addTech")}>+</button>
      </S.TechsHeader>
      <S.UserTechs>
        <TechsList />
      </S.UserTechs>
      <AddTechModal />
      <EditTechModal />
    </S.Dashboard>
  );
};

export default Dashboard;
