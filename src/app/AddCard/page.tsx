"use client";
import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <div className="max-w-[1640px] px-4 py-1">
      <section className="bg-white py-8 antialiased md:py-16 rounded-3xl">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 animate-slide-in">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-Pro text-gray-950 sm:text-2xl">
              Payment
            </h2>
            <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
              <form
                action="#"
                className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-950 sm:p-6 lg:max-w-xl lg:p-8"
              >
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                      Full name (as displayed on card)*
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                      placeholder="Your Card name"
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                      Card number*
                    </label>
                    <input
                      type="text"
                      id="card-number-input"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                      pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white">
                      Card expiration*
                    </label>
                    <div className="relative">
                      <input
                        datepicker-format="mm/yy"
                        id="card-expiration-input"
                        type="text"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="12/23"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white">
                      CVV*
                      <div
                        id="cvv-desc"
                        role="tooltip"
                        className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                      >
                        The last 3 digits on back of card
                        <div className="tooltip-arrow" data-popper-arrow></div>
                      </div>
                    </label>
                    <input
                      type="number"
                      id="cvv-input"
                      aria-describedby="helper-text-explanation"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                      placeholder="•••"
                      required
                    />
                  </div>
                </div>
                <Link href="/Menu">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-3xl bg-yellow-500  px-5 py-2.5 text-sm font-Pro text-white hover:bg-blue-600"
                  >
                    Pay now
                  </button>
                </Link>
              </form>
              <div className="mt-6 grow sm:mt-8 lg:mt-0">
                <div className="space-y-4 rounded-lg border border-gray-100 p-6 dark:border-gray-700 bg-gray-950">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-Pro text-gray-500 dark:text-white">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        $$$$
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-Pro text-gray-500 dark:text-white">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-500">
                        -$$$$
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-Pro text-gray-500 dark:text-white">
                        Store Pickup
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        $$$$
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-Pro text-gray-500 dark:text-white">
                        Tax
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        $$$$
                      </dd>
                    </dl>
                  </div>
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-Pro text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      $$$$
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-gray-900 dark:text-gray-900 sm:mt-8 lg:text-left">
              Create And Schoolarship By
              <a
                target="-blank"
                href="https://nextjs.org/"
                className="font-Pro underline hover:text-black"
              >
                Next Js
              </a>
              and
              <a
                target="-blank"
                href="https://t.me/khmercodeacademy"
                className="font-Pro underline hover:text-black"
              >
                Khmer Code Academy
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
