import Image from "next/image";

const Auth = () => {
    return ( 
        <div className="w-full h-full flex items-center justify-center">
          <div className="grid lg:grid-cols-2 w-full h-full items-center justify-center">
            Auth
         <div className="w-full hidden lg:flex h-full bg-yellow-400 relative">
            <Image src="/img.webp" alt="image" fill className="object-cover"/>
         </div>
          </div>
             
        </div>
     );
}
 
export default Auth;