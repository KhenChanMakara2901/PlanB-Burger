"use client";
import React from "react";
import Image from "next/image";
import Customer from "@/public/Customer/Customer.png";
export default function Testimonials() {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <section className="bg-white dark:bg-gray-950 rounded-3xl">
        <div className="relative flex">
          <div className="min-h-screen lg:w-1/3"> </div>
          <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-neutral-900 lg:block"></div>
          <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 className="text-2xl font-Text text-gray-800 capitalize lg:text-3xl dark:text-yellow-400">
              What our <span className="text-white">customers </span> <br />
              are saying
            </h1>
            <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
              <Image
                className="object-cover object-center lg:w-[32rem] rounded-3xl"
                src={Customer}
                alt="Image"
              />
              <div className="mt-8 lg:px-10 lg:mt-0">
                <h1 className="text-2xl font-Pro text-gray-800 dark:text-yellow-500 lg:w-72">
                  Good Food Quality:
                </h1>
                <p className="max-w-lg mt-6 text-white font-Pro">
                  Customers expect the food to be delicious, fresh, and
                  well-prepared. <br /> The taste, presentation, and quality of
                  ingredients are all important factors.
                </p>
                <h3 className="mt-6 text-lg font-Pro text-yellow-600">Guest</h3>
                <p className="text-white font-Pro">
                  a specific segment of the larger dining market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
