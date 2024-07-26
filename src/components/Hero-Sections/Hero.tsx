"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Hero1 from "@/public/Hero/Hero1.png";
export default function Hero() {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <div className="max-h-[500px] relative">
        <div className=" absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40  flex flex-col justify-center items-center rounded-2xl">
          <h1 className="px-4 text-4xl sm:text-5xl lg:text-7xl md:text-6xl font-Pro text-center animate-slide-in">
            Welcome<span className="text-yellow-500">To☕️</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl lg:text-7xl md:text-6xl font-Pro text-center animate-slide-in">
            <span className="text-yellow-500">My</span>Restaurants☕️
          </h1>
          <button className="border-yellow-900  bg-white text-yellow-800 rounded  bottom-6 mt-5 hover:bg-yellow-600 hover:text-gray-900 animate-slide-in font-Pro">
            <Link href="/Booking">MAKE RESERVATION</Link>
          </button>
        </div>
        <Image
          className="w-full max-h-[500px] object-cover rounded-2xl"
          src={Hero1}
          alt="/"
        />
      </div>
      <div>
        <h1 className="pt-7 text-center text-xl text-zinc-300 font-Pro animate-fade-in-in">
          ✦ MOST ORDERED MENU ✦ <br />
          <span className="text-yellow-500 text-3xl ">
            Best Choice of the month
          </span>
        </h1>
      </div>
    </div>
  );
}
