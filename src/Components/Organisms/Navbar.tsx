import CustomPhoto from "@/Components/Atoms/CustomPhoto";

const Navbar = () => {
  return (
    <div
      className={"px-[10.94rem] flex items-center justify-between pt-[3.31rem]"}
    >
      <div className={"flex items-center gap-14"}>
        <CustomPhoto src={"logo.svg"} customStyle={"w-[7.3125rem] "} />
        <div className={"flex items-center gap-6"}>
          <h1 className={"text-xl font-bold leading-[1.625rem]"}>Home</h1>
          <h1 className={"text-xl font-bold leading-[1.625rem]"}>About Us</h1>
          <h1 className={"text-xl font-bold leading-[1.625rem] "}>Pricing</h1>
          <h1 className={"text-xl font-bold leading-[1.625rem]"}>Features</h1>
        </div>
      </div>
      <button
        className={
          "text-xl rounded  leading-[1.75rem] text-white px-[2.88rem] py-4 bg-black"
        }
      >
        Download
      </button>
    </div>
  );
};

export default Navbar;
