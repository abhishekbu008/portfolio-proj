import { icons, MatIcon } from "../";
import { arrayToStr } from "../../helpers/helpers";

function Contact({ className, style }) {
  const classNames = arrayToStr([
    "text-grey-dark font-montserrat text-lg font-medium sm:text-base",
    className,
  ]);
  const styles = {
    ...style,
  };

  return (
    <article className={classNames} style={styles}>
      <p className="flex items-center mb-2.5">
        <MatIcon className="mr-5">{icons.mail} </MatIcon>
        <span>billy@example.com</span>
      </p>
      <p className="flex items-center">
        <MatIcon className="mr-5">{icons.call}</MatIcon>
        <span>(+603) 546 624 342</span>
      </p>
    </article>
  );
}

export default Contact;
