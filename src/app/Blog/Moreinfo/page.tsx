import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import I1 from './Jamalabad.jpg'
import I2 from './Karinjeshwara.jpg'
import I3 from './Skandagiri.jpg'
import I4 from './Dubai.jpg'
const Moreinfo = () => {
  return (
    <>
     <p className='text-5xl text-black text-center bg-slate-50'>Treks</p>
<div className=' flex w-full h-[500px] bg-white'>
     
      <div className='rounded-3xl ml-[100px] w-[400px] h-[450px] bg-gray-500 mt-9 bg-no-repeat hover:scale-110 transition duration-500 cursor-pointer'
       style={{backgroundImage:`url(${I1.src})`}}>
        <h1 className='text-white text-3xl mt-64'>Gadaikallu,</h1>
        <h1 className='text-white text-3xl '>Dharmasthala</h1>
        <p className='text-white text-2xl mt-9'><u><Link href="./Moreinfo/Gadaikallu">Explore</Link></u></p>
      </div>

      <div className='rounded-3xl ml-[50px] w-[400px] h-[450px] bg-gray-500  mt-9 bg-no-repeat hover:scale-110 transition duration-500 cursor-pointer'style={{backgroundImage:`url(${I2.src})`}}>
      <h1 className='text-white text-3xl mt-64'>Kaaringeshwara,</h1>
        <h1 className='text-white text-3xl'>Bantwal</h1>
        <p className='text-white text-2xl mt-9'><u><Link href="./Moreinfo/Karinjeshwara">Explore</Link></u></p>
      </div>

      <div className='rounded-3xl ml-[50px] w-[400px] h-[450px] bg-gray-500 mt-9 bg-no-repeat hover:scale-110 transition duration-500 cursor-pointer' style={{backgroundImage:`url(${I3.src})`}}>
      <h1 className='text-white text-3xl mt-64'>Skandagiri,</h1>
        <h1 className='text-white text-3xl'>Bengaluru</h1>
        <p className='text-white text-2xl mt-9'><u><Link href="./Moreinfo/Skandagiri">Explore</Link></u></p>
      </div>
     </div>
     
     <p className=' text-5xl text-black text-center  bg-slate-50'>International trips</p>

     <div className=' flex w-full h-[1000px] bg-white'>

        <div className=' ml-[300px] rounded-3xl w-[800px] h-[600px] bg-gray-500  mt-9 bg-no-repeat hover:scale-110 transition duration-500 cursor-pointer 'style={{backgroundImage:`url(${I4.src})`}}>
        <h1 className='ml-5 text-white text-3xl'>Dubai,</h1>
          <h1 className=' ml-5 text-white text-3xl'>UAE</h1>
          <p className='text-white text-2xl  ml-5'><u><Link href="./Moreinfo/Dubai">Explore</Link></u></p>
        </div>

     </div>
     
     </>
   
  )
}

export default Moreinfo