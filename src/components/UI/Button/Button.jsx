import { sizes } from "../../../constants/sizes";
import { arrayToStr } from "../../../helpers/helpers";

function Button({
  onClick = () => {},
  children,
  className,
  style,
  active = false,
  size = sizes.sm,
  disabled = false,
}) {
  const py = size === sizes.sm ? "py-2" : "py-3";
  const px = size === sizes.sm ? "px-6" : "px-10";

  const classNames = arrayToStr([
    "rounded-xl border-grey-dark border disabled:opacity-40 disabled:cursor-not-allowed",
    active ? "bg-blue-medium text-white border-transparent" : "",
    px,
    py,
    className,
  ]);
  const styles = {
    ...style,
  };
  return (
    <button
      onClick={onClick}
      className={classNames}
      style={styles}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
