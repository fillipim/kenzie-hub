import { useContext } from "react";
import { UserContext } from "../../contexts/AuthContext";
import TechCard from "../TechCard";

import * as S from "./techList.style"

const TechsList = () => {
  const { user:{techs} } = useContext(UserContext);

  console.log(techs);

  return (
    <S.TechList>
      { techs && techs.map(({ title, status, id }) => (
        <TechCard title={title} status={status} key={id} id={id} />
      ))}
    </S.TechList>
  );
};

export default TechsList;
