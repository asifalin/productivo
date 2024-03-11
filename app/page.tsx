import Login from "@/Components/Login/Login";
import Dashbord from "./Dashbord/page";
import React from "react";

function page() {
  return (
    <>
      <div className="flex">
        <div className="bg-[#FFFFFF] w-full">
          <Dashbord />
         
        </div>
      </div>
    </>
  );
}

export default page;
