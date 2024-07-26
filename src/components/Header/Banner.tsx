"use client";
import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
export default function banner() {
  return (
    <div className="relative flex items-center gap-x-6 overflow-hidden bg-gray-950 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-white animate-slide-in">
          <strong className="font-Logo text-white">
            Plan B Burger Drink and Food
          </strong>
          Plan B Burger Reward member! Get 10% bonus 29th–30th June! Coming
          soon...
        </p>
        <Link
          href="/Menu"
          className="flex-none rounded-full bg-white px-3.5 py-1 text-sm font-semibold text-yellow-800 shadow-sm  hover:scale-110 border-yellow-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Discount now!! <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
