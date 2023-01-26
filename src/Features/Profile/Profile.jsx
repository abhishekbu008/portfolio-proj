import {
  Contact,
  Description,
  Picture,
  SectionContainer,
} from "../../components";
import Detail from "./Detail/Detail";
import profileImg from "../../assets/img/profile.jpg";
import { arrayToStr } from "../../helpers/helpers";

function Profile({ className = "", style = "" }) {
  const classNames = arrayToStr(["flex flex-wrap", className]);
  const styles = {
    ...style,
  };

  return (
    <SectionContainer className={classNames} style={styles}>
      <Picture
        src={profileImg}
        className="mr-8 w-72 h-80  md:w-full md:mr-0 md:object-center"
      />
      <div className="flex flex-col flex-1">
        <div className="flex justify-between flex-wrap md:mb-0 md:mt-6">
          <Detail
            name="Billy Pearson"
            occupation="Front-end developer"
            className="mb-9 lg:mb-9 sm:mb-6"
          />
          <Contact className="mb-9 sm:mb-6" />
        </div>
        <div className="flex flex-col mr-14 md:mr-0">
          <Description className="mb-6 md:mb-4">
            Self-motivated developer, who is willing to learn and create
            outstanding UI applications.
          </Description>
          <Description className="mb-6 md:mb-4">
            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
            feugiat malesuada molestie.
          </Description>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Profile;
