import { iTech } from "../EditTechModal";
import { Text } from "../../styles/typography";
import * as S from "./TechCard.style";
import { useTechContext } from "../../contexts/UserTechsContext";

const TechCard = ({ title, status, id }: iTech) => {
  const { setSelectedTech, setShowModal } = useTechContext();

  const handleTech = () => {
    setSelectedTech({ title: title, status: status, id: id });
    setShowModal("editTech");
  };

  return (
    <S.TechCard onClick={handleTech}>
      <Text level={3} fontWeight={700} color="grey0" size="size3">
        {title}
      </Text>
      <>
        <Text level={6} fontWeight={400} color="grey1" size="size4">
          {status}
        </Text>
      </>
    </S.TechCard>
  );
};

export default TechCard;
