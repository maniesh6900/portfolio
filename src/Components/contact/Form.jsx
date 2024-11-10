"use client"
import React from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message please wait...")

    toast.info(
      ""
    )
    
    emailjs
      .send(process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        params, 
        {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate : {
          throttle : 10000
        },
      })
      .then(
        () => {
          toast.success("I Have Recevied your email ! I will get back to you soon! ",{id : toastId})
        },
        (error) => {
          toast.error("error While sending email please try again", {id : toastId})
        },
      );
  };

   const onSubmit = (data) => {
    const templateParams = {
      to_name : "Maniesh",
      from_name : data.name,
      reply_to : data.email,
      message : data.message,
    };
    sendEmail(templateParams)

  }




  
  return (
    <>
      <Toaster richColors={true} />
    <form onSubmit={handleSubmit(onSubmit)}
        className='max-w-md w-full  flex flex-col  items-center justify-center space-y-4 '
        >
      <input type="text" placeholder="name" {...register("name", { min: 1})} 

className='w-full focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground p-2 rounded-md shadow-lg custom-bg '
/>
        {errors.name && (<span className='inline-block self-start  text-accent' >
        {errors.name.message} 
      </span>) }
      <input type="email" placeholder="Email" {...register("email", {required: "this field is require",
        minLength :{
          value : 3,
          message : "name should be more then 3 characters "
        } 
        , pattern: /^\S+@\S+$/i})} 
        className='w-full focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground p-2 rounded-md shadow-lg custom-bg'
        />
      {errors.email && (<span className='inline-block self-start  text-accent' >
        {errors.email.message} 
      </span>) }
      <textarea {...register("message", {required: "this field is require",
      minLength : {
        value : 50,
        message : "message should be more then 50 charchters  "
      },
      maxLength : {
        value : 500,
        messge : "message shouldn't be more then 500 charchters "
      }
    })}  placeholder="Message"
    className='w-full focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground p-2 rounded-md shadow-lg custom-bg'
    />
      {errors.message && (<span className='inline-block self-start  text-accent' >
        {errors.message.message} 
      </span>) }

      <input type="submit" 
      value="cast yout message"
      className=' px-10 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground p-2 rounded-md shadow-lg backdrop-blur-sm 
      bg-background text-foreground capitalize'
      />
    </form>
</>
  );
}