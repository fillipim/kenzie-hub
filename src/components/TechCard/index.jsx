import { useContext } from "react";
import { UserTechsContext } from "../../contexts/UserTechsContext";
import { StyledTitle } from "../../styles/typography";
import * as S from "./TechCard.style";

const TechCard = ({ title, status, id }) => {
  const { setSelectedTech, setShowModal } = useContext(UserTechsContext);

  const handleTech = () => {
    setSelectedTech({ title: title, status: status, id: id });
    setShowModal("editTech");
  };

  return (
    <S.TechCard onClick={handleTech}>
      <StyledTitle tag="h3" titleType="title3" color="white">
        {title}
      </StyledTitle>
      <>
        <StyledTitle tag="span" titleType="headline" color="#868E96">
          {status}
        </StyledTitle>
      </>
    </S.TechCard>
  );
};

export default TechCard;
