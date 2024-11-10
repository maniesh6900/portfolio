"use client"
import Image from "next/image";
import bg from "../../public/background/home-background.png"
import RenderModel from "@/Components/RenderModel";
import Wizard from "@/Components/models/Wizard";
import Navigation from "@/Components/Navigation/index";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative text-white ">
        <Image src={bg} alt="background-image" fill
        className="w-full -z-50 h-screen object-cover object-center opacity-25 "
        />

        <div className="w-screen h-screen ">
          <Navigation />
            <RenderModel>
              <Wizard />
            </RenderModel>
         
        </div>
    </main>
  );
}
