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
            <Image className="rounded-full ml-10" height={10} width={45} src={ProfileImg} alt="profile img" />
            <p className="ml-2 text-white">Chandana_T</p>
          </div>

          <ul className="hidden md:flex gap-x-6 text-white items-end">
            <li>
              <Link href="/">
                <p className="hover:bg-pink-800 text-1xl">HOME</p>
              </Link>
            </li>
            <li>
              <Link href="/Features">
                <p className="hover:bg-pink-800 text-1xl">SKILLS</p>
              </Link>
            </li>
            <li>
              <Link href="/Projects">
                <p className="hover:bg-pink-800 text-1xl">PROJECTS</p>
              </Link>
            </li>
            <li>
              <Link href="/Resume">
                <p className="hover:bg-pink-800 text-1xl">RESUME</p>
              </Link>
            </li>
            <li>
              <Link href="/Blog">
                <p className="hover:bg-pink-800 text-1xl">BLOG</p>
              </Link>
            </li>
            <li>
              <Link href="/Contact1">
                <p className="hover:bg-pink-800 text-1xl">CONTACT</p>
              </Link>
            </li>
          </ul>
          <div className="md:hidden">
            <button className="text-white" onClick={toggleMenu}>
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-0 left-0 ml-2 mt-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
