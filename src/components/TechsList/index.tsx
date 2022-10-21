import { useUserContext } from "../../contexts/AuthContext";
import { iTech } from "../EditTechModal";
import TechCard from "../TechCard";

import * as S from "./techList.style"

const TechsList = () => {
  const { user:{techs} } = useUserContext();

  return (
    <S.TechList>
      { techs && techs.map(({ title, status, id }: iTech) => (
        <TechCard title={title} status={status} key={id} id={id} />
      ))}
    </S.TechList>
  );
};

export default TechsList;
