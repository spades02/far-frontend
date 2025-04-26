import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
  preceptorType: z.string().min(1, "Please select a preceptor type."),
  licenseNumber: z.string().min(1, "License number is required."),
  specialties: z.array(z.string()).min(1, "Please add at least one specialty."),
  clinicName: z.string().min(1, "Clinic name is required."),
  clinicSetting: z.array(z.string()).min(1, "Select at least one setting."),
  businessPhone: z.string().min(1, "Business phone is required."),
  addressLine1: z.string().min(1, "Address Line 1 is required."),
  addressLine2: z.string().optional(),
  city: z.string().min(1, "City is required."),
  state: z.string().min(1, "State is required."),
  zipCode: z.string().min(1, "Zip Code is required."),
});

const preceptorTypes = [
  "MD / DO",
  "NP",
  "PA",
  "RN / LPN",
  "PharmD",
  "DDS/DMD",
  "DPM",
  "OT",
  "PT",
  "RD",
  "Other",
];

const specialtiesList = [
  "Abdominal Surgery",
  "Cardiology",
  "Dermatology",
  "Pediatrics",
];
const clinicSettings = [
  "Outpatient",
  "Shadowing",
  "Telemedicine",
  "Research",
  "Inpatient",
  "Obsevership",
];

export default function WelcomePreceptor() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      preceptorType: "",
      licenseNumber: "",
      specialties: [""], // Ensure at least one specialty dropdown exists
      clinicName: "",
      clinicSetting: [],
      businessPhone: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "specialties",
  });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    navigate("/add_a_rotation");
  };

  return (
    <div className="flex items-center justify-center h-screen py-2 my-80 text-black">
      <div className="flex flex-col rounded-lg h-auto w-1/2 sm:w-1/4 p-10 shadow-lg border-1 drop-shadow-md">
        <h1 className="text-xl font-extrabold tracking-tight lg:text-2xl mb-6">
          Welcome Preceptor!
        </h1>
        <p>Let's create your profile</p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            {/* Preceptor Type */}
            <FormField
              control={form.control}
              name="preceptorType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preceptor Type</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preceptor type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {preceptorTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* License Number */}
            <FormField
              control={form.control}
              name="licenseNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current License Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter license number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Specialty Selection - Dynamic */}
            <div className="space-y-2">
              {fields.map((field, index) => (
                <FormField
                  key={field.id}
                  control={form.control}
                  name={`specialties.${index}`}
                  render={({ field }) => (
                    <FormItem
                      className={"flex items-center justify-between gap-2"}
                    >
                      <Select
                        onValueChange={(value) => {
                          const currentSpecialties =
                            form.getValues("specialties");
                          if (currentSpecialties.includes(value)) {
                            alert("You have already selected this specialty.");
                            return;
                          } else {
                            form.setValue(`specialties.${index}`, value);
                          }
                        }}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a specialty" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {specialtiesList
                            .filter(
                              (spec) =>
                                !form.getValues("specialties").includes(spec) ||
                                spec === field.value
                            ) // Allow only unselected or current value
                            .map((spec) => (
                              <SelectItem key={spec} value={spec}>
                                {spec}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                      {/* Remove Button (Only if more than one specialty exists) */}
                      {fields.length > 1 && (
                        <button
                          type="button"
                          className="ml-2 text-red-500"
                          onClick={() => remove(index)}
                        >
                          ✕
                        </button>
                      )}
                    </FormItem>
                  )}
                />
              ))}
            </div>

            {/* Add Specialty Button */}
            <Button type="button" onClick={() => append("")} className="mt-2">
              + Add Specialty
            </Button>

            <h3 className="text-lg font-bold mt-4">Add A Location</h3>
            <Separator />

            {/* Clinic Name */}
            <FormField
              control={form.control}
              name="clinicName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Clinic Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter clinic name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Clinic Setting (Checkboxes) */}
            <FormItem>
              <FormLabel>Clinic Setting</FormLabel>
              <div className="flex flex-col gap-2">
                {clinicSettings.map((setting) => (
                  <div key={setting} className="flex items-center gap-2">
                    <Checkbox
                      onCheckedChange={(checked) => {
                        const currentSettings = form.getValues("clinicSetting");
                        form.setValue(
                          "clinicSetting",
                          checked
                            ? [...currentSettings, setting]
                            : currentSettings.filter((s) => s !== setting)
                        );
                      }}
                    />
                    <span>{setting}</span>
                  </div>
                ))}
              </div>
              <FormMessage />
            </FormItem>

            {/* Business Phone */}
            <FormField
              control={form.control}
              name="businessPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter business phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Address Line 1 */}
            <FormField
              control={form.control}
              name="addressLine1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address Line 1</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Address Line 2 */}
            <FormField
              control={form.control}
              name="addressLine2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address Line 2 (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* City */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter city" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* State */}
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter state" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Zip Code */}
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zip Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter zip code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Finish
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
