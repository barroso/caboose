import React from "react";

interface IProps {
  company: string;
  place: string;
  description: string;
  img: string;
}

export default function OffersCard({ company, place, description, img }: IProps) {
  return (
    <div className="rounded-[20px] max-w-[300px] bg-clip-border shadow-3xl shadow-shadow-500 w-full p-4 bg-gray-100 hover:bg-gray-200 cursor-pointer">
      <div className="basis-1/3 flex-1 ">
        <div>
          <img
            src={img}
            className="mb-3 rounded-xl w-[30px] max-h-[30px]"
          />
        </div>
        <div className="mb-3 flex items-center justify-between px-1 md:items-start">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700">{company}</p>
            <p className="text-sm font-medium text-gray-500">{place}</p>
            <p className="text-sm font-medium text-gray-600 ">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );;
}
