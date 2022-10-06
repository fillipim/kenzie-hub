import Logo from "../../assets/img/Logo.svg";
import Button from "../../components/Button/style";
import { StyledTitle } from "../../styles/typography";
import * as S from "./style"

const Dashboard = () => (
  <S.Dashboard>
    <header>
      <img src={Logo} alt="" />
      <Button butttonType="medium">Sair</Button>
    </header>
    <div>
        <StyledTitle tag="h3" titleType="title1" color="#fff" >Olá: user</StyledTitle>
        <StyledTitle tag="span" titleType="headline" color="#868E96">Primeiro módulo  (Introdução ao Frontend)</StyledTitle>
    </div>
    <div>
        <StyledTitle tag="h2" titleType="title1" color="#fff" >Que pena! Estamos em desenvolvimento :(</StyledTitle>
        <StyledTitle tag="span" titleType="headline" color="#fff">Nossa aplicação está em desenvolvimento, em breve teremos novidades</StyledTitle>
    </div>
  </S.Dashboard>
);

export default Dashboard;
