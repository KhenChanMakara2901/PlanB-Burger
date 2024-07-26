"use client";
import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import Card1 from "@/public/Card/Card1.png";
import Card2 from "@/public/Card/Card2.png";
import Card3 from "@/public/Card/Card3.png";
export default function Headline() {
  return (
    <div className="max-w-[1640px] m-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50  text-white rounded-3xl">
          <p className="font-Pro text-2xl px-2 pt-4 text-stone-200">
            Sun Out BOGO Out
          </p>
          <p className="px-2 text-stone-200 font-Pro"> Through 8/26</p>
          <Link href="/Menu">
            <button className="border-yellow-900  bg-white text-yellow-800 mx-2 absolute bottom-4 hover:bg-yellow-600 hover:text-gray-900 font-Pro">
              <span>
                <BsFillCartCheckFill size={25} className="ml-5" />
                Order Now
              </span>
            </button>
          </Link>
        </div>
        <Image
          className="max-h-[160px] md:max-h-[200px] object-cover rounded-3xl"
          src={Card1}
          alt="Image"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
          <p className="font-Pro text-2xl px-2 pt-4 text-stone-200">
            Cooked Noodles
          </p>
          <p className="px-2 text-stone-200 font-Pro">Meat and Meatballs</p>
          <Link href="/Menu">
            <button className="border-yellow-900 font-Pro  bg-white text-yellow-800 mx-2 absolute bottom-4 hover:bg-yellow-600 hover:text-gray-900">
              <span>
                <BsFillCartCheckFill size={25} className="ml-5" />
                Order Now
              </span>
            </button>
          </Link>
        </div>
        <Image
          className="max-h-[160px] md:max-h-[200px] object-cover rounded-3xl"
          src={Card2}
          alt="Image"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
          <p className="font-Pro text-2xl px-2 pt-4 text-stone-200">
            Garnish on White Plate
          </p>
          <p className="px-2 text-stone-200 font-Pro">
            Cooked Meat With Vegetable
          </p>
          <Link href="/Menu">
            <button className="border-yellow-900 font-Pro  bg-white text-yellow-800 mx-2 absolute bottom-4 hover:bg-yellow-600 hover:text-gray-900 text-end">
              <span>
                <BsFillCartCheckFill size={25} className="ml-5" />
                Order Now
              </span>
            </button>
          </Link>
        </div>
        <Image
          className="max-h-[160px] md:max-h-[200px] object-cover rounded-3xl "
          src={Card3}
          alt="Image"
        />
      </div>
    </div>
  );
}
