import React from 'react'
import programs from '@/data/programs'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import {Link} from "react-router-dom"
  import { ImLocation2 } from "react-icons/im";

  

const ExploreNearMe = () => {
  return (
    <div className='m-4'>
        <h1 className='font-bold text-lg'>Explore Near Me</h1>
        <Carousel>
        <CarouselContent>
        {programs.map((program, index) => (
          <CarouselItem key={index} className="p-4 md:basis-1/3 select-none">
            <Link to={`/programs/${index}`} className="block">
            <div className="border rounded-lg p-4 shadow-lg">
              <img 
                src={program.image} 
                alt={program.title} 
                width={200} 
                height={150} 
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{program.title}</h3>
              <p className="text-gray-500 text-sm flex gap-2"><ImLocation2/ >{program.location}</p>
              <div className='flex justify-between items-center'>
              <span className="bg-purple-200 text-purple-700 px-2 py-1 text-xs rounded-md mt-2 inline-block">
                {program.badgeTitle}
              </span>
              <p className="text-xl font-bold mt-2">{program.price}</p>
              </div>
            </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
        </Carousel>
    </div>
  )
}

export default ExploreNearMe