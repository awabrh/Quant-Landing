"use client";

import Image from "next/image";
import phone from ".././public/phone.png";
import suhailLogo from ".././public/suhail.png";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

export default function Suhail() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleScroll = () => {
    const position = window.scrollY;
    console.log("scroll position is: " + position);
    if (position > 1200 && position < 2400) {
      if (videoRef.current) {
        const delta = (2400 - 1200) / 50;
        const time = (2400 - position) / delta / 24;
        videoRef.current.currentTime = time;
      }
    }
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-row py-24 items-center justify-around">
      <div className="flex flex-col items-center w-80">
        <Image src={suhailLogo} alt="suhail logo" className="w-44" />
        <p className="text-neutral-500 text-center py-12">
          Suhail combines Machine Learning, Big Data & AI technologies with real
          estate data sources to showcase extensive property data and insights.
        </p>
        <Button>Discover Suhail</Button>
      </div>
      <div className="flex items-center justify-center h-[35rem] animate-flow rounded-2xl bg-gradient-to-bl from-blue-800 to-rose-600 via-yellow-600 w-[30rem]">
        <Image
          className="w-80"
          src={phone}
          alt="two floating phones with screenshots of the suhail real estate app"
        />
      </div>
    </div>
  );
}
