import React from "react";
import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md mb-10">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldnt find this page.{" "}
          </p>
          <p className="mb-8">
            But dont worry.
          </p>

          <a href="/" className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
            back to homepage
          </a>
        </div>
        <div className="max-w-lg mx-20">
          <img src="./public/automobile.jpeg" className="rounded-2xl shadow-lg"/>
        </div>
      </div>
    </div>
  );
}
