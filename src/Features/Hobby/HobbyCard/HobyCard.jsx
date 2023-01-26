import { Description, Heading, Picture } from "../../../components";
import { arrayToStr } from "../../../helpers/helpers";

function HobbyCard({ img, desc, name, className, style }) {
  const classNames = arrayToStr([className]);

  const styles = {
    ...style,
  };

  return (
    <article className={classNames} style={styles}>
      <Picture src={img} className="mb-7 h-56 min-w-full object-center md:mb-4" />
      <h2 className="font-bold text-xl text-grey-dark uppercase mb-2.5 md:text-lg">
        {name}
      </h2>
      <Description>{desc}</Description>
    </article>
  );
}

export default HobbyCard;
