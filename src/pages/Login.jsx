import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(10),
})

const Login = () => {

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
          email: '',
          password: '',
        },
    })

    function onSubmit(data) {
        // Implement login endpoint here
        console.log(data)
    }

  return (
    <div className="flex items-center justify-center h-screen py-2">
        <div className='flex flex-col rounded-lg h-auto w-1/4 p-10 shadow-lg border-1 drop-shadow-md'>
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl mb-6">
     Welcome to FindARotation!
        </h1>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type={"email"} placeholder="user@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type={"password"} placeholder="*********" {...field} />
              </FormControl>
              <FormDescription>
                {/* ENDPOINT: Forgot Password */}
                Forgot Password? <Link className='underline text-blue-500' href="/forgot-password">Reset here</Link>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-indigo-600 w-full mb-4" type="submit">Login</Button>
      </form>
    </Form>
    <div className='flex flex-col space-y-4'>
    <Separator className={""}/>
    <Button className="bg-indigo-600 w-full">Login with Google</Button>
    <Button className="bg-indigo-600 w-full">Login with Facebook</Button>
    <Button className="bg-indigo-600 w-full mb-4">Login with LinkedIn</Button>
    <p>
        Don't have an account? <Link className='underline text-blue-500' to="/signup">Register here</Link>
    </p>
    </div>
    </div>
    </div>
  )
}

export default Login