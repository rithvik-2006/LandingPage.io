"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { ChakraProvider } from '@chakra-ui/react'
import { Button } from "@/components/ui/button";
import { Icon } from "lucide-react";

export function BackgroundBoxesDemo() {
  return (
    // <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
    //   <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

    //    <Boxes /> 
    //   <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
    //   Build a Cutting-Edge Website with the Latest Technology
    //   </h1>
      
     
    // </div>
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
  <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

  <Boxes /> 

  <h1 className={cn("md:text-4xl text-xl text-white relative z-20 text-center")}>
    Build a Cutting-Edge Website with the Latest Technology
  </h1>

  <p className="md:text-lg text-sm text-gray-300 mt-4 relative z-20 text-center max-w-lg">
    Leverage the power of modern frameworks, optimized performance, and seamless user experiences to take your website to the next level.
  </p>

  <div className="flex space-x-4 mt-6 relative z-20">
    {/* <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500">
      Get Started
    </button>
    <button className="px-6 py-2 bg-transparent border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-500 hover:text-white">
      Learn More
    </button> */}
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Get Started
        </span>
      </button>
  </div>

  
</div>

  );
}
