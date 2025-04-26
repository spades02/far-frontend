import React from "react";

const UserReview = ({ review }) => {
  const {
    name,
    profilePic,
    location,
    date,
    rating,
    review: reviewText,
  } = review;

  return (
    <div className="flex gap-4 mb-6">
      <div>
        <img
          src={profilePic}
          alt="pfp"
          className="h-12 w-12 rounded-full object-cover"
        />
      </div>
      <div className="grid grid-cols-6 gap-2 w-full mr-8">
        <div className="col-span-5 flex flex-col">
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="text-gray-500">
            From: <span className="underline">{location}</span>
          </p>
        </div>
        <div className="text-sm text-gray-400 text-right">{date}</div>
        <div className="col-span-6 p-4 bg-gray-100 rounded-lg">
          {/* Star Rating */}
          <div className="mb-2">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-xl ${
                  i < rating ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <p className="text-gray-800">{reviewText}</p>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
