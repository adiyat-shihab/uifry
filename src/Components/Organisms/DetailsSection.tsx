import BorderNMobile from "@/Components/Molecules/BorderNMobile";
import { BigHeading, SmallHeading } from "@/Components/Atoms/Heading";
import CustomPhoto from "@/Components/Atoms/CustomPhoto";

const DetailsSection = () => {
  const features = [
    {
      icon: "flare.svg",
      title: "budgeting intervals",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
    {
      icon: "wheel.svg",
      title: "budgeting intervals",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
    {
      icon: "cube.svg",
      title: "budgeting intervals",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
  ];

  return (
    <div className={"flex justify-between items-center pl-[10.94rem]"}>
      <BorderNMobile />
      <div className={"w-[39.875rem]"}>
        <h2 className="text-[#FF5555] text-[1.125rem] tracking-[0.18rem] uppercase clashdisplaySemibold font-semibold leading-[1.75rem]">
          Features
        </h2>
        <BigHeading content={"Uifry Premium"} styling={""} />
        <div className={"py-8 space-y-8"}>
          {features.map((feature, index) => (
            <div key={index}>
              <div className={"flex  gap-2"}>
                <CustomPhoto
                  src={feature.icon}
                  customStyle={"h-[1.5rem] w-[1.5rem]"}
                />
                <SmallHeading content={feature.title} styling={""} />
              </div>
              <p className=" font-medium text-[1.125rem] capitalize opacity-50 clashdisplayMedium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
