"use client"

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { GrAd } from "react-icons/gr";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { RiSecurePaymentFill } from "react-icons/ri";


// sidebar items 

const SideItems = [
  {
    name: "Home", 
    icons: <FaHome className="size-5"/>, 
    url: "/"
}, 

{
  name: "My Banks", 
  icons: <LiaPiggyBankSolid className="size-5" />, 
  url: "/banks"
}, 

{
  name: "Transaction History", 
  icons: <AiOutlineTransaction className="size-5" />  , 
  url: "/history"
}, 

{
  name: "Payment Transfer", 
  icons: <RiSecurePaymentFill className="size-5" />  , 
  url: "/transfer"
}, 

{
  name: "Connect Bank", 
  icons: <GiMoneyStack className="size-5"/>  , 
  url: "/connect"
}, 

]


const Sidebard = () => {
  const user = "Samson";
  const email = "callmesammy@yahoo.com"
  const pathname = usePathname()

  // homepage clicking to  refresh to homepage 
  const onPress =(url: string)=>{
    window.location.href = url;

  }
    return (
        <div className="w-[14rem] mb-3 h-full shadow-white shadow-md relative border-r border-r-muted-foreground   ">
            <div className="  px-2 w-full justify-center space-y-6">
              <Link onClick={()=>onPress("/")}  href={("/")} className="pt-3 flex space-x-1 w-full justify-start hover:scale-103">
                  <GrAd  className="size-7"/> <h1 className="font-semibold">JEtsY</h1>

              </Link>
              <Input placeholder="Search" className="flex w-[13rem] items-center-center px-3 focus-visible:ring-0"/>
              <div className=" space-y-3">
                {SideItems.map((doc, keys)=>{
                  const isActive = pathname === doc.url || pathname.startsWith(`${doc.url}/`)
                  return(
                    <Link href={doc.url} key={keys} className={cn("gap-2 w-full p-2 hover:bg-muted-foreground items-center rounded px-2 cursor-pointer h-full flex", isActive && "w-full bg-blue-700 flex gap-2 ")}> 
                    {doc.icons}
                    <h1 className="text-sm font-semibold">{doc.name}</h1>
                    </Link>
                  )
                })}
              </div>
             
              </div>
             
              <footer className=" px-3 flex-col absolute cursor-pointer mt-auto bottom-2 flex ">
                <h1 className="text-md capitalize font-semibold">{user}</h1> 
                <h1 className="text-sm capitalize text-muted-foreground">{email}</h1>

              </footer>
        </div>
      );
}
 
export default Sidebard;