import { arrayToStr } from "../../../helpers/helpers";

function Picture({ src, className, style }) {
  const classNames = arrayToStr([
    "block rounded-xl object-cover object-top",
    className,
  ]);
  const styles = {
    ...style,
  };

  return <img className={classNames} style={styles} src={src} />;
}

export default Picture;
