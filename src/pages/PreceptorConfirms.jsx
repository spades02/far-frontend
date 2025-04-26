import React from "react";
import dp from "@/../public/dp.webp";
import { FaRegEye } from "react-icons/fa";
import { Button } from "../components/ui/button";

const PreceptorConfirms = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tighter lg:text-3xl m-4">
        Review Student Application
      </h1>
      <div class="grid grid-flow-col grid-rows-3 gap-8 max-w-2xs m-4">
        <div class="row-span-3">
          <img src={dp} alt="dp" />
        </div>
        <div class="col-span-2">
          <h1>John Smith</h1>
        </div>
        <div class="col-span-2 row-span-2">
          <a
            href="/student_profile"
            class="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-700"
          >
            <FaRegEye /> View Full Profile
          </a>
        </div>
      </div>
      <h1 className="text-lg font-bold tracking-tighter lg:text-xl m-4">
        Past Rotations
      </h1>
      {/* use .map() function here when data is available */}
      <div className="p-3 bg-gray-100 border-1 w-1/3 m-4">
        <h1 className="font-bold">Psychiatry</h1>
        <h1>June 01 - June 14, 2021</h1>
      </div>

      <h1 className="text-lg font-bold tracking-tighter lg:text-xl m-4">
        Documents Submitted
      </h1>
      {/* use .map() function here when data is available */}
      <div className="grid grid-cols-3 gap-4 m-4">
        <div className="p-7 bg-gray-100 border-1 w-1/3 text-center">
          <img src="./pdf-icon.svg" alt="pdf" />
          <h1>file-name.pdf</h1>
        </div>
      </div>
      <h1 className="text-lg font-bold tracking-tighter lg:text-xl m-4">
        Reviews
      </h1>
      {/* use .map() function here when data is available */}
      <div className=" flex items-center m-4 gap-4">
        <img src={dp} alt="dp" width={80} className="rounded-full max-w-3xs" />
        <h1 className="font-bold">John Smith, MD</h1>
        <h1 className="text-sm">Great Student, he was very attentive</h1>
      </div>
      <div className="flex justify-between m-4 mt-8 mr-56">
        <Button type="button" variant="outline">
          Reject Application
        </Button>
        <Button type="submit">Accept Application & Send Offer</Button>
      </div>
    </div>
  );
};

export default PreceptorConfirms;
