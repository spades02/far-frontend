import React from "react";
import dp from "../../public/dp.webp"; // Adjust the path as necessary
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";
import PersonalInfo from "@/components/PersonalInfo";
import Testimonials from "@/components/Testimonials";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const ProfilePageStructure = () => {
  const [selectedItem, setSelectedItem] = React.useState("personal_info");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/edit_profile");
  };

  return (
    <div className="grid grid-cols-3 h-auto rounded-lg bg-white">
      <div className="col-span-1 flex justify-center items-start pl-24 pt-24">
        <img
          src={dp}
          alt="dp"
          height={"150px"}
          width={"150px"}
          className="rounded-full border-2 border-gray-300"
        />
      </div>
      <div className="col-span-2 flex flex-col items-start pt-24">
        <div className="flex gap-2 justify-between items-center w-full pr-24">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Student Name</h1>
            <p className="text-gray-600">Pre-Medical</p>
          </div>
          <div>
            <Button onClick={handleClick}>Edit Profile</Button>
          </div>
        </div>
        <ToggleGroup
          type="single"
          size={"lg"}
          className="mt-4 bg-gray-200 rounded-lg"
          value={selectedItem}
          onValueChange={(value) => {
            if (value) setSelectedItem(value);
          }}
        >
          <ToggleGroupItem
            value="personal_info"
            className={`text-2xl ${
              selectedItem === "personal_info"
                ? "underline underline-offset-8 font-bold border-2 border-gray-700"
                : ""
            }`}
          >
            Personal Info
          </ToggleGroupItem>
          <ToggleGroupItem
            value="testimonials"
            className={`text-2xl ${
              selectedItem === "testimonials"
                ? "underline underline-offset-8 font-bold border-2 border-gray-700"
                : ""
            }`}
          >
            Testimonials
          </ToggleGroupItem>
        </ToggleGroup>
        <Separator className="mb-4" />
        <div className="mt-4">
          {selectedItem === "personal_info" && <PersonalInfo />}
          {selectedItem === "testimonials" && <Testimonials />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePageStructure;
