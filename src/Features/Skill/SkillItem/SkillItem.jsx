import { PROFICIENCY } from "../../../constants/skills";
import { arrayToStr } from "../../../helpers/helpers";

function SkillItem({
  name,
  proficiency = PROFICIENCY.BEGINNER,
  className = "",
  style = {},
}) {
  const classNames = arrayToStr([
    "flex items-center text-grey-dark",
    className,
  ]);
  const styles = { ...style };

  return (
    <article className={classNames} style={styles}>
      <p className="w-4/12 font-medium text-base md:w-8/12 mr-4">{name}</p>
      <div className="w-8/12 bg-grey-medium h-3 rounded-xl md:w-full">
        <div
          className="bg-blue-medium h-full rounded-xl"
          style={{ width: `${proficiency.value}%` }}
        ></div>
      </div>
    </article>
  );
}

export default SkillItem;
