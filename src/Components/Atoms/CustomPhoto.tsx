import Image from "next/image";
import { FC } from "react";

interface CustomPhotoProps {
  src: string;
  customStyle: string;
}
const CustomPhoto: FC<CustomPhotoProps> = ({ src, customStyle }) => {
  return (
    <Image
      src={src}
      alt={""}
      width={500}
      height={500}
      className={customStyle}
    />
  );
};

export default CustomPhoto;
