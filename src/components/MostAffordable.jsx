import React from 'react'
import programs from '@/data/programs'
import { Link } from 'react-router-dom'

const MostAffordable = () => {
  return (
    <div className='m-4'>
        <h1 className='font-bold text-lg'>Most Affordable</h1>
        <div className='grid grid-cols-2 gap-4'>
        {programs.map((program, index) => (
            <Link to={`/programs/${index}`}>
            <img className='aspect-3/2' src={program.image} alt='most affordable' />
            </Link>
        ))}
        </div>
    </div>
  )
}

export default MostAffordable