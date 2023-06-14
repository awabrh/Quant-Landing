"use client";

import Solution from "./Solution";
import ai from ".././public/ai.png";
import ball from ".././public/ball.png";
import rocket from ".././public/rocket.png";
import window from ".././public/window.png";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Button from "./Button";

export default function Enterprise() {
  const [image, setImage] = useState<StaticImageData>(ai);
  const [offset, setOffset] = useState("translate-y-[0rem]");
  return (
    <div className="px-24">
      <div className="pb-16">
        <h3 className="text-3xl font-bold">Enterprise Solutions</h3>
        <p className="text-neutral-500 pt-5 w-72">
          Our distinguished set of enterprise solutions drive innovation and
          data transparency across industries, markets, and governments.
        </p>
      </div>
      <div className="flex flex-row justify-between relative">
        <div
          className={`absolute w-[1px] h-[9.2rem] bg-blue-600 transition-all ${offset}`}
        />
        <div className="pl-10 border-l-[1px] border-neutral-500 border-dashed">
          <Solution
            title="AI-Powered Models"
            text="Real-time insights powered by AI to uncover the full picture of the Real Estate & Retail markets and enable impactful decision-making and long-term planning."
            onHover={() => {
              setOffset("translate-y-[0rem]");
              setImage(ai);
            }}
          />
          <Solution
            title="Data-Driven Insights"
            text="An expanse of comprehensive, filtered, and structured data that provides a depth of knowledge, setting businesses and governments ahead of competition."
            onHover={() => {
              setOffset("translate-y-[9.2rem]");
              setImage(ball);
            }}
          />
          <Solution
            title="Advanced Analytics"
            text="Integrated & customized BI and analytics solutions that unlock Food & Beverage business potential effortlessly."
            onHover={() => {
              setOffset("translate-y-[18.4rem]");
              setImage(window);
            }}
          />
          <Solution
            title="Growth Acceleration"
            text="Simplified lead generation solutions tailored to the unique needs of individuals, lenders, and Micro, Small, and Medium enterprises (MSMEs)."
            onHover={() => {
              setOffset("translate-y-[27.6rem]");
              setImage(rocket);
            }}
          />
        </div>
        <div className="flex justify-center items-center w-full">
          <Image
            src={image}
            alt="ai processor"
            className="w-[35rem] h-[35rem] object-contain"
          />
        </div>
      </div>
      <div className="flex justify-center w-96 pt-10">
        <Button>Discover Our Solutions</Button>
      </div>
    </div>
  );
}
