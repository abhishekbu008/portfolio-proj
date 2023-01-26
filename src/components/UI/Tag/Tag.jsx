import { arrayToStr } from "../../../helpers/helpers";

function Tag({ children, className = "", style = {} }) {
  const classNames = arrayToStr([
    "text-grey-dark text-base font-medium",
    className,
  ]);
  const styles = {
    ...style,
  };

  return (
    <p className={classNames} style={styles}>
      #{children}
    </p>
  );
}

export default Tag;
