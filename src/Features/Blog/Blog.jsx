import {
  Description,
  Heading,
  Link,
  Picture,
  SectionContainer,
} from "../../components";
import { arrayToStr } from "../../helpers/helpers";

function Blog({ title, img, descriptions, link = {}, className, style }) {
  const classNames = arrayToStr([
    "flex gap-20 pr-0 md:flex-col-reverse md:pr-6 md:gap-10 sm:gap-6",
    className,
  ]);
  const styles = {
    ...style,
  };

  return (
    <SectionContainer className={classNames} style={styles}>
      <div className="flex flex-col md:block">
        <h2 className="text-grey-extra-light font-medium text-base mb-8 md:mb-4">
          Blog
        </h2>
        <Heading className="mb-7 w-1/2 md:w-full md:mb-4">{title}</Heading>
        {descriptions.map((description) => (
          <Description key={description.id} className="mb-8 md:mb-4">
            {description.text}
          </Description>
        ))}
        <Link to={link.to} className="mt-auto translate-y-2/3">
          {link.text}
        </Link>
      </div>
      <Picture
        src={img}
        className="w-1/2 h-96 object-center rounded-r-none my-auto md:w-full md:rounded-xl"
      />
    </SectionContainer>
  );
}

export default Blog;
