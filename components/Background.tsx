"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
 
interface BackgroundProps {
    children: React.ReactNode;
}

export function Background({
    children
}: BackgroundProps) {
  return (
    <WavyBackground className="max-w-4xl mx-auto h-screen w-full">
        {
            children
        }
      {/* <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hero waves are cool
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p> */}
    </WavyBackground>
  );
}