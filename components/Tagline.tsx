import Image from "next/image";
import Cubes from ".././public/cube.png";

export default function Tagline() {
  return (
    <div className="flex flex-row justify-center items-center gap-40 py-32">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative w-96"
          src={Cubes}
          alt="glass cubes fitting together with white cubes to form a 9 by 9 cube"
        />
      </div>
      <div className="flex flex-col items-center w-96 text-center">
        <h3 className="text-3xl font-bold w-64">Where Data Meets Science</h3>
        <p className="text-neutral-500 w-80 py-4">
          We use enhanced analytics and AI to grow the most valuable asset your
          organization has at hand, your data.
        </p>
      </div>
    </div>
  );
}
