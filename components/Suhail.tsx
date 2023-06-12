import Image from "next/image";
import phone from ".././public/phone.png";
import suhailLogo from ".././public/suhail.png";

export default function Suhail() {
  return (
    <div className="flex flex-row py-24 items-center justify-around">
      <div className="flex flex-col items-center w-80">
        <Image src={suhailLogo} alt="suhail logo" className="w-44" />
        <p className="text-neutral-500 text-center py-12">
          Suhail combines Machine Learning, Big Data & AI technologies with real
          estate data sources to showcase extensive property data and insights.
        </p>
      </div>
      <div className="flex items-center justify-center h-[35rem] rounded-2xl bg-gradient-to-bl from-blue-800 to-rose-600 via-yellow-600 w-[30rem]">
        <Image
          className="w-80"
          src={phone}
          alt="two floating phones with screenshots of the suhail real estate app"
        />
      </div>
    </div>
  );
}
