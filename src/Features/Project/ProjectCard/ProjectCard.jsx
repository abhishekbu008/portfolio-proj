import {
  Button,
  Description,
  Heading,
  Picture,
  SectionContainer,
  Tag,
} from "../../../components";
import { arrayToStr } from "../../../helpers/helpers";
import { sizes } from "../../../constants/sizes";

function ProjectCard({
  title,
  img,
  tags,
  desc,
  demoUrl,
  codeUrl,
  className = "",
  style = {},
}) {
  const classNames = arrayToStr([className]);
  const styles = {
    ...style,
  };

  return (
    <SectionContainer className={classNames} style={styles}>
      <Picture src={img} className="mb-6" />
      <aside className="mt-auto">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <Heading className="text-2xl mt-6 mb-5">{title}</Heading>
        <Description className="mb-10 md:mb-6">{desc}</Description>

        <div className="mt-auto h-fit">
          {demoUrl && (
            <Button
              active={true}
              size={sizes.lg}
              className="mr-3 mb-1 sm:py-1.5 sm:px-5"
            >
              Demo
            </Button>
          )}
          {codeUrl && (
            <Button size={sizes.lg} className="sm:py-1.5 sm:px-5">
              Code
            </Button>
          )}
        </div>
      </aside>
    </SectionContainer>
  );
}

export default ProjectCard;
