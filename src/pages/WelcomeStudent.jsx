import { useForm } from "react-hook-form";
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
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
  studentType: z.string().min(1, "Please select a student type."),
  school: z.string().min(1, "Please select a school."),
  countryOfCitizenship: z.string().min(1, "Please select a country."),
  addressLine1: z.string().min(1, "Address Line 1 is required."),
  addressLine2: z.string().optional(),
  city: z.string().min(1, "City is required."),
  state: z.string().min(1, "State is required."),
  zipCode: z.string().min(1, "Zip Code is required."),
});

const studentTypes = [
  "Premed",
  "Medical",
  "Nursing (RN, LPN)",
  "Nurse Practitioner",
  "Physician Assistant",
  "Dentistry",
  "Pharmacy",
  "Physical Therapy",
  "Occupational Therapy",
  "Registered Dietitian",
  "Podiatric Medicine",
  "Other",
];

export default function WelcomeStudent() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      studentType: "",
      school: "",
      countryOfCitizenship: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });

  const navigate = useNavigate();

  function onSubmit(data) {
    console.log("Submitted Data:", data);
    navigate("/student_applies"); // Redirect to the next page after submission
  }

  return (
    <div className="flex items-center justify-center h-screen py-2 my-40 text-black">
      <div className="flex flex-col rounded-lg h-auto w-1/2 sm:w-1/4 p-10 shadow-lg border-1 drop-shadow-md">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl mb-6">
          Welcome Student!
        </h1>
        <p>Let's create your profile</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            {/* Student Type */}
            <FormField
              control={form.control}
              name="studentType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Type</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select student type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {studentTypes.map((type) => (
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

            {/* School */}
            <FormField
              control={form.control}
              name="school"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter school name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Country of Citizenship */}
            <FormField
              control={form.control}
              name="countryOfCitizenship"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country of Citizenship</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter country" {...field} />
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

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Finish
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
