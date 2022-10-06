import { Outlet } from "react-router-dom";
import * as S from "./style";

const Home = () => (
    <S.Home>
      <Outlet />
    </S.Home>
  );


export default Home;
