import { arrayToStr } from "../../../helpers/helpers";

function Detail({ name, occupation, className, style }) {
  const classNames = arrayToStr([className]);
  const styles = {
    ...style,
  };

  return (
    <article className={classNames} style={styles}>
      <h1 className="mb-1.5 font-semibold text-2xl text-grey-dark sm:text-xl">{name}</h1>
      <h2 className="text-lg text-grey-light">{occupation}</h2>
    </article>
  );
}

export default Detail;
