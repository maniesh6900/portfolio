"use client"
import Image from "next/image";
import bg from "../../../../public/background/contact-background.png"
import Form from "@/Components/contact/Form";



export default function contact() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />
    
        <article className="reletive w-full flex flex-col items-center space-y-8  ">
            <div className=" flex flex-col items-center justify-center  space-y-6 w-3/4 my-20 ">
                <h1 className="text-accent text-center font-semibold capitalize text-4xl ">
                    summon the wizard</h1>
            </div>
            <Form />
        </article>


    </>
  );
}
