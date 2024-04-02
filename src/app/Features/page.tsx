import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase,faCodePullRequest } from "@fortawesome/free-solid-svg-icons";
import { faCss3Alt,faHtml5,faJs ,faPython , faReact,  } from '@fortawesome/free-brands-svg-icons';

const Features = () => {
  return (
    <div className=' h-[800px] bg-white align-middle'>
       <p className='text-5xl text-center'>MY SKILLS</p>
       <div className=' m-[500px] mt-10 flex flex-wrap  h-[350px]  justify-center align-center gap-4'>
            <div className='mt-10  flex w-[100px] h-[100px] flex-wrap align-middle bg-slate-500'>
            <FontAwesomeIcon icon={faJs} className={styles.icon} />
            <p className='ml-3 text-1xl'>Javascript</p>
            </div>
            <div className=' bg-slate-500  mt-10  flex w-[100px] h-[100px] flex-wrap align-middle'>
            <FontAwesomeIcon icon={faPython} className={styles.icon} />
            <p className='ml-5 text-1xl'>Python</p>
            </div>
            <div className=' bg-slate-500   mt-10  flex w-[100px] h-[100px] flex-wrap '>
            <FontAwesomeIcon icon={faHtml5} className={styles.icon} />
            <p className='ml-6 text-1xl text-center'>Html5</p>
            </div>
            <div className=' bg-slate-500 mt-10  flex w-[100px] h-[100px] flex-wrap  align-middle'>
            <FontAwesomeIcon icon={faCss3Alt} className={styles.icon} />
            <p className='ml-8 text-1xl'>CSS3</p>
            </div>
    
        <div className=' bg-slate-500 mt-10 flex w-[100px] h-[100px] flex-wrap align-middle'>
        <FontAwesomeIcon icon={faReact} className={styles.icon} />
            <p className='ml-8 text-1xl'>React</p>
        </div>
        <div className=' bg-slate-500 mt-10  flex w-[100px] h-[100px] flex-wrap align-middle'>
        <FontAwesomeIcon icon={faDatabase} className={styles.icon} />
            <p className='ml-7 text-1xl'>MySQL</p>
        </div>
        <div className=' bg-slate-500 mt-10 flex w-[100px] h-[100px] flex-wrap align-middle'>
        <FontAwesomeIcon icon={faCodePullRequest} className={styles.icon} />
            <p className='ml-3 text-1xl'>Git source control</p>
        </div>
        
        </div>
        
        

      
    </div>
  )
}

export default Features