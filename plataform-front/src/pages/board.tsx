import React from "react";

export default function Board() {
  return (
    <div className="flex flex-wrap container p-10 mx-auto">
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-600 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
            Analytic Tools
          </h1>
          <p className="py-8 text-xl text-gray-500 lg:text-xl xl:text-2xl ">
            Imagine a platform that allows companies and researchers to monitor in real time
            what people are saying about their brands, products or services on social media. <br /><br />
            This platform analyzes large volumes of data from various platforms,
            such as Twitter, Instagram and Facebook, extracting great insights
            into public perception and identifying trends and sentiments.
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
              href=""
              className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="">
          <img
            src="/img/hero.png"
            className="mb-3 rounded-xl w-[616px] max-h-[616px]"
          />
        </div>
      </div>
      
    </div>

  );
}
