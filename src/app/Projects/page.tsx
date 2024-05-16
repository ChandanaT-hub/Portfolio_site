import React from 'react'
import I1 from './p1.jpg'
import I2 from './p2.jpg'
import I3 from './p3.jpg'
import styles from './page.module.css'
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Footer/page'
import Link from 'next/link';
import { Metadata } from 'next';
export const metadata:Metadata={
  title:"Projects"
}
const projects = () => {
  return (
    <>
    <Navbar/>
    <div className='mb-10'>
    <p className={styles.p}>MY PROJECTS</p>
    <div className={styles.container}>
      <div className='xl:rounded-3xl ml-[20px] w-[300px] h-[400px] bg-gray-500 mt-9 bg-no-repeat hover:scale-110 transition duration-500 cursor-pointer
      sm:ml-5  rounded-3xl'
       style={{backgroundImage:`url(${I1.src})`}}>
        <h1 className='text-pink-800 text-3xl mt-2 ml-5'>Library management system</h1>
      </div>

      <div className='rounded-3xl ml-[20px] w-[300px] h-[400px] bg-gray-500  mt-9 bg-no-repeat hover:scale-110 transition duration-500 cursor-pointer'
      style={{backgroundImage:`url(${I2.src})`}}>
      <h1 className='text-pink-800 text-3xl  ml-5 mt-2'>To Do App</h1>
       

      </div>

      <div className='rounded-3xl ml-[20px] w-[300px] h-[400px]  bg-gray-500 mt-9 bg-no-repeat hover:scale-110 transition duration-500 cursor-pointer' 
      style={{backgroundImage:`url(${I3.src})`}}>
      <h1 className='text-pink-800 text-3xl mt-2 ml-5'>Portfolio Website</h1>
        
      </div>
     </div>
    <br></br>
    </div>
    <Footer />
    
    </>
  )
}

export default projects;