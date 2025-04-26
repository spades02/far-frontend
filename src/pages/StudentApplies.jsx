import ApplicationForm from "@/components/ApplicationForm";
import React from "react";

const StudentApplies = () => {
  return (
    <div className="m-10">
      <h1 className="text-2xl font-bold tracking-tighter lg:text-3xl">
        Send an Application
      </h1>
      <ApplicationForm />
    </div>
  );
};

export default StudentApplies;
