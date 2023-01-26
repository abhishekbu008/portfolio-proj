import { SectionContainer } from "../../components";
import { skillItems } from "../../constants/skills";
import { arrayToStr } from "../../helpers/helpers";
import SkillItem from "./SkillItem/SkillItem";

function Skill({ sectionName, className = "", style = {} }) {
  const classNames = arrayToStr([className]);

  const styles = {
    ...style,
  };

  return (
    <SectionContainer className={classNames} style={styles}>
      <h2 className="font-bold text-xl text-grey-dark uppercase mb-4 md:text-lg">
        {sectionName}
      </h2>
      {skillItems.map((skillItem) => (
        <SkillItem {...skillItem} className="mb-4" key={skillItem.name} />
      ))}
    </SectionContainer>
  );
}

export default Skill;
