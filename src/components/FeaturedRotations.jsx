import React from "react";
import programs from "@/data/programs";
import { Link } from "react-router-dom";

const FeaturedRotations = () => {
  return (
    <div className="m-4">
      <h1 className="font-bold text-lg">Featured Rotations</h1>
      <div className="grid grid-cols-2 gap-4">
        {programs.map((program, index) => (
          <Link to={`/listing`}>
            <img
              className="aspect-3/2"
              src={program.image}
              alt="featured rotations"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRotations;
