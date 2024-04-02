import React from 'react'
import Link from 'next/link'
import I1 from './Jamalabad.jpg';
import I2 from './jamalabad1.jpg'
import I3 from './j3.jpg'
import I4 from './j4.jpg'
const page = () => {
  return (
    <>
    <div className=' flex w-full h-[500px] bg-white'>

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
    <div className='w-full h-[500px] bg-white'>
    <h1 className=' text-3xl text-black text-center justify-center'>About Jamalabad Fort/Gadaikallu</h1>
    <p className='m-[30px] justify-center'>Jamalabad Fort is an old hilltop fortification in Killoor road, Belthangady, Dakshina Kannada District, Karnataka, India. 
      It is located in the Kudremukh range of hills, 8 km north of Beltangady town and 65 km from the city of Mangalore. 
      It is also referred locally as "Jamalabad Fort" or "Gadaikallu".The fort was built by Tipu Sultan in 1794 and named 
      after his mother, Jamalabee. He decided to build a fort there, as he was impressed by the massive granitic rock which was 
      suitable for the construction of a strong fort. According to locals, it was built to serve as a watch tower to see things 
      around when enemy attacked.there is a lake situated at the top which is used to store water, it’s truly mesmerising to watch 
      the sight.The fort is accessible via a narrow path, with around 1876 steps to the fort that are cut out of the granite hill and lead all the way to the top.
      Inside the fort, there is a tank to store rainwater. Remains of a single cannon lie at the top. Nothing much of the fortifications
       remain but hints of the fort wall with parapets are visible. The fort was captured by the British in 1799 during the 4th Mysore war.
        Legend has it that those out of favour with Tipu were hurled down the edge to their death.</p>
        <p className='m-[30px] justify-center'>Jamalabad Fort is a trekking destination, with the climb up to the fort being classified as 'medium difficulty level' and the top of the structure offering good views of the surrounding landscape and the Kudremukh range.

At the base of the hill is a forest check post where visitors have to pay a nominal entry fee. Visitors should carry food and plenty of water since there is no potable fresh water available on top. The nearest town with any communication and medical facilities is Beltangady.

Entry to the fort is open between 6 am and 4 pm and overnight stay at the fort is prohibited. This hillock fort has one room at the top.

There is also an unmanned microwave repeater station on top of the hill. Being a hill station it is really cold there and suggested to wear warm and comfortable clothes due to lot of walking.

The peak is 520m above MSL, while the surrounding area is less than 200m, meaning the trek is considerably steep.</p>
    </div>

    </>
  )
}

export default page