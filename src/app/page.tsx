import Image from "next/image";
import Navbar from "@/Components/Organisms/Navbar";
import Banner from "@/Components/Organisms/Banner";

export default function Home() {
  return (
    <div className={"2xl:w-[90rem] mx-auto"}>
      <Navbar />
      <Banner />
    </div>
  );
}
