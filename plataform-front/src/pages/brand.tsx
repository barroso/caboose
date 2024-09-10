import React, { useEffect, useState } from "react";
import ApiCaller from "../clients/brand";
import Table from "../components/Table/Table";

const BrandsList = () => {
  const [brands, setBrands] = useState([]);

  const getBrands = async () => {
    const data = await new ApiCaller().getBrands();
    setBrands(data);
  };

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <div className="flex gap-10 py-10 flex-row flex-wrap justify-center">
      <Table brands={brands}/>
    </div>
  );
};

export default BrandsList;