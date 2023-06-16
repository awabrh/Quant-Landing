import Image from "next/image";
import HeroImage from "../public/Hero.png";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex flex-row p-12 mx-14">
      <div className="flex flex-col w-full">
        <h1 className="text-7xl font-bold w-[36rem]">
          OPTAMIZING{" "}
          <span className="bg-clip-text text-transparent animate-flow bg-gradient-to-l from-fuchsia-800 via-cyan-800 to-fuchsia-800">
            DATA
          </span>{" "}
          TO SCALE ENTERPRISES
        </h1>
        <p className="text-neutral-500  w-[29rem] my-8">
          Quant empowers your organization with boundless excellence delivering
          unique Business Intelligence enterprise solutions through our
          cutting-edge products.
        </p>
        <div className="flex flex-row w-56 justify-between">
          <a className="bg-white text-black px-3 pb-1 rounded-full hover:cursor-pointer border hover:text-white hover:bg-black hover:border-white transition-all border-black ">
            start now <FaAngleRight className="hover:visible inline-block" />
          </a>
          <a className="text-neutral-500 hover:text-white hover:cursor-pointer transition-all">
            view products
          </a>
        </div>
      </div>
      <Image
        className="w-96"
        src={HeroImage}
        alt="quant logo with glass panels hovering around it"
      />
    </div>
  );
}
