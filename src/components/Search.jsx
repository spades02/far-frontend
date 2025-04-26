import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { DatePickerWithRange } from "./DatePicker";
// import { DatePickerWithRange } from "./DatePicker"
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";

const Search = () => {
  const navigateToResults = () => {
    window.location.href = "/results";
  };

  return (
    <div className="hidden md:flex justify-center py-4 gap-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="location">Location</Label>
        <Input
          type="location"
          id="location"
          placeholder="Where is your rotation?"
        />
      </div>
      <div className="grid max-w-sm items-center gap-1.5">
        <Label htmlFor="rotationDates">Rotation Dates</Label>
        <DatePickerWithRange />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="rotationType">Rotation Type</Label>
        <Input type="text" id="rotationType" placeholder="All" />
      </div>
      <Button
        onClick={navigateToResults}
        className="bg-blue-500 hover:cursor-pointer hover:bg-blue-600 text-white p-2 rounded-md place-self-end"
      >
        <CiSearch /> Search
      </Button>
    </div>
  );
};

export default Search;
