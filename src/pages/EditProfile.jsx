import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React, { useState } from "react";
import EditStudentProfile from "../components/EditStudentProfile";
import { Button } from "@/components/ui/button";
import EditPreceptorProfile from "../components/EditPreceptorProfile";
import Documents from "@/components/Documents";

const EditProfile = () => {
  const [role, setRole] = useState("student");
  const [selectedItem, setSelectedItem] = React.useState("profile");
  const handleButtonClick = () => {
    setRole((prevRole) => (prevRole === "student" ? "preceptor" : "student"));
  };
  return (
    <div className="flex flex-col place-self-center items-start justify-center p-24">
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-bold tracking-tighter lg:text-3xl m-4">
          Edit Profile
        </h1>
        <Button onClick={handleButtonClick}>Change role</Button>
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
          value="profile"
          className={`text-2xl ${
            selectedItem === "profile"
              ? "underline underline-offset-8 font-bold border-2 border-gray-700"
              : ""
          }`}
        >
          Profile
        </ToggleGroupItem>
        <ToggleGroupItem
          value="documents"
          className={`text-2xl px-8 ${
            selectedItem === "documents"
              ? "underline underline-offset-8 font-bold border-2 border-gray-700"
              : ""
          }`}
        >
          Documents
        </ToggleGroupItem>
      </ToggleGroup>
      <Separator className="mb-4" />
      <div className="mt-4">
        {selectedItem === "profile" &&
          (role === "student" ? (
            <EditStudentProfile />
          ) : role === "preceptor" ? (
            <EditPreceptorProfile />
          ) : null)}
        {selectedItem === "documents" && <Documents />}
      </div>
    </div>
  );
};

export default EditProfile;
