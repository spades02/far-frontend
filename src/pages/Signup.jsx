import { useState, React} from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Check, ChevronsUpDown } from "lucide-react"
import { z } from 'zod'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

const referralSources = [
  { label: "Podcast", value: "podcast" },
  { label: "Social Media", value: "sm" },
  { label: "Facebook Ad", value: "fbAd" },
  { label: "Blog", value: "blog" },
  { label: "Friend/Colleague", value: "friend" },
  { label: "Google Ad", value: "googleAd" },
  { label: "Internet Search", value: "organic" },
  { label: "Other", value: "other" },
];

// Validation schema for signup
const schema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(10, "Password must be at least 10 characters"),
  confirmPassword: z.string().min(10, "Password must be at least 10 characters"),
  type: z.enum(["student", "preceptor"], {
    required_error: "You need to specify if you are a student or preceptor.",
  }),
  referralCode: z.string().optional(),
  terms: z.boolean().default(false).refine((data) => data === true, {
    message: "You must agree to the terms and conditions",
  }),
  referralSource: z.string().nonempty("Please select where you heard about us."),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const Signup = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      type: '',
      referralCode: '',
      terms: false,
      referralSource: "",
    },
  });

  const [referralPopoverOpen, setReferralPopoverOpen] = useState(false);

  function onSubmit(data) {
    console.log("Signup Data:", data);
  }

  return (
    <div className="flex items-center justify-center h-screen py-2 my-22 text-black">
      <div className='flex flex-col rounded-lg h-auto w-1/4 p-10 shadow-lg border-1 drop-shadow-md'>
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl mb-6">
          Sign up
        </h1>

        {/* Social Signup Buttons */}
        <Button className="bg-indigo-600 w-full mb-2">Sign up With Google</Button>
        <Button className="bg-indigo-600 w-full mb-2">Sign up With Facebook</Button>
        <Button className="bg-indigo-600 w-full mb-4">Sign up With LinkedIn</Button>

        <Separator className={"mb-4"}/>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* First Name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className = {"text-black"}>First Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage className={"text-red-500"}/>
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className = {"text-black"}>Last Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage className={"text-red-500"}/>
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className = {"text-black"}>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="+1234567890" {...field} />
                  </FormControl>
                  <FormMessage className={"text-red-500"}/>
                </FormItem>
              )}
            />

            {/* Email Address */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className = {"text-black"}>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="user@example.com" {...field} />
                  </FormControl>
                  <FormMessage className={"text-red-500"}/>
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className = {"text-black"}>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage className={"text-red-500"}/>
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className = {"text-black"}>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage className={"text-red-500"}/>
                </FormItem>
              )}
            />
            {/* User type */}
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className = {"text-black"}>Sign up as...</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="student" />
                        </FormControl>
                        <FormLabel className = {"text-black font-normal"}>
                          Student
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="preceptor" />
                        </FormControl>
                        <FormLabel className = {"text-black font-normal"}>
                          Preceptor
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage className={"text-red-500"}/>
                </FormItem>
              )}
            />
            
            {/* Referral Code */}
            <FormField
              control={form.control}
              name="referralCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className = {"text-black"}>Referral Code</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Optional" {...field} />
                  </FormControl>
                  <FormMessage className={"text-red-500"}/>
                </FormItem>
              )}
            />

           {/* Referral Source Field */}
        <FormField
          control={form.control}
          name="referralSource"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className = {"text-black"}>How did you hear about us?</FormLabel>
              <Popover open={referralPopoverOpen} onOpenChange={setReferralPopoverOpen}>
                <PopoverTrigger>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      onClick={() => setReferralPopoverOpen(!referralPopoverOpen)}
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? referralSources.find((src) => src.value === field.value)?.label
                        : "Select an option"}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[250px] p-0">
                  <Command>
                    <CommandInput placeholder="Search source..." className="h-9" />
                    <CommandList>
                      <CommandEmpty>No source found.</CommandEmpty>
                      <CommandGroup>
                        {referralSources.map((src) => (
                          <CommandItem
                            key={src.value}
                            onSelect={() => {
                              form.setValue("referralSource", src.value);
                              setReferralPopoverOpen(false);
                            }}
                          >
                            {src.label}
                            <Check
                              className={cn(
                                "ml-auto",
                                src.value === field.value ? "opacity-100" : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>Let us know how you found us!</FormDescription>
              <FormMessage className={"text-red-500"}/>
            </FormItem>
          )}
        />


            {/* Terms and Conditions */}
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      id="terms"
                      checked={field.value}  // Bind the checked state
                      onCheckedChange={field.onChange} // Update form state when clicked
                    />
                  </FormControl>
                  <FormLabel className = {"text-black"} htmlFor="terms">
                    I agree to the <Link className="underline text-blue-500" to="/terms">terms and conditions</Link>
                  </FormLabel>
                  <FormMessage className={"text-red-500"}/>
                </FormItem>
              )}
            />


            <Button className="bg-indigo-600 w-full mt-4" type="submit">Create My Account</Button>
          </form>
        </Form>
        <p className="mt-4 text-center">
          Already have an account? <Link className='underline text-blue-500' to="/login">Login here</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
