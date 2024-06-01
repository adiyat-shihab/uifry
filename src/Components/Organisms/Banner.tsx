import { BigHeading } from "@/Components/Atoms/Heading";
import CustomPhoto from "@/Components/Atoms/CustomPhoto";
import SubHeading from "@/Components/Atoms/SubHeading";
import GroupBorderEclipse from "@/Components/Molecules/GroupBorderEclipse";
const Banner = () => {
  return (
    <div className={" relative "}>
      <CustomPhoto
        src={"Star.svg"}
        customStyle={"w-12 h-12 -rotate-45 top-8 left-11 absolute"}
      />
      <div className={"flex items-center justify-between"}>
        <div className={"pl-[10.94rem]"}>
          <BigHeading
            content={"make the best financial decisions"}
            styling={" pt-[7.93rem] font-bold text-[4rem] w-[38.625rem]  z-20 "}
          />
          <CustomPhoto
            src={"/gradientbg.png"}
            customStyle={" absolute top-0 left-72 -z-10 "}
          />
          <SubHeading
            content={
              "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
            }
            styling={"w-[39rem] my-[1.5rem] font-medium"}
          />
          <div className={"flex items-center gap-10"}>
            <button
              className={
                "text-xl rounded flex items-center  gap-2  leading-[1.75rem]  text-white px-[1.44rem] py-4 bg-black"
              }
            >
              Get Started
              <CustomPhoto src={"arrow.svg"} customStyle={"w-[1.5rem]"} />
            </button>
            <button
              className={
                "text-xl rounded flex items-center  gap-2 font-medium  leading-[1.75rem]  text-black px-[1.44rem] py-4 "
              }
            >
              <CustomPhoto src={"play.svg"} customStyle={"w-[1.5rem]"} />{" "}
              <SubHeading content={"watch video"} styling={" opacity-100"} />
            </button>
          </div>
        </div>
        <div className={""}>
          <CustomPhoto
            src={"/iPhone-13-Pro-Front.svg"}
            customStyle={"absolute top-0 right-52 z-40"}
          />
          <CustomPhoto
            src={"/iPhone-13-Pro-Front2.svg"}
            customStyle={"absolute top-[5rem] right-[6rem]  z-30"}
          />
          <CustomPhoto
            src={"/iPhone-13-Pro-Front.svg"}
            customStyle={"absolute z-20 top-32 -right-2"}
          />
          <div className={"absolute top-8 right-24 bottom "}>
            <GroupBorderEclipse />
          </div>
          <div>
            <CustomPhoto
              src={"/redgradient.png"}
              customStyle={"absolute right-11 -bottom-56 z-10"}
            />
            <CustomPhoto
              src={"/redgradient.png"}
              customStyle={"absolute right-32 -bottom-80 z-10"}
            />
            <CustomPhoto
              src={"Star.svg"}
              customStyle={
                "absolute right-[32rem] -bottom-44 h-12 w-12 rotate-[150deg] z-20"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
