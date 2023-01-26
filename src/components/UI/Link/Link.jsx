import { arrayToStr } from "../../../helpers/helpers";

function Link({ children, to = "#", className = "", style = {} }) {
  const classNames = arrayToStr([
    "text-blue-medium cursor-pointer",
    className,
  ]);
  const styles = {
    ...style,
  };
  return (
    <a href={to} className={classNames} style={styles}>
      {children}
    </a>
  );
}

export default Link;
