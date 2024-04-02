'use client';
import React from 'react'
import {z,ZodType} from "zod"; 
import { useForm } from  "react-hook-form";
import styles from './page.module.css'
import { zodResolver } from '@hookform/resolvers/zod';

type FormData = {
  Name:string;
  Email:string;
  Question:String;
};
const Contact1 = () => {
  const schema:ZodType<FormData> = z
  .object({
    Name:z.string().min(3).max(15),
    Email:z.string().email(),
    Question:z.string(),
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
    <div className='w-full h-[750px] bg-white align-middle'>
      <p className='text-5xl  text-black text-center'>Contact me</p>
      
    <form className='align-center' onSubmit={handleSubmit(submitData)}>
        <label className={styles.size}>Name</label><br></br>
        <input className={styles.input}
         {...register("Name",{required:true,})}  
         type='text'  name="Name" placeholder='enter name'></input>
        {errors.Name && <span className=' ml-[400px]  text-red-800 text-center'>{errors.Name.message}</span>}<br></br>

        <label className={styles.size}>Email</label><br></br>
        <input className={styles.input} 
        {...register("Email",
        {required:"email is required",})} 
        type='email' name="Email"  placeholder='enter mailid'></input>
        {errors.Email && <span className=' ml-[400px]  text-red-800 text-center'>{errors.Email.message}</span>}<br></br>

        <label className={styles.size}>Question</label><br></br>
        <textarea className={styles.input} {...register("Question",{required:true})}  placeholder='enter your question'></textarea><br></br><br></br>
        {errors.Question && <span className=' ml-[400px]  text-red-800 text-center'>{errors.Question.message}</span>}<br></br>


        <button className={styles.btn} >Submit </button>
      </form>
      
    </div>
    </>
  )
}

export default Contact1