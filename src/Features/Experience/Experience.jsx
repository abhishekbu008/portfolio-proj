import { Heading, SectionContainer } from "../../components";
import { experiences } from "../../constants/experiences";
import { arrayToStr } from "../../helpers/helpers";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

function Experience({ className, style }) {
  const classNames = arrayToStr([className]);
  const styles = {
    ...style,
  };

  return (
    <SectionContainer className={classNames} style={styles}>
      <Heading className="mb-11 sm:mb-6">Experiences</Heading>
      <section className="flex flex-col gap-9 sm:gap-4">
        {experiences.map((experience) => (
          <ExperienceCard {...experience} key={experience.id} />
        ))}
      </section>
    </SectionContainer>
  );
}

export default Experience;
