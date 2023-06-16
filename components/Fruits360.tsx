import Image from "next/image";
import laptop from ".././public/laptop.png";
import fruitsLogo from ".././public/fruits.png";
import Button from "./Button";

export default function Fruits360() {
  return (
    <div className="flex flex-row py-24 items-center justify-around">
      <div className="flex flex-col items-center w-80">
        <Image src={fruitsLogo} alt="fruits360 logo" className="w-44" />
        <p className="text-neutral-500 text-center py-12">
          Fruits drives F&B to efficiency and profitability with the power of
          enhanced AI, BI, and analytics.
        </p>
        <Button>Discover Fruits360</Button>
      </div>
      <div className="flex items-center justify-center h-[35rem] animate-flow rounded-2xl bg-gradient-to-bl from-violet-800 to-blue-600 via-emerald-600 w-[30rem]">
        <Image
          className="w-96"
          src={laptop}
          alt="a laptop floating diplaying a screenshot from the dashboard of fruit360"
        />
      </div>
    </div>
  );
}
