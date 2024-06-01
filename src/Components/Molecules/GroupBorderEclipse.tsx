import BorderEclipse from "@/Components/Atoms/BorderEclipse";

const GroupBorderEclipse = () => {
  return (
    <div className={"relative "}>
      <BorderEclipse styling={"absolute top-0 right-0 "} />
      <BorderEclipse styling={"absolute top-[2.2rem] right-[2.2rem]"} />
      <BorderEclipse styling={"absolute top-[4.4rem] right-[4.4rem]"} />
    </div>
  );
};

export default GroupBorderEclipse;
