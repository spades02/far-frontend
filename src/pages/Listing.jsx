import React from "react";
import photo from "../../public/cover1.png";
import dp from "../../public/dp.webp";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LocationMap from "@/components/LocationMap";
import { Link, useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { IoStarOutline } from "react-icons/io5";
import { RiShare2Fill, RiShare2Line } from "react-icons/ri";

const Listing = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <img
          src={photo}
          alt="listing"
          className="relative w-full h-80 object-cover"
        />
        <Card
          className={
            "absolute flex sm:w-6/8 w-7/8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-7/8 lg:top-1/4 lg:translate-y-1/6 shadow-lg"
          }
        >
          <img
            src={dp}
            alt="profile photo"
            className="rounded-l-lg max-h-36 h-full max-w-36 sm:max-w-40 w-full"
          />
          <CardContent className={"m-4"}>
            <h1 className="text-lg font-bold">Johnson Family Medicine</h1>
            <p>John Smith, M.D. | Psychiatry</p>
            {/* <p>ratings</p>   to be implemented later with 5 stars */}
          </CardContent>
        </Card>
        <div className="absolute flex justify-between w-1/8 right-1 top-1/20 -translate-y-1/2">
          <div className="font-bold justify-items-center hover:bg-gray-200 hover:opacity-70 p-2 rounded-lg hover:cursor-pointer">
            <RiShare2Fill />
            Share
          </div>
          <div className="font-bold justify-items-center hover:bg-gray-200 hover:opacity-70 p-2 rounded-lg hover:cursor-pointer">
            <IoStarOutline />
            Add to Favorites
          </div>
        </div>
      </div>
      <div className="lg:flex mt-40 md:mt-36 m-8">
        <div className="flex flex-col mr-48 gap-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            purus sit amet nunc fermentum ultricies. Sed at tellus sed nunc
            tincidunt, euismod erat vel, tincidunt libero. Vivamus vel
            scelerisque ligula. Donec non magna nec elit tincidunt vestibulum.
          </p>
          <p>
            <h1 className="font-bold">Expectations</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec purus sit amet nunc fermentum ultricies. Sed at tellus sed
              nunc tincidunt, euismod erat vel, tincidunt libero. Vivamus vel
              scelerisque ligula. Donec non magna nec elit tincidunt vestibulum.
            </p>
          </p>
          <div>
            <h1 className="font-bold">Location</h1>
            <p>452 Linoln St, Chicago, IL</p>
            <LocationMap
              latitude={41.8781}
              longitude={-87.6298}
              locationName="Chicago, IL"
            />
          </div>

          <Card className={"flex pt-4 md:w-1/2"}>
            <CardHeader>
              <img
                src={dp}
                alt="profile picture"
                className="rounded-full max-h-18 max-w-18"
              />
            </CardHeader>
            <CardContent className={"flex flex-col gap-2"}>
              <CardTitle>About Dr. John Smith</CardTitle>
              <CardDescription>
                Dr. John Smith is a board-certified psychiatrist with over 20
                years of experience in the field. He specializes in treating
                anxiety, depression, and other mental health conditions.
              </CardDescription>
              <CardFooter className={"justify-end"}>
                <Link
                  className="text-blue-600 underline"
                  to={"/student_profile"}
                >
                  View Full Profile
                </Link>
              </CardFooter>
            </CardContent>
          </Card>
          <h1 className="font-bold">
            You must complete these in order to reserve:
          </h1>
          <Card className={"w-1/4"}>
            <CardContent className={"mt-2"}>
              <p>Updated CV or Resume</p>
              <p>Cover Letter</p>
              <p>Vaccination Records</p>
            </CardContent>
          </Card>
          <Separator />
        </div>
        <Card className={"w-1/3 h-96 grow"}>
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>4,099$</CardTitle>
              <CardDescription>
                <Badge variant="outline">4 weeks</Badge>
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className={"flex flex-col w-full gap-2"}>
            <p>3 Seats Available</p>
            <ToggleGroup
              className={"flex-col gap-2"}
              type="single"
              variant={"outline"}
            >
              <ToggleGroupItem value="a" aria-label="Toggle rotate">
                <div className="p-2 rounded-lg w-80">
                  30/09/2022 - 10/10/2022
                </div>
              </ToggleGroupItem>
              <ToggleGroupItem value="b" aria-label="Toggle rotation">
                <div className="p-2 rounded-lg w-80">
                  30/09/2022 - 10/10/2022
                </div>
              </ToggleGroupItem>
              <ToggleGroupItem value="c" aria-label="Toggle rotacion">
                <div className="p-2 rounded-lg w-80">
                  30/09/2022 - 10/10/2022
                </div>
              </ToggleGroupItem>
            </ToggleGroup>
            <Button>See all...</Button>
            <Separator className={"my-2"} />
            <Button
              onClick={() => {
                navigate("/student_applies");
              }}
              className=""
            >
              Apply Now
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-between m-8">
        <div>
          <h1 className="font-bold">Cancellation policy</h1>
          <ul className="list-disc list-inside">
            <li>100% refund</li>
            <li>50% refund</li>
          </ul>
        </div>
        <Link className="place-self-end" to={"./"}>
          Report Listing
        </Link>
      </div>
    </>
  );
};

export default Listing;
