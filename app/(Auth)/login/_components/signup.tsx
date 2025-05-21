"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

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
import { useState } from "react"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Enter your emails"
  }),
  password: z.string().min(6, {
    message: "enter correct password"
  })
})


const Signup = () => {
  const [isLoading, setIsLoading] = useState(false)
      // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try{

    }catch(error){
      console.error("something went wrong", error)
    }finally{
      setIsLoading(false)
    }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

    return (
        <div className="pt-3 ">
 <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className="w-full grid grid-cols-2 gap-3  ">

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input disabled={isLoading} type="email" required placeholder="email" {...field} />
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
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input disabled={isLoading} required  placeholder="Last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
              </div>
              <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input disabled={isLoading} required  placeholder="Enter Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
 <div className="w-full grid grid-cols-2 gap-3  ">

<FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>
      <FormLabel>State</FormLabel>
      <FormControl>
        <Input disabled={isLoading} type="email" required placeholder="email" {...field} />
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
      <FormLabel>Postal Code</FormLabel>
      <FormControl>
        <Input disabled={isLoading} required  placeholder="Last name" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
      </div>

      <FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>
      <FormLabel>State</FormLabel>
      <FormControl>
        <Input disabled={isLoading} type="email" required placeholder="email" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>
      <FormLabel>State</FormLabel>
      <FormControl>
        <Input disabled={isLoading} type="email" required placeholder="email" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
        <Button type="submit" className="w-full bg-blue-700 hover:bg-sky-600 cursor-pointer font-semibold">Login {isLoading && <Loader2 className="animate-spin size-5"/>}</Button>
      </form>
    </Form>        </div>
      );
}
 
export default Signup;