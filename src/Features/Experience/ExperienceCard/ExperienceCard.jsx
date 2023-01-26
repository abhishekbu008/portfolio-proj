import Description from "../../../components/Description/Description";
import { arrayToStr } from "../../../helpers/helpers";

function ExperienceCard({
  img,
  fromDate,
  toDate,
  position,
  desc,
  className = "",
  style = {},
}) {
  const classNames = arrayToStr([
    "object-cover object-top flex items-center gap-6 sm:block",
    className,
  ]);
  const styles = {
    ...style,
  };
  return (
    <article className={classNames} style={styles}>
      {img && (
        <img
          src={img}
          className="w-32 h-24 object-cover object-center self-start"
        />
      )}
      <div className="text-grey-light">
        <p className=" font-medium text-sm mb-3">
          {fromDate} - {toDate}
        </p>
        <p className="text-grey-extra-dark font-semibold text-base mb-8 sm:mb-4">
          {position}
        </p>
        <p>{desc}</p>
      </div>
    </article>
  );
}

export default ExperienceCard;
