import { arrayToStr } from "../../helpers/helpers";

function Heading({ children, className = "", style = {} }) {
  const classNames = arrayToStr([
    "text-2xl text-grey-dark font-medium sm:text-xl",
    className,
  ]);
  const styles = {
    ...style,
  };
  return (
    <h2 className={classNames} style={styles}>
      {children}
    </h2>
  );
}

export default Heading;
