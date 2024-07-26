"use client";
import React from "react";
import Image from "next/image";
import Chef from "@/public/Service/Chef.png";
import Quality from "@/public/Service/Quality.png";
import Online from "@/public/Service/Online.png";
import Support from "@/public/Service/Support.png";
import Birthday from "@/public/Service/Birthday.png";
import Logo from "@/src/components/LogoCloud/Logo";
import Category from "@/src/components/CategoryCard/Category";

export default function page() {
  return (
    <div className="max-w-[1640px] px-4 py-1">
      <section className="ml-10">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center animate-slide-in">
          <h1 className="text-3xl font-Pro text-yellow-500">— Our Service —</h1>
          <h2 className="text-5xl font-Pro text-white">
            •Explore Our Services•
          </h2>
        </div>
        <div className="flex flex-wrap mx-auto md:flex-nowrap  p-12 animate-slide-in">
          <a href="/">
            <div className="flex w-full">
              <div className="relative flex flex-col items-center m-1 transition duration-300 ease-in-out delay-150 transform bg-gray-950 shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <Image
                  className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                  src={Chef}
                  alt="Service"
                />
                <div className="px-6 py-8">
                  <h4 className="mt-4 text-2xl font-semibold text-yellow-500">
                    <span className="font-Pro">Master Chefs</span>
                  </h4>
                  <p className="mt-4 text-base font-Pro text-white leading-relax">
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="/">
            <div className="flex w-full">
              <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-gray-950 shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <Image
                  className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                  src={Quality}
                  alt="Service"
                />
                <div className="px-6 py-8">
                  <h4 className="mt-4 text-2xl font-Pro text-yellow-500">
                    <span>Quality Food</span>
                  </h4>
                  <p className="mt-4 text-base font-Pro text-white leading-relax">
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="/">
            <div className="flex w-full">
              <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-gray-950 shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <Image
                  className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                  src={Online}
                  alt="Image"
                />
                <div className="px-6 py-8">
                  <h4 className="mt-4 text-2xl font-semibold text-yellow-500">
                    <span className="font-Pro">Online Order</span>
                  </h4>
                  <p className="mt-4 text-base font-Pro text-white leading-relax">
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="/">
            <div className="flex w-full">
              <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-gray-950 shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <Image
                  className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                  src={Support}
                  alt="Image"
                />
                <div className="px-6 py-8">
                  <h4 className="mt-4 text-2xl font-Pro text-yellow-500">
                    <span>24/7 Service</span>
                  </h4>
                  <p className="mt-4 text-base font-Pro text-white leading-relax">
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="/">
            <div className="flex w-full">
              <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-gray-950 shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <Image
                  className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                  src={Birthday}
                  alt="Image"
                />
                <div className="px-6 py-8">
                  <h4 className="mt-4 text-2xl font-Pro text-yellow-500">
                    <span>Birthday Catering</span>
                  </h4>
                  <p className="mt-4 text-base font-Pro text-white leading-relax">
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
      <Category />
      <Logo />
    </div>
  );
}
