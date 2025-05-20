"use client"
import Image from "next/image";
import { useState } from "react";
import { GrAd } from "react-icons/gr";
import Login from "./_components/login";

const Auth = () => {
    const [entered, setEntered] = useState("login")
    return ( 
        <div className="w-full h-full flex items-center justify-center">
          <div className="grid lg:grid-cols-2 w-full h-full items-center justify-center ">
            <div className="border rounded border-muted-foreground lg:px-4 w-[29rem] h-[30rem] flex flex-col pt-5">
       <span className="flex space-x-1"> <GrAd  className="size-7"/> <h1 className="font-semibold">JEtsY</h1> </span> 
           
           
            <h1 className="font-semibold text-2xl pt-6">
            {entered === "login"? "Login account": "Sign up"}
            </h1>  
            <p className="font-semibold text-sm text-muted-foreground">
            {entered === "login"? "welcome back! Please enter your account": "Please enter your details"}
            </p>  
            {entered === "login" && <div className="pt-4"><Login/></div>}
            </div>
         <div className="w-full hidden lg:flex h-full relative">
            <Image src="/img.webp" alt="image" fill className="object-cover"/>
         </div>
          </div>
             
        </div>
     );
}
 
export default Auth;