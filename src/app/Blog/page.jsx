'use client';
import React , { useState } from 'react';
import Link from "next/link";
// import { useHistory } from 'react-router-dom';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import styles from './page.module.css'
import Moreinfo from './Moreinfo/page';
// import Moreinfo from './Moreinfo/page';

const Blog = () => {
  // let history = useHistory;
  const handleClick=()=>{
   <Moreinfo/>
  }
const[currentindex,setCurrentIndex]=useState(0);
const prevSlide=()=>{
  const isFirstSlide = currentindex === 0;
  const newIndex = isFirstSlide ? slides.length-1:currentindex-1;
  setCurrentIndex(newIndex)
}
const nextSlide=()=>{
  const isLastSlide = currentindex === slides.length-1;
  const newIndex = isLastSlide ? 0:currentindex+1;
  setCurrentIndex(newIndex)
}


const slides =[
  {
    url:'https:www.chikkamagalurustays.in/wp-content/uploads/2015/08/Jamalabad-Fort-Gadaikallu-4.jpg',
    place:"Gadaikallu,Belthangady",
  },
  {
    url:'https://lightuptemples.com/wp-content/uploads/2023/01/2021-01-16.jpg',
    place:"Kaaringeshwara,Bantwal",
  },
  {
    url:'https://moxtain.s3.ap-south-1.amazonaws.com/blogs/SkandagiriHillsTrek/skandagiri-trek-sunrise.jpg',
    place:"Skandagiri,Bangalore"
  },
{
  url:'https://i.pinimg.com/originals/ee/6e/70/ee6e70edb91f21e02743242258aef12e.jpg',
},
{
  url:'https://www.miraclegardenblog.com/pictures/pictures-dubai-miracle-garden.jpg'
},
{
  url:'https://www.artnews.com/wp-content/uploads/2022/05/Museum-of-Future-Exterior-3.jpg?w=1200'
},
{
  url:'https://t3.ftcdn.net/jpg/03/54/44/76/360_F_354447633_eaplJq9O6YW4YhPODKtWxNtgVg8xBKbg.jpg'
},
{
  url:'https://tripventura.com/cdn/shop/files/df_cbb71117-e82c-4837-ba23-d74e6ab926a0.jpg?v=1703678560&width=1946'
}]
// ];setSlides(fetchSlides);},[]);
  return (
    <>
    
    <h1 className='mt-5 text-5xl text-white text-center'>BLOG</h1>
    <h2 className='mt-5 text-5xl text-white text-center'>WELCOME TO MY TRAVEL BLOG</h2>
    <div className='flex'>
    <p className='mt-5 text-2xl text-white text-left'>YOU CAN EXPLORE THE FOLLOWING PLACES</p>

    {/* <Link href="./Moreinfo/page.tsx" className='text-xl text-white ml-[600px]'>MOre info</Link> */}
    
    

    <button className='text-xl text-white ml-[800px]' onClick={handleClick}
    ><Link href="./Blog/Moreinfo">More Info</Link> </button><br></br>
    {/* <button className=' text-xl text-white ml-9'>International travels</button> */}


    </div>
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
    <div style={{backgroundImage:`url(${slides[currentindex].url})`}} className={styles.slide} >
    </div>
    <div className='absolute top-[30%] -translate-x-0 translate-y-[50%] left-20 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft size={30}  onClick={prevSlide}/>
    </div>
    <div className='absolute top-[30%] -translate-x-0 translate-y-[50%] right-20 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>

    </div>
    {/* <Moreinfo/> */}
    </>
  )
}

export default Blog