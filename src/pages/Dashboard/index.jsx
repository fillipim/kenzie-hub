import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/img/Logo.svg";
import Button from "../../components/Button/style";
import { get } from "../../services/api/request";
import { StyledTitle } from "../../styles/typography";
import * as S from "./style";

const Dashboard = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");

  const seachUser = async () => {
    const { course_module, name } = await get(id, "users");
    setUserInfo({ name: name, module: course_module });
  };

  useEffect(() => {
    
    seachUser();
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <S.Dashboard>
      <header>
        <img src={Logo} alt="" />
        <Button butttonType="medium" onClick={logout}>
          Sair
        </Button>
      </header>
      <div>
        <StyledTitle tag="h3" titleType="title1" color="#fff">
          Olá: {userInfo.name}
        </StyledTitle>
        <StyledTitle tag="span" titleType="headline" color="#868E96">
          {userInfo.module}
        </StyledTitle>
      </div>
      <div>
        <StyledTitle tag="h2" titleType="title1" color="#fff">
          Que pena! Estamos em desenvolvimento :(
        </StyledTitle>
        <StyledTitle tag="span" titleType="headline" color="#fff">
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </StyledTitle>
      </div>
    </S.Dashboard>
  );
};

export default Dashboard;
