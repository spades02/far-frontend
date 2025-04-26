import React from "react";
import UserReview from "./UserReview";
import sampleReviews from "../constants/sampleReview"; // Adjust the path as necessary

const Testimonials = () => {
  return (
    <div>
      {sampleReviews.map((sampleReviews, index) => (
        <UserReview key={index} review={sampleReviews} />
      ))}
    </div>
  );
};

export default Testimonials;
