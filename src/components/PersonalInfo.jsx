import React from "react";
import { Badge } from "@/components/ui/badge";
import { CiLocationOn } from "react-icons/ci";
import { IoMdFemale } from "react-icons/io";
import { Separator } from "./ui/separator";

const PersonalInfo = () => {
  return (
    <>
      <div className="flex gap-48 items-start">
        <div className="gap-2 flex flex-col items-start">
          <div>
            {/* Fetch ratings from the database and display them here. You can use a
        star rating system or any other rating system you prefer. */}
            {[...Array(5)].map((_, index) => (
              <span key={index} style={{ cursor: "pointer", fontSize: "24px" }}>
                ★
              </span>
            ))}
          </div>
          {/* Fetch badges from the database and display them here. You can use a badge */}
          <div className="flex flex-wrap gap-2">
            <Badge className={"rounded-3xl"}>Research</Badge>
            <Badge className={"rounded-3xl"}>Observership</Badge>
            <Badge className={"rounded-3xl"}>Hands-on</Badge>
          </div>
          <a href="/" className="underline flex items-center text-lg">
            <CiLocationOn /> House # X, St 123, Ave
          </a>
          <span>Student Type</span>
          <span className="font-bold">Pre Med</span>
          <span className="font-semibold text-gray-700 flex items-center">
            <IoMdFemale /> Female
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col gap-2">
            <span className="font-light">Email</span>
            <span className="font-bold">mymail@gmail.com</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-light">Phone</span>
            <span className="font-bold">+1 223 4567 890</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-light">Citizenship</span>
            <span className="font-bold">USA</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-light">Visa Status</span>
            <span className="font-bold">Need Visa</span>
          </div>
        </div>
      </div>
      <Separator className={"my-4"} />
      <div className="mb-8 mr-16">
        <h1 className="font-bold">About me</h1>
        <span>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id mi
          feugiat, euismod ex ac, cursus urna. Etiam in eleifend leo. Integer
          sagittis tincidunt metus a vestibulum. Integer pretium turpis a sapien
          accumsan, vitae placerat justo tempor. Pellentesque condimentum, nisl
          dictum hendrerit vehicula, orci massa interdum orci, lobortis mollis
          eros massa ac metus. Mauris vel malesuada magna. Fusce sodales metus
          et velit elementum, eu efficitur justo ultrices. Integer ut ipsum
          ultricies, tincidunt dui id, vulputate turpis. Proin a ligula gravida,
          venenatis mauris vitae, molestie velit. Vestibulum vel tellus ipsum.
          Duis a ipsum vitae sapien viverra faucibus at vitae ipsum
        </span>
      </div>
    </>
  );
};

export default PersonalInfo;
