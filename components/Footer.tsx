import Image from "next/image";
import React from "react";
import logo from ".././public/logo.png";
import { FaCircle } from "react-icons/fa";
import TextField from "./TextField";
import Button from "./Button";

export default function Footer() {
  return (
    <section className="relative pt-[1px] mt-24 bg-gradient-radial from-blue-950 to-transparent">
      <div className="absolute -translate-y-10 -z-10 bg-gradient-radial from-[#00011d] via-black to-black w-full h-24" />
      <div className="pt-10 px-10  bg-black full">
        <div className="flex justify-between items-start px-16">
          <div className="flex items-start gap-20">
            <Image
              className="object-contain w-20 h-fit mr-20"
              src={logo}
              alt="quant logo"
            />
            <ul className="flex flex-col text-neutral-500 gap-2">
              <li>
                <p className="pb-2 text-white">Solutions</p>
              </li>
              <li>
                <a className="hover:cursor-pointer hover:text-white transition-all">
                  Suhail
                </a>
              </li>
              <li>
                <a className="hover:cursor-pointer hover:text-white transition-all">
                  Fruit360
                </a>
              </li>
              <li>
                <a className="hover:cursor-pointer hover:text-white transition-all">
                  Enterprise
                </a>
              </li>
            </ul>
            <ul className="flex flex-col text-neutral-500 gap-2">
              <p className="pb-3 text-white">Company</p>
              <li>
                <a className="hover:cursor-pointer hover:text-white transition-all">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:cursor-pointer hover:text-white transition-all">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p>Join Our Newsletter</p>
            <p className="text-neutral-500 pb-3">
              Subscribe For Free Weekly Insights
            </p>
            <TextField name="email" placeholder="Enter your email" />
            <div className="flex justify-end">
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-neutral-500 font-light border-t-[1px] px-4 pt-3 pb-32 mt-10 border-neutral-900">
          <div className="flex items-center text-neutral-500 ">
            <a className="hover:text-white hover:cursor-pointer transition-all">
              Privacy Policy
            </a>
            <FaCircle className="w-[3px] mx-3" />
            <a className="hover:text-white hover:cursor-pointer transition-all">
              Terms and Conditions
            </a>
          </div>
          <p>© 2023 Quant Data and Analytics . All rights reserved </p>
        </div>
      </div>
    </section>
  );
}
