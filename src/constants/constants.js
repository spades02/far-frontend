export const rotationTypes = [
    "Inpatient", "Observership", "Outpatient", "Shadowing", "Telemedicine", "Research"
  ];

export const specialties = [
    "Abdominal Surgery", "Cardiology", "Dermatology", "Pediatrics"
];

export const studentTypes = [
    "Premed", "Medical", "Nursing (RN, LPN)", "Nurse Practitioner",
    "Physician Assistant", "Dentistry", "Pharmacy", "Physical Therapy",
    "Occupational Therapy", "Registered Dietitian", "Podiatric Medicine", "Other"
  ];


export  const defaultValues = {
    rotationType: "",
    specialty: "",
    studentType: "",
    numberOfSeats: "",
    rotationPrice: "",
    rotationLength: "",
    rotationStartDate: undefined,
    clinicalSetting: "",
    locationName: "",
    licenseNumber: "",
    phoneNumber: "",
    businessAddress: "",
    isACGMEAccredited: undefined,
    photos: [],
    description: "",
    studentExpectations: "",
    requirements: [],
    cancellationPolicy: undefined,
    addWelcomeDocuments: false,
  };