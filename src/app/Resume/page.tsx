import React from 'react'
import { Metadata } from 'next';
import styles from './page.module.css'
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Footer/page';
// import { title } from 'process';

export const metadata : Metadata={
  title:"Resume"
}
const Resume = () => {
  return (
    <>
    <Navbar/>
    <p className='text-5xl  text-center text-white mt-10'>RESUME</p>
    <div className='w-full h-[1380px] mb-20 '>
      <button className={styles.button} >
        <a href='/CHANDANA_T.pdf' download='Resume.pdf'>Download</a>
        </button>

          <div className={styles.border}>

          <h1 className='text-1xl text-white mt-5 ml-5'>Chandana T</h1>
          <p className='text-white ml-5 '>Bangalore-Karnataka|9591619527|chandanaraj2001@gmail.com</p>
          <p className='text-white ml-5'>https://www.linkedin.com/in/chandana-t-51b0531a2 </p>
          <p className='text-white ml-5'>https://github.com/ChandanaT-hub</p><br></br>
          <h1 className='text-2xl text-center text-pink-800 ml-5'>Career objective</h1>
          <p className='text-white ml-5'>Seeking position to utilize my skills and abilities in the information technology
             industry that offers me professional growth while being resourceful, innovative and 
             flexible. Entry level position in software development.</p>
             <br></br>
             <h1 className='text-2xl text-center text-pink-800'>Technical skills</h1>  
             <ul className='flex gap-5 justify-center text-white'>
              <li>Python</li>
              <li>Django</li>
              <li>Mysql</li>
              <li>HTML,CSS,Javascript</li>
              <li>React,Next</li>
              </ul> 
            <br></br>
              <h2 className='text-2xl text-center text-pink-800'>Strengths</h2>
        <ul className={styles.list}>
            <li>Keen sense of urgency and teamwork</li>
            <li>Enjoy working in a multicultural and agile environment</li>
            <li>Demonstrated ability to work well under strict deadlines</li>
           </ul>
    

        <br></br>
        <h2 className='text-2xl text-center text-pink-800'>Qualifications</h2>
        <ol className='ml-[220px] text-white'>
            <li>Bachelor of Engineering &nbsp; May 2023</li>
            <aside>SDMIT,Dharmasthala</aside>
            <li>Pre-University education &nbsp; June 2019</li>
            <aside>MLAC,Bangalore</aside>
            <li>10th std &nbsp; June 2017</li>
            <aside>TMET,Bangalore</aside>
        </ol> <br></br>
    <h2 className='text-2xl text-center text-pink-800'>Projects</h2>
    <h1 className='text-2xl text-white ml-5'>Employee Management System</h1>
    <p className='text-white ml-5'>Designed and implemented employee Management System to streamline HR processes, views for CRUD operations,and integrated user authentication for admin access.
                <br></br>Technologies:Django, Python, SQLite, HTML, CSS.</p>
                <br></br>
            
      <h1 className='text-2xl text-white ml-5'>Portfolio Website</h1>
      <p className='text-white ml-5'>Designed Crafted with precision and powered by the dynamic Django framework, this portfolio website seamlessly blends aesthetics with functionality. 
      Empowering easy updates of the latest information
      , it features an intuitive admin panel for effortless addition of the most recent accomplishments and details.
        <br></br>Technologies:Django, Python, SQLite, HTML, CSS,Javascript</p>
        <br></br>
        <h1 className='text-2xl text-center text-pink-800'>Certifications</h1>
        <p className='text-center text-white'>Pursued python full stack training from pentagon space,Bangalore.</p>
        <br></br>

        <h1 className='text-2xl text-center text-pink-800 ml-5 '>Work Experience</h1>
        <p className='text-white ml-5 mb-5 mr-5'>Currently working for Payrup as Software Engineer Intern. As a full stack developer intern
           I have honed my skills in web development through hands-on experience and comprehensive training. With a focus on html, css, javascript,React js and Next js I have 
           not only gained proficiency in these technologies but also applied them effectively in real-world projects.</p>
    
    </div>
    </div>
    <Footer />
    </>
    
  )
}

export default Resume;