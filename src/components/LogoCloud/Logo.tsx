"use client";
import React from "react";
import Image from "next/image";
import Cocacola2 from "@/public/LogoCloud/Cocacola2.svg";
import Grab2 from "@/public/LogoCloud/Grab2.svg";
import Paypal2 from "@/public/LogoCloud/Paypal2.svg";
import Panda from "@/public/LogoCloud/Panda.svg";
import Visa from "@/public/LogoCloud/Visa.svg";

export default function Logo() {
  return (
    <div className="py-24 sm:py-32">
      <h2 className="text-center text-3xl font-Pro leading-8 text-white">
        Collaborative partners With
      </h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 rounded-3xl">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-5 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            alt="Cocacola"
            src={Cocacola2}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="Food Panda"
            src={Panda}
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
          <Image
            alt="Grab Food"
            src={Grab2}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="Paypal"
            src={Paypal2}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <Image
            alt="Visa"
            src={Visa}
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
