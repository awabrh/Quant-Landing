"use client";

import { useState } from "react";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

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
      <div className="flex items-center h-16 md:h-24 transition-all bg-black ">
        <div className="flex justify-between w-full items-center mx-8">
          <Image
            src="/logo.png"
            alt="Quant logo"
            width={80}
            height={20}
            className="hover:cursor-pointe"
          />

          <div className="hidden md:flex">
            <ul className="flex text-md font-light gap-8">
              <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
                <Link href="/#">Enterprise</Link>
              </li>
              <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
                <Link href="/#">Product</Link>
              </li>
              <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
                <Link href="/#">company</Link>
              </li>
            </ul>
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
