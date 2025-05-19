"use client"

import Link from "next/link";
import { GrAd } from "react-icons/gr";



const Sidebard = () => {

  // homepage clicking to  refresh to homepage 
  const onPress =(url: string)=>{
    window.location.href = url;

  }
    return (
        <div className="w-[14rem] h-full shadow-white shadow-lg sticky border-r border-r-muted-foreground  ">
            <div className="w-full items">
              <Link onClick={()=>onPress("/")}  href={("/")} className="pt-3 flex space-x-1 w-full justify-center">
                  <GrAd  className="size-7"/> <h1 className="font-semibold">JEtsY</h1>

              </Link>
            </div>

        </div>
      );
}
 
export default Sidebard;