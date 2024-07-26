"use cleint";
import React from "react";
export default function page() {
  return (
    <div className="max-w-[1640px] px-4 py-2">
      <section className="rounded-3xl">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center animate-slide-in">
            <h1 className="text-5xl font-Pro text-yellow-500">
              ⤵ Contact Us ⤵
            </h1>
            <h2 className="text-3xl font-Pro text-yellow-500">
              ⚲ Visit Our Location ⚲
            </h2>
            <p className="mt-4 text-lg font-Pro text-white">
              ☼ Contact For Any Query ☼
            </p>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden animate-slide-in">
                <iframe
                  className="border border-x-white rounded-3xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                  width="100%"
                  height="480"
                  loading="lazy"
                ></iframe>
              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-Pro text-yellow-500">
                      Our Address
                    </h3>
                    <p className="mt-1 text-white font-Pro">
                      1St No. 1003 Village Bayarb, Commune Phnom Penh Thmey,
                      Khan Sen sok, Phnom Penh, Cambodia
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-Pro text-yellow-500">Hours</h3>
                    <p className="mt-1 text-white font-Pro">
                      Monday - Saturday
                    </p>
                    <p className="mt-1 text-white font-Pro">09AM - 09PM</p>
                    <p className="mt-1 text-white font-Pro">Sunday</p>
                    <p className="mt-1 text-white font-Pro">10AM - 9PM</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-Pro text-yellow-500">
                      Contact
                    </h3>
                    <p className="mt-1 font-Pro text-white">
                      📧 Email: khenchannmakara@gmail.com
                    </p>
                    <p className="mt-1 font-Pro text-Pro text-white">
                      ☎︎ Phone: (+855) 71 325 9328
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
