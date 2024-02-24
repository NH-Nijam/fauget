import Image from "next/image";
import Banner from "./component/home/Banner";
import Items from "./component/home/Items";

export default function Home() {
  return (
    <main className=" ">
      <Banner/>
      <Items/>
    </main>
  );
}
