"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Enter your emails",
  }),
  password: z.string().min(6, {
    message: "enter correct password",
  }),
  state: z.string().min(2,{
    message: "Enter state of residence"
  }),
  name: z.string().min(3, {
    message: "Enter your full Name"
  }), 
  surname: z.string().min(3,{
    message: "Enter surname"
  }), 
  address: z.string().min(8, {
    message: "Enter full address"
  }), 
  code: z.coerce.number().min(3,{
    message: "enter appropriate postal code"
  })

});

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
    } catch (error) {
      console.error("something went wrong", error);
    } finally {
      setIsLoading(false);
    }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="pt-3 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="w-full grid grid-cols-2 gap-3  ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name*</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      required
                      placeholder="First Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name*</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      required
                      placeholder="Last name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address*</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    required
                    placeholder="Enter Address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full grid grid-cols-2 gap-3  ">
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State*</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      required
                      placeholder="eg. NY"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal Code*</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      required
                      placeholder="postal code"
                      {...field}
                    />
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
                <FormLabel>Email*</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    type="email"
                    required
                    placeholder="email"
                    {...field}
                  />
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
                <FormLabel>Password*</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    type="password"
                    required
                    placeholder="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-blue-700 hover:bg-sky-600 cursor-pointer font-semibold"
          >
            Signup {isLoading && <Loader2 className="animate-spin size-5" />}
          </Button>
        </form>
      </Form>{" "}
    </div>
  );
};

export default Signup;
