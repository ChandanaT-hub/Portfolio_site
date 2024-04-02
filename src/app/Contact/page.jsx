'use client';
import React from 'react'
import styles from './page.module.css';
import { useState } from 'react';
import Link from 'next/link';
const contact = () => {
  const[submit,setSubmit] = useState();
  let arr=[]
  const submitForm=(e)=>{
    e.preventDefault();
    console.log(formdata)
    const data =formdata
    arr = (Object.values(formdata)).slice()
    console.log(arr)
    const display =<div className='w-full'>
      <p class=" w-full text-l font-black ml-10 text-gray-900 dark:text-white">You submitted the form with 
      following details:<br></br>{arr[0]}<br></br>{arr[1]}<br></br>{arr[2]}</p>
      <h3>Will connect with you soon!!!</h3>
      
    </div>
   setSubmit(display)
    
  }
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prevState)=>({
      ...prevState,
      [name]:value,
      
    }))


  }
  const[formdata,setFormData] = useState({
    name:"",
    email:"",
    question:"",
  })
  return (
        <>
       <br></br>
          <h1 className='text-3xl text-white text-center'><u>CONTACT ME</u></h1>
      
        <h1 className='mt-0 text-3xl text-white text-right'><Link href="/">HOME</Link></h1>
        <div className={styles.main}>
        
         
        <form className='align-center'>
        <label className={styles.size}>Name</label><br></br>
        <input className={styles.input} onChange={handleChange} type='text' value={formdata.name} name="name" placeholder='enter name'></input><br></br>

        <label className={styles.size}>Email</label><br></br>
        <input className={styles.input}onChange={handleChange} type='email' name="email" value={formdata.email} placeholder='enter mailid'></input><br></br>

        <label className={styles.size}>Question</label><br></br>
        <textarea  rows="4" className={styles.input} onChange={handleChange}name="question" value={formdata.question} placeholder='enter your question'></textarea><br></br><br></br>

        <button className={styles.btn} onClick={submitForm}>Submit </button>
        </form>
        {submit}
        </div>
        </>
  )
}

export default contact