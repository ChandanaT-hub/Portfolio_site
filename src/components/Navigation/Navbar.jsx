"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProfileImg from './profile.jpeg';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 overflow-y-auto" style={{ display: isOpen ? 'block' : 'none' }}>
        <div className="flex justify-end p-4">
          <button className="text-white" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <Link href="/">
              <p className="hover:bg-pink-800 text-1xl text-white">HOME</p>
            </Link>
          </li>
          <li>
            <Link href="/Features">
              <p className="hover:bg-pink-800 text-1xl text-white">SKILLS</p>
            </Link>
          </li>
          <li>
            <Link href="/Projects">
              <p className="hover:bg-pink-800 text-1xl text-white">PROJECTS</p>
            </Link>
          </li>
          <li>
            <Link href="/Resume">
              <p className="hover:bg-pink-800 text-1xl text-white">RESUME</p>
            </Link>
          </li>
          <li>
            <Link href="/Blog">
              <p className="hover:bg-pink-800 text-1xl text-white">BLOG</p>
            </Link>
          </li>
          <li>
            <Link href="/Contact1">
              <p className="hover:bg-pink-800 text-1xl text-white">CONTACT</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="container mx-auto px-4 h-full mt-5 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image style={{ borderRadius: '50%' ,width: 45, height: 45 }} className=" ml-10" src={ProfileImg} alt="profile img" />
            <p className="ml-2 text-white text-xl
            ">Chandana_T</p>
          </div>

          <ul className="hidden lg:flex gap-x-6 text-white items-end">
            <li>
              <Link href="/">
                <p className="hover:bg-pink-800 text-xl">HOME</p>
              </Link>
            </li>
            <li>
              <Link href="/Features">
                <p className="hover:bg-pink-800 text-xl">SKILLS</p>
              </Link>
            </li>
            <li>
              <Link href="/Projects">
                <p className="hover:bg-pink-800 text-xl">PROJECTS</p>
              </Link>
            </li>
            <li>
              <Link href="/Resume">
                <p className="hover:bg-pink-800 text-xl">RESUME</p>
              </Link>
            </li>
            <li>
              <Link href="/Blog">
                <p className="hover:bg-pink-800 text-xl">BLOG</p>
              </Link>
            </li>
            <li>
              <Link href="/Contact1">
                <p className="hover:bg-pink-800 text-xl">CONTACT</p>
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button className="text-white" onClick={toggleMenu}>
              {isOpen ? (
                <svg class="h-8 w-8 text-slate-800"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"> 
                 <line x1="3" y1="12" x2="21" y2="12" />  <line x1="3" y1="6" x2="21" y2="6" />  <line x1="3" y1="18" x2="21" y2="18" /></svg>
                
                
                // <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                // </svg>
              ) : (
                <svg class="h-8 w-8 absolute top-0 left-0 ml-2 mt-3  text-white-700"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  
                stroke-linecap="round"  stroke-linejoin="round">  <line x1="3" y1="12" x2="21" y2="12" />  
                <line x1="3" y1="6" x2="21" y2="6" />  <line x1="3" y1="18" x2="21" y2="18" /></svg>

                // <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-0 left-0 ml-2 mt-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                // </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
