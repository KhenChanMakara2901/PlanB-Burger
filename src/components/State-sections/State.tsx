"use client";
import React from "react";
import CountUp from "react-countup";

export default function State() {
  return (
    <div className="max-w-[1640px] px-4 py-1">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className=" mx-auto max-w-3xl text-left">
            <h2 className="text-3xl font-Pro text-white sm:text-4xl">
              Reciept Today 💬 <br />
              <span className="text-yellow-500 text-4xl font-Pro">
                𖦹 IN RESTAURENTS 𖦹
              </span>
            </h2>
          </div>
          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-3xl bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-Pro text-gray-500">
                  Receipts <br /> we have
                </dt>
                <dd className="text-4xl font-Pro text-gray-900 md:text-5xl">
                  <CountUp end={60} duration={2} />+
                </dd>
              </div>
              <div className="flex flex-col rounded-3xl bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-Pro text-gray-500">
                  Order was Delivered
                </dt>
                <dd className="text-4xl font-Pro text-gray-900 md:text-5xl">
                  <CountUp end={500} duration={2} />+
                </dd>
              </div>
              <div className="flex flex-col rounded-3xl bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-Pro text-gray-500">
                  Natural Product <br /> we use
                </dt>
                <dd className="text-4xl font-Pro text-gray-900 md:text-5xl">
                  <CountUp end={200} duration={2} />+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
