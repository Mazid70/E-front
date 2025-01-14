import React from "react";
import { CiUser } from "react-icons/ci";
import { PiTruckLight } from "react-icons/pi";
const Navone = () => {
  return (
    <header className="bg-[#F9F9F9] border-b-1 border">
      <nav className="flex items-center justify-between w-full lg:w-[60%] mx-auto h-12 ">
        <div className="text-sm">Telephone Enquiry +8801282</div>
        <div className="list-none flex justify-between gap-4">
          <li className="flex items-center gap-2 text-sm"> <PiTruckLight className="text-lg"/>Track Your order</li>
          <div className="h-4 w-[1px] bg-gray-400 mt-1"></div>
          <li className="flex items-center gap-2 text-sm"> <CiUser className="text-lg"/>My account</li>
        </div>
      </nav>
    </header>
  );
};

export default Navone;
