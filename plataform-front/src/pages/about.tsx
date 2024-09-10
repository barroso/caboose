import React, { useEffect } from "react";
import ApiCaller from "../clients/about";

export default function About() {
  
  useEffect(() => {
    console.log("Call service...");
    const apiCaller = new ApiCaller();
    apiCaller.getAbout();
  }, []);

  
  return (
    <div className="flex gap-10 py-10 flex-row flex-wrap justify-center">
      About...
    </div>
  );
}
