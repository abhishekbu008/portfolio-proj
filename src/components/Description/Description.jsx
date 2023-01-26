import { arrayToStr } from "../../helpers/helpers";

function Description({ className, style, children }) {
  const classNames = arrayToStr([
    "font-montserrat font-medium text-xl text-grey-light md:text-lg sm:text-base",
    className,
  ]);
  const styles = {
    ...style,
  };
  return (
    <p className={classNames} style={styles}>
      {children}
    </p>
  );
}

export default Description;
