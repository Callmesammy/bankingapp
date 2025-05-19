"use client"
import Charts from "./_components/chart";
import CountUp from 'react-countup';

export default function Home() {
  const name = "Samson"
  const bank = 2
  return (
    <div className="flex px-3 pt-4 w-full h-full  ">
      <div className="w-full flex flex-col h-full">
      <h1 className="text-2xl font-semibold">Welcome, <span className="text-sky-500">{name}</span> </h1> 
      <p className="text-muted-foreground text-sm">Access & manage your account and transactions efficiently</p>
      <div className="w-full h-[13rem] rounded border  bg-secondary overflow-hidden flex space-x-2 items-center text-black">
      <Charts  />   
      <div>
      <h1 className="capitalize font-semibold ">{bank} bank accounts </h1> 
      <h2 className="text-sm pt-5 text-muted-foreground">Total Current balancee</h2> 
      <CountUp
  start={-875.039}
  end={160527.012}
  duration={2.75}
  separator=" "
  decimals={4}
  decimal=","
  prefix="$ "
 className="font-semibold text-2xl"
/>
      </div>  
       </div>
      </div>
    </div>
  );
}
