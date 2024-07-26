"use client";
import React from "react";
import Image from "next/image";
import Avatar1 from "@/public/Avatar/Avatar1.png";
import Avatar2 from "@/public/Avatar/Avatar2.png";
import Avatar3 from "@/public/Avatar/Avatar3.png";
import Avatar4 from "@/public/Avatar/Avatar4.png";

export default function Team() {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <section>
        <div className="container px-6 py-8 mx-auto">
          <h2 className="text-2xl font-abc text-left capitalize lg:text-3xl dark:text-neutral-100">
            Our Dynamic
            <span className="text-yellow-500 underline underline-offset-8 text-4xl">
              Fast Food Team
            </span>
          </h2>
          <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="w-full max-w-xs text-center">
              <Image
                className="object-cover object-center mx-auto rounded-2xl"
                src={Avatar1}
                alt="avatar"
              />
              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 font-Pro">
                  Sarah Johnson
                </h3>
                <span className="mt-1 font-medium text-gray-600 dark:text-yellow-600 font-Pro">
                  Waiter
                </span>
              </div>
            </div>
            <div className="w-full max-w-xs text-center">
              <Image
                className="object-cover object-center mx-auto rounded-2xl"
                src={Avatar2}
                alt="avatar"
              />
              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 font-Pro">
                  Ethan Rodriguez
                </h3>
                <span className="mt-1 font-medium text-gray-600 dark:text-yellow-600 font-Pro">
                  Head Chef
                </span>
              </div>
            </div>
            <div className="w-full max-w-xs text-center">
              <Image
                className="object-cover object-center mx-auto rounded-2xl"
                src={Avatar3}
                alt="avatar"
              />
              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 font-Pro">
                  Emily Brooks
                </h3>
                <span className="mt-1 font-medium text-gray-600 dark:text-yellow-600 font-Pro">
                  Fry Chef
                </span>
              </div>
            </div>
            <div className="w-full max-w-xs text-center">
              <Image
                className="object-cover object-center mx-auto rounded-2xl"
                src={Avatar4}
                alt="avatar"
              />
              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 font-Pro">
                  Megan Robinson
                </h3>
                <span className="mt-1 font-medium text-gray-600 dark:text-yellow-600 font-Pro">
                  Barista
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
