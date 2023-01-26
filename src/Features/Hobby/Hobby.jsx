import { Heading, SectionContainer } from "../../components";
import { hobbies } from "../../constants/hobbies";
import { arrayToStr } from "../../helpers/helpers";
import HobbyCard from "./HobbyCard/HobyCard";

function Hobby({ className, style }) {
  const classNames = arrayToStr([className]);

  const styles = {
    ...style,
  };

  return (
    <SectionContainer className={classNames} style={styles}>
      <Heading className="mb-7 md:mb-4">Hobbies</Heading>

      {hobbies.map((hobby) => (
        <HobbyCard {...hobby} key={hobby.name} className="mb-9 md:mb-6"/>
      ))}
    </SectionContainer>
  );
}

export default Hobby;
