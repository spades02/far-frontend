import { Input } from "@/components/ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

export default function PaymentInfoForm({ control }) {
  return (
    <>
      <h1 className="block">Payment Method</h1>
      <div className="grid grid-cols-2 gap-4 max-w-2xl">
        <FormField
          control={control}
          name="cardName"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Cardholder's Name</FormLabel>
              <FormControl>
                <Input placeholder="John Smith" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Card Number</FormLabel>
              <FormControl>
                <Input placeholder="1234 5678 9101 2345" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="exp"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel>EXP</FormLabel>
              <FormControl>
                <Input placeholder="MM/YY" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="cvv"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel>CVV</FormLabel>
              <FormControl>
                <Input placeholder="567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="address"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Billing Address</FormLabel>
              <FormControl>
                <Input placeholder="123 N Michigan Ave" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="apt"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Apt/Suite (optional)</FormLabel>
              <FormControl>
                <Input placeholder="#1017" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Chicago" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="state"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input placeholder="IL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="zip"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>ZIP Code</FormLabel>
              <FormControl>
                <Input placeholder="60611" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
