import { Background } from "@/components/Background";
import Card from "@/components/Card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { riddles } from "@/lib/dummyData";
import Carousel from "@/components/Carousel";
import Link from "next/link"
import { Globe } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Background>
        <div className="w-full h-full flex flex-col justify-center items-center p-4">
          <div className="w-full h-full flex flex-col gap-y-8 items-center justify-center">
            <p className="text-4xl text-white font-bold text-center">Riddle</p>
            <Carousel riddles={riddles} />
          </div>
        </div>
      </Background>
      <div className="fixed top-4 right-4">
        <img src="/BBCC-Logo.svg" className="w-16 lg:w-20"/>
      </div>
      <div className="fixed bottom-4 left-4 z-20 flex flex-col">
        <p className="text-white font-bold text-sm">BINUS Blockchain and Crypto Club</p>
        <Link href={"https://binusbcc.org/"} target="_blank" className="text-neutral-400 text-sm leading-1 underline flex items-center gap-1.5"><Globe className="w-4" />binusbcc.org</Link>
      </div>
    </div>
  );
}
