import React from "react";
import { Outlet } from "react-router";
import SecondHeader from "../Navbar/SecondHeader";

const RootTwo = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <div className="sticky top-0 z-10">
        <SecondHeader />
      </div>
      <div className="dark:bg-gray-900 ">
        <Outlet />
      </div>
    </div>
  );
};

export default RootTwo;
