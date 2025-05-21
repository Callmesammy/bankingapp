"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import LogActionns from "../../confirm/actions"

export const formSchema = z.object({
  email: z.string().min(2, {
    message: "Enter your emails"
  }),
  password: z.string().min(6, {
    message: "enter correct password"
  })
})


const Login = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
      // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)       
    try{
      const {data, error} = await LogActionns(values)
      if(data){
        console.log(data)
        toast.success("Successful")
        router.push("/linking")
      }else{
        console.log(error, "error")
        toast.error(String("Something went wrong"))

      }
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
        <div>
 <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input disabled={isLoading} required type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit" className="w-full bg-blue-700 hover:bg-sky-600 cursor-pointer font-semibold">Login {isLoading && <Loader2 className="animate-spin size-5"/>}</Button>
      </form>
    </Form>        </div>
      );
}
 
export default Login;