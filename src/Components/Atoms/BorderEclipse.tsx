import { FC } from "react";

interface BorderEclipseProps {
  styling: String;
}

const BorderEclipse: FC<BorderEclipseProps> = ({ styling }) => {
  return (
    <div
      className={`border border-black w-[23.94806rem] h-[34.47256rem] rounded-[50%] -rotate-45 ${styling}`}
    ></div>
  );
};

export default BorderEclipse;
