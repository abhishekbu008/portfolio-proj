import { arrayToStr } from "../../helpers/helpers";

function SectionContainer({ children, className = "", style = {} }) {
  const classNames = arrayToStr([
    "p-6 bg-white rounded-xl shadow-section pb-7 sm:p-3.5",
    className,
  ]);

  const styles = {
    ...style,
  };

  return (
    <section className={classNames} style={styles}>
      {children}
    </section>
  );
}

export default SectionContainer;
