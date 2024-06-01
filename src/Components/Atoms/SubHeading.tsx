import { FC } from "react";
import "../../app/globals.css";
interface SubHeadingProps {
  content: String;
  styling: String;
}

const SubHeading: FC<SubHeadingProps> = ({ content, styling }) => {
  return (
    <p
      className={`${styling} text-xl capitalize opacity-50 clashdisplayMedium`}
    >
      {content}
    </p>
  );
};

export default SubHeading;
