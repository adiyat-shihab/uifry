import { FC } from "react";
import "../../app/globals.css";

interface HeadingProps {
  content: String;
  styling: String;
}
export const BigHeading: FC<HeadingProps> = ({ content, styling }) => {
  return (
    <h1
      className={`${styling || "text-5xl"} clashdisplayBold capitalize leading-[4rem] font-bold  `}
    >
      {content}
    </h1>
  );
};

export const MediumHeading: FC<HeadingProps> = ({ content, styling }) => {
  return (
    <h2
      className={`${styling} capitalize font-semibold clashdisplayBold text-[1.75rem] leading-[3rem] `}
    >
      {content}
    </h2>
  );
};
export const SmallHeading: FC<HeadingProps> = ({ content, styling }) => {
  return (
    <h2
      className={`${styling} capitalize  text-[1.125rem] clashdisplaySemibold font-semibold leading-[1.75rem] `}
    >
      {content}
    </h2>
  );
};
