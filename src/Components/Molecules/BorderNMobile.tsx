import BorderEclipse from "@/Components/Atoms/BorderEclipse";
import CustomPhoto from "@/Components/Atoms/CustomPhoto";

const BorderNMobile = () => {
  return (
    <div className={"pt-32 relative w-[44.968rem]   "}>
      <div className={"relative  "}>
        <BorderEclipse styling={"absolute top-0 left-[6.6rem] "} />
        <BorderEclipse styling={"absolute top-[2.2rem] left-[4.4rem]"} />
        <BorderEclipse styling={"absolute top-[4.4rem] left-[2.2rem]"} />
      </div>
      <CustomPhoto
        src={"/gradientbg.png"}
        customStyle={
          "rotate-180 absolute w-[38rem] h-[24.5625rem] left-0  -z-10"
        }
      />
      <CustomPhoto
        src={"iPhone-13-Pro-Front.svg"}
        customStyle={"rotate-[15deg] ml-7"}
      />
    </div>
  );
};

export default BorderNMobile;
