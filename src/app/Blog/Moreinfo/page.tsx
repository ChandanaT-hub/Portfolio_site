import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import I1 from './Jamalabad.jpg'
import I2 from './Karinjeshwara.jpg'
import I3 from './Skandagiri.jpg'
import I4 from './Dubai.jpg'
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Footer/page'
import styles from './page.module.css';
const Moreinfo = () => {
  return (
    <>
    <Navbar/>
     <p className='text-5xl text-center text-white mt-10'>Treks</p>
    <div className={styles.container}>

    <div>
    <Link href="./Moreinfo/Gadaikallu"> 
      <div className='xl:rounded-3xl ml-[20px] w-[300px] h-[400px] bg-gray-500  bg-no-repeat hover:scale-110 transition duration-500 cursor-pointer
      sm:ml-2 rounded-3xl'
       style={{backgroundImage:`url(${I1.src})`}}>
        <h1 className='text-white text-3xl mt-10 ml-3'><Link href="./Moreinfo/Gadaikallu"> Gadaikallu, </Link></h1>
        <h1 className='text-white text-3xl ml-3 '><Link href="./Moreinfo/Gadaikallu">Dharmasthala </Link></h1>
        <p className='text-white text-2xl mt-9 ml-3'><u><Link href="./Moreinfo/Gadaikallu">Explore</Link></u></p>
      </div> </Link>
      </div>

      <div>
    <Link href="./Moreinfo/Karinjeshwara"> 
      <div className='rounded-3xl ml-[20px] w-[300px] h-[400px] bg-gray-500  mt-9 bg-no-repeat hover:scale-110 transition duration-500 cursor-pointer'
      style={{backgroundImage:`url(${I2.src})`}}>
      <h1 className='text-white text-3xl mt-10 ml-3'><Link href="./Moreinfo/Karinjeshwara">Kaaringeshwara,</Link></h1>
        <h1 className='text-white text-3xl ml-3'><Link href="./Moreinfo/Karinjeshwara">Bantwal</Link></h1>
        <p className='text-white text-2xl mt-9 ml-3'><u><Link href="./Moreinfo/Karinjeshwara">Explore</Link></u></p>
      </div> </Link>
      </div>

      <div>
    <Link href="./Moreinfo/Skandagiri"> 
      <div className='rounded-3xl ml-[20px] w-[300px] h-[400px] bg-gray-500 mt-9 bg-no-repeat hover:scale-110 transition duration-500 cursor-pointer' 
      style={{backgroundImage:`url(${I3.src})`}}  ><Link href="./Moreinfo/Skandagiri"></Link>
      <h1 className='text-white text-3xl mt-10 ml-3'><Link href="./Moreinfo/Skandagiri">Skandagiri,</Link></h1>
        <h1 className='text-white text-3xl ml-3'><Link href="./Moreinfo/Skandagiri">Bengaluru</Link></h1>
        <p className='text-white text-2xl mt-9 ml-3'><u><Link href="./Moreinfo/Skandagiri">Explore</Link></u></p>
      </div> </Link>
      </div>
     </div>
     

     <Link href="./Moreinfo/Dubai">
      <div>
     <p className= {styles.text}>International Trips</p>
     <div className={styles.du}>
        <div className={styles.dubai} style={{backgroundImage:`url(${I4.src})`}}>
        <h1 className='ml-5 text-white text-3xl'><Link href="./Moreinfo/Dubai">Dubai,</Link></h1>
          <h1 className=' ml-5 text-white text-3xl'><Link href="./Moreinfo/Dubai">UAE</Link></h1>
          <p className='text-white text-2xl mt-9 ml-5'><u><Link href="./Moreinfo/Dubai">Explore</Link></u></p>
        </div>
      
     </div>
     </div>
     </Link>
     
     <Footer/>
     </>
   
  )
}

export default Moreinfo