'use client';
import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import ProfileImg from './profile.jpeg';
import styles from './Navbar.module.css';

const Navbar = () => {
  const contactForm=()=>{
    
    window.open('/Contact')
  }
const [click,setClick] = useState();
  const handleClick=()=>{
    const jsxTo = <div className={styles.toggle}>
      <ul className=" text-white items-center">
    <li>
      <Link href="/">
        <p>HOME</p>
      </Link>
    </li>
    <li>
      <Link href="/Features">
        <p>FEATURES</p>
      </Link>
    </li>
    <li>
      <Link href="/Projects">
        <p>PORTFOLIO</p>
      </Link>
    </li>
    <li>
      <Link href="/Resume">
        <p>RESUME</p>
      </Link>
    </li>
    {/* <li>
      <Link href="/clients">
        <p>CLIENTS</p>
      </Link>
    </li>
    <li>
      <Link href="/pricing">
        <p>PRICING</p>
      </Link>
    </li> */}
    <li>
      <Link href="/Blog">
        <p>BLOG</p>
      </Link>
    </li>
    <li>
      <Link href="/Contact">
        <p>CONTACT</p>
      </Link>
    </li>
    {/* <li>
      <button className={styles.button}><p>CONTACT ME</p></button>
    </li> */}
  </ul></div>;
    setClick(jsxTo)
  }
  return (
    <>
    <div className="flex">
    <button className={styles.btn} onClick={handleClick}>
      <div className='w-6 h-1 mt-1 bg-white'></div>
      <div className='w-6 h-1 mt-1 bg-white'></div>
      <div className='w-6 h-1 mt-1 bg-white'></div>
      {click}
     </button>
     <Image className="rounded-full items-start ml-20 mt-3" height={10} width={45} src={ProfileImg} alt="profile img"></Image>
     <p className='mt-5 ml-2 text-white'>INBIO</p>
     
     {/* <div className={styles.hamburger}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div> */}
      <div className="container mx-auto px-4 h-full mt-5">
          <div className="flex justify-end items-center h-full">
          
            <ul className="hidden md:flex gap-x-6 text-white items-end">
              <li>
                <Link href="/home">
                  <p>HOME</p>
                </Link>
              </li>
              <li>
                <Link href="/Features">
                  <p>FEATURES</p>
                </Link>
              </li>
              <li>
                <Link href="/Projects">
                  <p>PROJECTS</p>
                </Link>
              </li>
              <li>
                <Link href="/Resume">
                  <p>RESUME</p>
                </Link>
              </li>
              {/* <li>
                <Link href="/clients">
                  <p>CLIENTS</p>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <p>PRICING</p>
                </Link>
              </li> */}
              <li>
                <Link href="/Blog">
                  <p>BLOG</p>
                </Link>
              </li>
              <li>
                <Link href="/Contact1">
                  <p>CONTACT</p>
                </Link>
              </li>
              {/* <li>
                <button className={styles.button} onClick={contactForm}><p>CONTACT ME</p></button>
              </li> */}
            </ul>
            
          </div>
        </div>
      {/* </div> */}
      </div>
    </>
  )
}

export default Navbar


