import { Outlet } from "react-router-dom";
import * as S from "./home.style";

const Home = () => {

  return (
  <S.Home>
    <Outlet/>
  </S.Home>
)};

export default Home;
