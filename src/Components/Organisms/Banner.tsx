import { BigHeading, SmallHeading } from "@/Components/Atoms/Heading";
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
              <p
                className={"opacity-100 text-xl capitalize clashdisplayMedium"}
              >
                Watch Video
              </p>
            </button>
          </div>
          <div className={"mt-40 absolute"}>
            <CustomPhoto
              src={"Star.svg"}
              customStyle={"absolute h-12 w-12 -top-24 left-32 rotate-[45deg] "}
            />
            <div
              className={
                "bg-black -rotate-[28deg] rounded-tr rounded-br flex items-center w-[33.39469rem] justify-between px-6 pt-[0.5rem] z-40"
              }
            >
              <BigHeading
                content={"A"}
                styling={"text-[6.64906rem]  text-black -ml-20 -mt-1 "}
              />
              <div className={"flex items-center gap-1 tracking-wider"}>
                <CustomPhoto
                  src={"trophy.svg"}
                  customStyle={"h-12 w-12 rotate-[24deg]"}
                />
                <div className={" "}>
                  <h2 className="text-white text-[0.73519rem] capitalize  clashdisplaySemibold font-semibold leading-[1.75rem]">
                    Achievement
                  </h2>

                  <p
                    className={
                      "text-white text-[0.73519rem] opacity-100 capitalize "
                    }
                  >
                    best finance app on playstore
                  </p>
                </div>
              </div>
              <div
                className={
                  "h-[2.53238rem] rotate-[30deg] w-[0.006rem] bg-white mr-4"
                }
              ></div>
              <div className={"flex items-center gap-1 tracking-wider"}>
                <CustomPhoto
                  src={"money.svg"}
                  customStyle={"h-12 w-12 rotate-[24deg]"}
                />
                <div className={" gap-2"}>
                  <h2 className="text-white text-[0.73519rem] capitalize  clashdisplaySemibold font-semibold leading-[1.75rem]">
                    Finance
                  </h2>
                  <p
                    className={
                      "text-white text-[0.73519rem] opacity-100 capitalize "
                    }
                  >
                    Most popular accounting app
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                "w-[22.04675rem] h-[4.47869rem]  rounded-md -z-30 bg-[#FF5555] -rotate-[45.742deg] -skew-x-[20deg] absolute -right-[1.40rem] flex items-center justify-center top-[0.1rem] bg-noise bg-blend-soft-light"
              }
            >
              <p
                className={
                  "text-black clashdisplaySemibold text-[0.73519rem]  capitalize "
                }
              >
                make the best financial decisions
              </p>
            </div>
            <div
              className={
                "w-[16rem] flex items-center justify-end h-[4.4375rem] bg-[#FF5555] bg-noise rounded-md bg-blend-soft-light absolute right-2 -z-40 -bottom-[7.75rem] "
              }
            >
              <div className={"border-x-2 px-4 border-black"}>
                <CustomPhoto
                  src={"Star.svg"}
                  customStyle={"h-[4.4375rem] w-12    "}
                />
              </div>
              <div className={"px-4"}>
                <h2 className="text-black text-[0.73519rem] capitalize  clashdisplaySemibold font-semibold leading-[1.75rem]">
                  Uifry Premium
                </h2>
                <p
                  className={
                    "text-black text-[0.73519rem] opacity-100 capitalize clashdisplayMedium "
                  }
                >
                  free trial
                </p>
              </div>
            </div>
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
