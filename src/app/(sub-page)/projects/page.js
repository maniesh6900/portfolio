"use client"
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png"
import Staff from "@/Components/models/staff";
import RenderModel from "@/Components/RenderModel";
import ProjectList from "@/Components/projects/index";
import { projectsData } from "@/app/data";
// import dynamic from "next/dynamic";

// const Staff = dynamic((import("@/Components/models/staff"),{ssr : false}))

export default function project() {
  return (
   
    <>
      <Image src={bg} 
        alt="background-image" fill
        className="w-full -z-50 h-screen relative object-cover object-center opacity-25 "/>
      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-2 -translate-x-2.5 -z-10 left-1/2 lg:left-24 h-screen ">
      <RenderModel>
        <Staff  /> 
      </RenderModel>
    </div>
  </>
  );
}
