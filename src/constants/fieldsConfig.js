export const fieldsConfig = {
    rotationType: { label: "Rotation Type", type: "select", options: ["Inpatient", "Outpatient"] },
    specialty: { label: "Specialty", type: "select", options: ["Cardiology", "Dermatology", "Pediatrics"] },
    studentType: { label: "Student Type", type: "select", options: ["Nursing", "Medical", "Pharmacy"] },
    numberOfSeats: { label: "Number of Seats", type: "number" },
    rotationPrice: { label: "Rotation Price", type: "number" },
    rotationLength: { label: "Rotation Length (Weeks)", type: "number" },
    rotationStartDate: { label: "Rotation Start Date", type: "date" },
    clinicalSetting: { label: "Clinical Setting", type: "select", options: ["Hospital", "Clinic"] },
  
    locationName: { label: "Location Name", type: "text" },
    licenseNumber: { label: "License Number", type: "text" },
    phoneNumber: { label: "Phone Number", type: "text" },
    businessAddress: { label: "Business Address", type: "text" },
    isACGMEAccredited: { label: "ACGME Accredited", type: "select", options: ["Yes", "No", "Not Applicable"] },
  
    photos: { label: "Upload Photos", type: "file" },
  
    description: { label: "Rotation Description", type: "textarea" },
    studentExpectations: { label: "Student Expectations", type: "textarea" },
  
    requirements: { label: "Required Documents", type: "checkbox", options: ["CV", "Transcript", "Vaccination", "Background Check"] },
  
    cancellationPolicy: { label: "Cancellation Policy", type: "radio", options: ["Soft", "Medium", "Firm", "Hard"] },
  
    addWelcomeDocuments: { label: "Include Welcome Documents?", type: "switch" },
  };
  