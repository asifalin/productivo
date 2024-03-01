"use client"
import React from "react";
import Navbar from "./Navbar";
import Head from "./Head";
import Product from "../product/product";
import Linechart from "./Linechart";

function Dashbord() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1>Dashbord</h1>
        <Navbar />
      </div>

      <div className="bg-gray-300 py-5">
        <Head />

        <div className="mt-10 bg-white">
          <h1 className="px-8">Product lunch</h1>
          <Product />

        </div>
      </div>
      <div>
        <Linechart />
      </div>
    </div>
  );
}

export default Dashbord;