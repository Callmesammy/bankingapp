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
    icons: <FaHome />, 
    url: "/"
}, 

{
  name: "My Banks", 
  icons: <LiaPiggyBankSolid />, 
  url: "/banks"
}, 

{
  name: "Transaction History", 
  icons: <AiOutlineTransaction />  , 
  url: "/history"
}, 

{
  name: "Payment Transfer", 
  icons: <RiSecurePaymentFill />  , 
  url: "/transfer"
}, 

{
  name: "Connect Bank", 
  icons: <GiMoneyStack />  , 
  url: "/connect"
}, 

]


const Sidebard = () => {
  const pathname = usePathname()

  // homepage clicking to  refresh to homepage 
  const onPress =(url: string)=>{
    window.location.href = url;

  }
    return (
        <div className="w-[14rem] h-full shadow-white shadow-lg sticky border-r border-r-muted-foreground  ">
            <div className=" px-2 w-full justify-center space-y-6">
              <Link onClick={()=>onPress("/")}  href={("/")} className="pt-3 flex space-x-1 w-full justify-start hover:scale-103">
                  <GrAd  className="size-7"/> <h1 className="font-semibold">JEtsY</h1>

              </Link>
              <Input placeholder="Search" className="flex w-[13rem] items-center-center px-3 focus-visible:ring-0"/>
              <div className="gap-2 space-y-3">
                {SideItems.map((doc, keys)=>{
                  const isActive = pathname === doc.url || pathname.startsWith(`${doc.url}/`)
                  return(
                    <div key={keys} className={cn("w-full", isActive && " ")}> 
                    
                    </div>
                  )
                })}
              </div>
              </div>
            
        </div>
      );
}
 
export default Sidebard;