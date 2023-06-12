import Image from "next/image";
import client1 from "../public/client 1.png";
import client2 from "../public/client 2.png";
import client3 from "../public/client 3.png";
import client4 from "../public/client 4.png";
import client5 from "../public/client 5.png";
import client6 from "../public/client 6.png";
import client7 from "../public/client 7.png";
import client8 from "../public/client 8.png";
import client9 from "../public/client 9.png";

export default function Clients() {
  return (
    <div className="flex flex-col items-center gap-16">
      <p className="text-neutral-500 w-80 text-center">
        We push our clients to ultimate paths of success through lifelong
        partnerships and lasting impact.
      </p>
      <div className="grid grid-cols-4 w-[50rem] gap-x-24 gap relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image src={client9} alt="saudi-french bank logo" className="pb-10" />
        <Image src={client2} alt="saudi-french bank logo" />
        <Image src={client3} alt="saudi-french bank logo" />
        <Image src={client4} alt="saudi-french bank logo" />
        <Image src={client5} alt="saudi-french bank logo" />
        <Image src={client6} alt="saudi-french bank logo" />
        <Image src={client7} alt="saudi-french bank logo" />
        <Image src={client8} alt="saudi-french bank logo" />
      </div>
    </div>
  );
}
