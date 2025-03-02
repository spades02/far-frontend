import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePickerWithRange } from "./DatePicker"
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";

const CarouselSearch = () => {
  return (
    <div className='relative overflow-hidden mx-auto w-full max-w-4xl flex md:hidden justify-center py-4'>
        <Carousel className={"w-full"}>
        <CarouselContent>
            <CarouselItem className={"place-items-center"}>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="location">Location</Label>
                    <Input type="location" id="location" placeholder="Where is your rotation?" />
                </div>
            </CarouselItem>
            <CarouselItem className={"place-items-center basis-full"}>
            <div className="grid max-w-sm items-center gap-1.5">
                <Label htmlFor="rotationDates">Rotation Dates</Label>
                <DatePickerWithRange />
            </div>
            </CarouselItem>
            <CarouselItem className={"place-items-center basis-full"}>
            <div className='flex gap-2'>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="rotationType">Rotation Type</Label>
                <Input type='text' id = "rotationType" placeholder = "All" />
            </div>
            <Button className="bg-blue-500 w-1/3 hover:bg-blue-600 text-white px-2 rounded-md place-self-end"><CiSearch /></Button>
            </div>
            </CarouselItem>
          </CarouselContent>
            <CarouselPrevious className={"left-2"} />
            <CarouselNext className={"right-2"} />
        </Carousel>

    </div>
  )
}

export default CarouselSearch