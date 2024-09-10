import React from "react";
import OffersCard from "../components/Cards/OffersCard";

export default function Board() {
  return (
    <div className="flex gap-10 py-10 flex-row flex-wrap justify-center">
      <OffersCard company="Store" place="Headphone" img="/headphone.jpg" description="The best"/>
      <OffersCard company="Store" place="Headphone" img="/headphone.jpg" description="The best"/>
      <OffersCard company="Store" place="Headphone" img="/headphone.jpg" description="The best"/>
      <OffersCard company="Store" place="Headphone" img="/headphone.jpg" description="The best"/>
      <OffersCard company="Store" place="Headphone" img="/headphone.jpg" description="The best"/>
      <OffersCard company="Store" place="Headphone" img="/headphone.jpg" description="The best"/>
    </div>
  );
}
