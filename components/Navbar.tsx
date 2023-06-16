"use client";

import { useState } from "react";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [arrowOffset, setArrowOffset] = useState("ml-[217px]");
  const [bubbleOffset, setBubbleOffset] = useState("ml-[180px]");
  const [bubbleVisability, setBubbleVisability] = useState("hidden");
  const [isProducts, setIsProducts] = useState(true);

  return (
    <>
      {toggle ? (
        <div className="absolute w-screen h-screen">
          <div className="fixed w-full z-50 h-full bg-[#000000e2]  flex flex-row-reverse justify-end transition-all duration-100">
            <HiX
              className="mx-7 my-2 hover:cursor-pointer"
              size={50}
              onClick={() => {
                setToggle((prevState) => !prevState);
              }}
            />
            <div className="flex flex-col ml-24 justify-center items-center w-full h-full">
              <ul className="flex flex-col justify-around h-1/2 items-center">
                <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
                  <Link href="/#">Enterprise</Link>
                </li>
                <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
                  <Link href="/#">Products</Link>
                </li>
                <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
                  <Link href="/#">Company</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div
        onMouseLeave={() => {
          setBubbleVisability("hidden");
        }}
        className="flex items-center h-16 md:h-24 transition-all bg-black "
      >
        <div className="flex justify-between w-full items-center mx-8">
          <Image
            src="/logo.png"
            alt="Quant logo"
            width={80}
            height={20}
            className="hover:cursor-pointer"
          />

          <div className="hidden md:flex relative">
            <ul className="flex text-md gap-8 text-neutral-500 font">
              <li className="hover:text-white hover:cursor-pointer transition-all duration-200">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-white hover:cursor-pointer transition-all duration-200">
                <Link
                  href="/#"
                  onMouseEnter={() => {
                    setBubbleVisability("hidden");
                  }}
                >
                  Enterprise
                </Link>
              </li>
              <li className="hover:text-white hover:cursor-pointer transition-all duration-200">
                <Link
                  href="/#"
                  onMouseEnter={() => {
                    setBubbleVisability("visible");
                    setArrowOffset("ml-[217px]");
                    setBubbleOffset("ml-[180px]");
                    setIsProducts(true);
                  }}
                >
                  Products
                </Link>
              </li>
              <li className="hover:text-white hover:cursor-pointer transition-all duration-200">
                <Link
                  href="/#"
                  onMouseEnter={() => {
                    setBubbleVisability("visible");
                    setArrowOffset("ml-[317px]");
                    setBubbleOffset("ml-[260px] w-28");
                    setIsProducts(false);
                  }}
                >
                  Company
                </Link>
              </li>
            </ul>
            <div
              className={`absolute bg-neutral-500 rotate-45 mt-9 w-3 h-3 backdrop-blur ${arrowOffset} ${bubbleVisability} transition-all`}
            ></div>
            <div
              className={`absolute flex flex-col p-4 gap-2 items-center text-neutral-500 border-[1px] border-neutral-500 mt-10 backdrop-blur rounded-lg ${bubbleOffset} ${bubbleVisability} transition-all`}
            >
              {isProducts ? (
                <>
                  <a className="hover:cursor-pointer hover:text-white transition-all">
                    Suhail
                  </a>
                  <a className="hover:cursor-pointer hover:text-white transition-all">
                    Fruit360
                  </a>
                </>
              ) : (
                <>
                  <a className="hover:cursor-pointer hover:text-white transition-all block">
                    About Us
                  </a>
                  <a className="hover:cursor-pointer hover:text-white transition-all">
                    Careers
                  </a>
                </>
              )}
            </div>
          </div>

          <div
            className="md:hidden text-2xl hover:cursor-pointer"
            onClick={() => {
              setToggle((prevState) => !prevState);
            }}
          >
            {toggle ? <></> : <FaBars />}
          </div>
        </div>
      </div>
    </>
  );
}
