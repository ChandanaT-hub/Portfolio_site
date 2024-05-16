'use client';
import React from 'react'
import {z,ZodType} from "zod"; 
import { useForm } from  "react-hook-form";
import styles from './page.module.css'
import { zodResolver } from '@hookform/resolvers/zod';
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Footer/page';
// import { Metadata } from 'next';
// export const metadata:Metadata={
//   title:"Contact page"
// }
type FormData = {
  FirstName:string;
  LastName:string;
  Email:string;
  Message:String;
};
const Contact1 = () => {
  const schema:ZodType<FormData> = z
  .object({
    FirstName:z.string()
    .min(1,{message:" First Name is required"})
    .max(9,{message:"String length too long"}),
    LastName:z.string()
    .min(3,{message:" Last Name is required"})
    .max(9,{message:"String length upto 15 is accepted"}),
    Email:z.string()
    .min(1,{message:"Email is required"}).
    email(),
    Message:z
    .string()
  });

  const { register, handleSubmit, 
    formState:{errors}} = useForm<FormData>({
    resolver:zodResolver(schema),
  });
  const submitData=(data:FormData)=>{
    console.log("it worked",data)
  }
  return (
    <>
    <Navbar/>
    <div className='w-full h-[750px] align-middle'>
      <p className={styles.heading}>Contact me</p>
      
    <form className='align-center' onSubmit={handleSubmit(submitData)}>
        <label className={styles.size}>First Name</label><br></br>
        <input className={styles.input}
         {...register("FirstName",{required:true,})}  
         type='text'  name="FirstName" placeholder='Enter first name'></input>
        {errors.FirstName && <span className=' ml-[400px]  text-pink-800 text-center'>{errors.FirstName.message}</span>}<br></br><br></br>

        <label className={styles.size}>Last Name</label><br></br>
        <input className={styles.input}
         {...register("LastName",{required:true,})}  
         type='text'  name="LastName" placeholder='Enter last name'></input>
        {errors.LastName && <span className=' ml-[400px]  text-pink-800 text-center'>{errors.LastName.message}</span>}<br></br><br></br>

        <label className={styles.size}>Email</label><br></br>
        <input className={styles.input} 
        {...register("Email",
        {required:"email is required",})} 
        type='email' name="Email"  placeholder='Enter email'></input>
        {errors.Email && <span className=' ml-[400px]  text-pink-800 text-center'>{errors.Email.message}</span>}<br></br><br></br>

        <label className={styles.size}>Message</label><br></br>
        <textarea className={styles.input} 
        {...register("Message",{required:true})}  
        placeholder='Enter your message'></textarea><br></br><br></br>
        {errors.Message && <span className=' ml-[400px]   text-center'>{errors.Message.message}</span>}<br></br><br></br>


        <button className={styles.btn} >Submit </button>
      </form>
      
    </div>
    <Footer/>
    </>
  )
}

export default Contact1