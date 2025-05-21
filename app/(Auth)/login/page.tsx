"use client"
import Image from "next/image";
import { useState } from "react";
import { GrAd } from "react-icons/gr";
import Login from "./_components/login";
import Signup from "./_components/signup";

const Auth = () => {
    const [entered, setEntered] = useState("login")
    return ( 
        <div className="w-full h-full flex items-center justify-center overflow-auto">
          <div className="grid lg:grid-cols-2 w-full h-full items-center justify-center ">
            <div className=" rounded  lg:px-10 w-full  mb-3 h-full flex flex-col justify-center">
       <span className="flex space-x-1"> <GrAd  className="size-7"/> <h1 className="font-semibold">JEtsY</h1> </span> 
           
           
            <h1 className="font-semibold text-2xl pt-6">
            {entered === "login"? "Login account":  "Sign up"}
            </h1>  
            <p className="font-semibold text-sm text-muted-foreground">
            {entered === "login"? "welcome back! Please enter your account":  "Please enter your details" }
            </p>  
            {entered === "login" ? <div className="pt-4"><Login/><span className="justify-end flex w-full pt-3 text-sm gap-2"> Don't have an account ? {" "} <span onClick={()=>setEntered("/signup")} className="text-blue-600 hover:text-sky-800 cursor-pointer font-semibold"> {" "} Signup </span></span></div>:<div><Signup/> <p className="w-full  pt-3 text-end text-sm">Already have an account? <span className="text-blue-600 font-semibold hover:text-sky-500 cursor-pointer" onClick={()=>setEntered("login")}>Login</span></p></div> }
 
            </div>
         <div className="w-full hidden lg:flex h-full relative">
            <Image src="/img.webp" alt="image" fill className="object-cover"/>
         </div>
          </div>
             
        </div>
     );
}
 
export default Auth;