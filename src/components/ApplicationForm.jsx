import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import ApplicationInfoForm from "./ApplicationInfoForm";
import PaymentInfoForm from "./PaymentInfoForm";
import { useNavigate } from "react-router-dom";
import { Form } from "@/components/ui/form";

const formSchema = z.object({
  rotationDates: z.string().min(1, "Please select a rotation date"),
  message: z.string().nonempty("Message is required."),
  cv: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "CV is required"),
  drugScreening: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Drug Screening is required"),
  transcript: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Transcript is required"),
  letterOfGoodStanding: z
    .instanceof(File)
    .optional()
    .refine((file) => !file || file instanceof File, {
      message: "File must be a valid upload",
    }),
  cardName: z.string().nonempty("Cardholder's name is required."),
  cardNumber: z
    .string()
    .min(16, "Card number must be 16 digits.")
    .max(16, "Card number must be 16 digits."),
  exp: z.string().nonempty("Expiration date is required."),
  cvv: z
    .string()
    .min(3, "CVV must be at least 3 digits.")
    .max(4, "CVV can't be more than 4 digits."),
  address: z.string().nonempty("Billing address is required."),
  apt: z.string().optional(),
  city: z.string().nonempty("City is required."),
  state: z.string().nonempty("State is required."),
  zip: z
    .string()
    .min(5, "ZIP Code must be 5 digits.")
    .max(5, "ZIP Code must be 5 digits."),
});

export default function ApplicationForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
      cv: undefined,
      drugScreening: undefined,
      transcript: undefined,
      letterOfGoodStanding: undefined,
      cardName: "",
      cardNumber: "",
      exp: "",
      cvv: "",
      address: "",
      apt: "",
      city: "",
      state: "",
      zip: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // navigate or post data
    console.log("Form submitted:", data);
    navigate("/");
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-4">
        <ApplicationInfoForm control={form.control} />
        <PaymentInfoForm control={form.control} />
        <div className="flex justify-between">
          <Button
            onClick={() => navigate("/listing")}
            type="button"
            variant="outline"
          >
            Cancel Application
          </Button>
          <Button type="submit">Submit Application</Button>
        </div>
      </form>
    </Form>
  );
}
