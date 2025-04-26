import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { fieldsConfig } from "../constants/fieldsConfig";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { z } from "zod";
import { DatePicker } from "@/components/DatePicker";
import { defaultValues } from "../constants/constants";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  rotationType: z.string().min(1, "Rotation Type is required"),
  specialty: z.string().min(1, "Specialty is required"),
  studentType: z.string().min(1, "Student Type is required"),
  numberOfSeats: z.coerce.number().positive("Must be greater than 0"),
  rotationPrice: z.coerce.number().positive("Must be greater than 0"),
  rotationLength: z.coerce.number().positive("Must be greater than 0"),
  rotationStartDate: z.date({ required_error: "Date is required" }),
  clinicalSetting: z.string().min(1, "Clinical setting is required"),
  locationName: z.string().min(1, "Location Name is required"),
  licenseNumber: z.string().min(1, "License Number is required"),
  phoneNumber: z.string().min(1, "Phone Number is required"),
  businessAddress: z.string().min(1, "Business Address is required"),
  isACGMEAccredited: z.enum(["Yes", "No", "Not Applicable"]),
  photos: z.array(z.string()).min(1, "At least one photo is required"),
  description: z.string().min(10, "Description is required"),
  studentExpectations: z.string().min(10, "Student expectations are required"),
  requirements: z.array(z.string()),
  cancellationPolicy: z.enum(["Soft", "Medium", "Firm", "Hard"]),
  addWelcomeDocuments: z.boolean(),
});

const stepFields = [
  [
    "rotationType",
    "specialty",
    "studentType",
    "numberOfSeats",
    "rotationPrice",
    "rotationLength",
    "rotationStartDate",
    "clinicalSetting",
  ],
  [
    "locationName",
    "licenseNumber",
    "phoneNumber",
    "businessAddress",
    "isACGMEAccredited",
  ],
  ["photos"],
  ["description", "studentExpectations"],
  ["requirements"],
  ["cancellationPolicy"],
  ["addWelcomeDocuments"],
];

export default function AddARotation() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
    trigger,
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log("Final Form Data:", data);
    // Here you can handle the form submission, e.g., send data to an API
    navigate("/");
  };

  const handleNext = async () => {
    const currentStepFields = stepFields[step];
    const isStepValid = await trigger(currentStepFields);
    if (isStepValid) {
      setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 0);
    }
  };

  const onBack = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  return (
    <Card className="max-w-lg mx-auto mt-10 p-6">
      <div className="flex items-center mb-4">
        {step > 0 && (
          <Button type="button" onClick={onBack} variant="ghost">
            <IoIosArrowBack />
          </Button>
        )}
        <h1 className="text-2xl font-bold tracking-tighter lg:text-3xl">
          {step === 2 ? "Add Photos" : "Add A Rotation"}
        </h1>
      </div>

      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          {stepFields[step].map((field) => {
            const config = fieldsConfig[field];
            const fieldValue = watch(field);

            return (
              <div key={field} className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  {config.label}
                </label>

                {config.type === "text" && (
                  <Input
                    {...register(field)}
                    value={fieldValue}
                    onChange={(e) =>
                      setValue(field, e.target.value, { shouldValidate: true })
                    }
                  />
                )}

                {config.type === "number" && (
                  <Input
                    type="number"
                    {...register(field)}
                    value={fieldValue}
                    onChange={(e) =>
                      setValue(field, Number(e.target.value), {
                        shouldValidate: true,
                      })
                    }
                  />
                )}

                {config.type === "date" && (
                  <DatePicker
                    control={control}
                    name={field}
                    selected={fieldValue}
                    onSelect={(date) =>
                      setValue(field, date, { shouldValidate: true })
                    }
                  />
                )}

                {config.type === "textarea" && (
                  <Textarea
                    {...register(field)}
                    value={fieldValue}
                    onChange={(e) =>
                      setValue(field, e.target.value, { shouldValidate: true })
                    }
                  />
                )}

                {config.type === "select" && (
                  <Select
                    value={fieldValue}
                    onValueChange={(value) =>
                      setValue(field, value, { shouldValidate: true })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={`Select ${config.label}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {config.options.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}

                {config.type === "checkbox" && (
                  <div className="space-y-2">
                    {config.options.map((option) => (
                      <div key={option} className="flex items-center gap-2">
                        <Checkbox
                          id={option}
                          checked={fieldValue?.includes(option)}
                          onCheckedChange={(checked) => {
                            const values = fieldValue || [];
                            const updated = checked
                              ? [...values, option]
                              : values.filter((v) => v !== option);
                            setValue(field, updated, { shouldValidate: true });
                          }}
                        />
                        <label htmlFor={option}>{option}</label>
                      </div>
                    ))}
                  </div>
                )}

                {config.type === "radio" && (
                  <RadioGroup
                    value={fieldValue}
                    onValueChange={(value) =>
                      setValue(field, value, { shouldValidate: true })
                    }
                  >
                    {config.options.map((option) => (
                      <div key={option} className="flex items-center gap-2">
                        <RadioGroupItem value={option} id={option} />
                        <label htmlFor={option}>{option}</label>
                      </div>
                    ))}
                  </RadioGroup>
                )}

                {config.type === "switch" && (
                  <Switch
                    checked={fieldValue}
                    onCheckedChange={(checked) =>
                      setValue(field, checked, { shouldValidate: true })
                    }
                  />
                )}

                {config.type === "file" && (
                  <div>
                    <Input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => {
                        const newFiles = Array.from(e.target.files || []);
                        const newURLs = newFiles.map((file) =>
                          URL.createObjectURL(file)
                        );

                        const existingURLs = watch(field) || [];

                        // Append new images to existing ones
                        setValue(field, [...existingURLs, ...newURLs], {
                          shouldValidate: true,
                        });
                      }}
                    />

                    {/* Thumbnails */}
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {(watch(field) || []).map((url, idx) => (
                        <img
                          key={idx}
                          src={url}
                          alt={`Uploaded ${idx}`}
                          className="h-20 w-20 object-cover rounded border"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {errors[field] && (
                  <p className="text-red-500 text-sm">
                    {errors[field].message?.toString()}
                  </p>
                )}
              </div>
            );
          })}

          <div className="flex justify-between mt-4">
            {step > 0 && (
              <Button type="button" onClick={onBack} variant="outline">
                Back
              </Button>
            )}
            {step === stepFields.length - 1 ? (
              <Button type="submit">Submit</Button>
            ) : (
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
