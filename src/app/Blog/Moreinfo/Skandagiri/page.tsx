import React from 'react'
import I1 from './s1.jpg';
import I2 from './s2.jpg'
import I3 from './s3.jpg';
import I4 from './s4.jpg';
import Footer from '@/components/Footer/page';
import styles from './page.module.css'
const page = () => {
  return (
    <>
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
    <h1 className=' text-3xl text-center justify-center text-pink-600'>About Skandagiri hills</h1>
    <p className='m-[30px] justify-center  text-white'>
    Skandagiri is one of the most sought treks around Bangalore for its spectacular misty views and the clouds over the hills. 
    The night trek is a dream come true for trekkers, and nature lovers and is a paradise for photographers. 
    Climb up the hills through the wilderness and lush green dense forest to reach the top of the hills. 
    Skandagiri stands tall at a height of approximately 1350 mts overlooking Nandi hills and Muddenahalli.
    Skandagiri is famous for its sunrise trek which can be done throughout the year. However, if you do not wish to trek during the night,
     winter is the best time to trek Skandagiri. Summers are harsh and should be avoided. Although the fauna and flora add beauty to the 
     mesmerizing trek during monsoon, it should be avoided. The rocks and the boulders become slippery and challenging to trek.
      
      
     </p>
        <p className='m-[30px] justify-center  text-white'>Trekker’s paradise and a delight for nature lovers, Skandagiri takes about 6-8 hours to complete the 8 km trek distance. 
        The ruins of the fort and a Shiva Temple on the top of the hills will leave you awestruck. Just 70 km away from Bangalore, Skandagiri is famous for its sunrise views 
        and hence the night trek. The picture-perfect sunrise views after the strenuous trek are worth the effort.
      </p>
    </div>
    <Footer/>
    </>
    </>
  )
}

export default page