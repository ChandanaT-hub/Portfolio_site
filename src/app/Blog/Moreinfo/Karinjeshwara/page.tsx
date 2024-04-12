import React from 'react'
import Link from 'next/link'
import I1 from './k1.jpg';
import I2 from './k2.jpg'
import I3 from './k3.jpg'
import I4 from './k4.jpg'
import Footer from '@/components/Footer/page';
import styles from './page.module.css'
const page = () => {
  return (
    <>
    <div className={styles.container}>

    <div className='rounded-3xl ml-[100px] w-[300px] h-[400px] bg-gray-500 mt-9 bg-no-repeat hover:scale-110 transition duration-500 cursor-pointer'
       style={{backgroundImage:`url(${I1.src})`}}>  
      </div>
      <div className='rounded-3xl ml-[50px] w-[300px] h-[400px] bg-gray-500 mt-9 bg-no-repeat hover:scale-110 transition duration-500 cursor-pointer'
       style={{backgroundImage:`url(${I2.src})`}}>  
      </div>
       <div className='rounded-3xl ml-[50px] w-[300px] h-[400px] bg-gray-500 mt-9 bg-no-repeat hover:scale-110 transition duration-500 cursor-pointer'
       style={{backgroundImage:`url(${I3.src})`}}>  
      </div>
      <div className='rounded-3xl ml-[50px] w-[300px] h-[400px] bg-gray-500 mt-9 bg-no-repeat hover:scale-110 transition duration-500 cursor-pointer'
       style={{backgroundImage:`url(${I4.src})`}}>  
      </div>
    </div>
    <div className={styles.para}>
    <h1 className=' text-3xl text-black text-center justify-center text-pink-600'>About Karinjeshwara temple</h1>
    <p className='m-[30px] justify-center  text-white'>Sri Karinjeshwara Temple is Hindu Temple, a famous Lord Shiva temple located Karinja in Bantwala 
    Taluk, Kavalamudur Village, Dakshina Kannada, Karnataka, India. This temple is situated on the peak of Karinja Hill, about 1000 feet 
    above sea level in Kodyamale hills, Karinjeshwara. There are about 600 steps to reach this temple. This temple has two parts- one is 
    lord Shiva is on the top of a cliff and the other is for the Goddess Parvati and Lord Ganesha in the middle of the way to the hill. 
    There are ponds named Gadha teertha at hill bottom, Ungusta theerta at hill middle.Halfway up the mountain sits the temple of Parvathi.
     At the top of the mountain is the temple of Shiva. The Surya Sadashiva Temple is dedicated to Lord Shiva and his consort Goddess Parvati. 
     A devotee will have to climb ( only by foot ) as many as 555 steps in order to reach the Sri Karinjeshwara temple.
     
     When we reached the temple, first we sight a huge pond in “Gada” (Mace) shape – Gada Theertha (Huge pond) at the bottom of the Karinja hill 
     is 237 meter long, 55meter wide and 7meter deep size looks like a mirror with crystal clear water. After taking a dip in pond or at least after 
     sprinkling water over the head we have to start climbing the steps through Main entrance. From the main entrance from the road you have to start 
     stepping on the huge stone to reach this temple. In the starting point of Parvathi temple, you can see the Vinayaka Gudi. </p>
       <p className='m-[30px] justify-center  text-white'>Shiva temple is situated on the top of a hill, 1500 ft high from sea level, looks like temple is standing on a huge stone. 
        The temple architecture is built by stones. From Ukkadada bagilu” around 145 steps it’s the main entrance to Shiva temple. 
        The Shiva Sannidhi covered with “Shilamaya Shiva” Garbhagudi (shiva statue) “Metina Gudi” and a “Naivedya Kallu” (granite stone), 
        and offers an enchanting view of the surroundings.
</p>
    </div>
    <Footer/>
    </>
  )
}

export default page