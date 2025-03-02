import React from 'react'
import locations from '../data/locations'

const ClinicalRotations = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Find Clinical Rotations in</h2>
      <div className="border p-4 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {locations.map((location, index) => (
            <a
              key={index}
              href="#"
              className="block text-gray-800 hover:text-blue-600 transition duration-300"
            >
              <span className="font-medium">{location.city}</span>
              <br />
              <span className="text-sm text-gray-600">{location.state}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
    )
}

export default ClinicalRotations