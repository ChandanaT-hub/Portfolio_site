"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import Footer from "@/components/Footer/page";
import styles from "./page.module.css";
import I1 from "./images/Jamalabad.jpg";
import I2 from "./images/jamalabad1.jpg";
import I3 from "./images/j3.jpg";
import I4 from "./images/j4.jpg";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const slides = [I1, I2, I3, I4];

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentImage(null); // Reset the current image when closing modal
    setModalOpen(false);
  };

  return (
    <>
      <div className={styles.container}>
        {slides.map((image, index) => (
          <div
            key={index}
            className="rounded-[15%] ml-[55px] w-[300px] h-[400px] bg-gray-500 mt-9 bg-no-repeat hover:scale-110 
            transition duration-500 cursor-pointer relative"
            onClick={() => openModal(image)}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-[15%]"
            />
          </div>
        ))}
      </div>
      <div className={styles.para}>
        {/* Your content */}/{" "}
        <h1 className="xl: text-3xl  text-center justify-center text-pink-600 sm:mt-10">
          About Jamalabad Fort/Gadaikallu
        </h1>
        <p className="m-[30px] justify-center text-white">
          Jamalabad Fort is an old hilltop fortification in Killoor road,
          Belthangady, Dakshina Kannada District, Karnataka, India. It is
          located in the Kudremukh range of hills, 8 km north of Beltangady town
          and 65 km from the city of Mangalore. It is also referred locally as
          "Jamalabad Fort" or "Gadaikallu".The fort was built by Tipu Sultan in
          1794 and named after his mother, Jamalabee. He decided to build a fort
          there, as he was impressed by the massive granitic rock which was
          suitable for the construction of a strong fort. According to locals,
          it was built to serve as a watch tower to see things around when enemy
          attacked.there is a lake situated at the top which is used to store
          water, it’s truly mesmerising to watch the sight.The fort is
          accessible via a narrow path, with around 1876 steps to the fort that
          are cut out of the granite hill and lead all the way to the top.
          Inside the fort, there is a tank to store rainwater. Remains of a
          single cannon lie at the top. Nothing much of the fortifications
          remain but hints of the fort wall with parapets are visible. The fort
          was captured by the British in 1799 during the 4th Mysore war. Legend
          has it that those out of favour with Tipu were hurled down the edge to
          their death.
        </p>
        <p className="m-[30px] justify-center  text-white ">
          Jamalabad Fort is a trekking destination, with the climb up to the
          fort being classified as 'medium difficulty level' and the top of the
          structure offering good views of the surrounding landscape and the
          Kudremukh range. At the base of the hill is a forest check post where
          visitors have to pay a nominal entry fee. Visitors should carry food
          and plenty of water since there is no potable fresh water available on
          top. The nearest town with any communication and medical facilities is
          Beltangady. Entry to the fort is open between 6 am and 4 pm and
          overnight stay at the fort is prohibited. This hillock fort has one
          room at the top. There is also an unmanned microwave repeater station
          on top of the hill. Being a hill station it is really cold there and
          suggested to wear warm and comfortable clothes due to lot of walking.
          The peak is 520m above MSL, while the surrounding area is less than
          200m, meaning the trek is considerably steep.
        </p>
      </div>
      <Footer />
      {modalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-75"
            onClick={closeModal}
          ></div>
          <div className=" mx-auto h-[600px] w-[1000px]  shadow-lg overflow-hidden z-50">
            <Image
              className={styles.slide1}
              src={currentImage}
              alt="fullscreen"
            />
            <button
              className="absolute top-0 right-0 p-3 text-white"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;

// 'use client'
// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image';
// import I1 from './images/Jamalabad.jpg';
// import I2 from './images/jamalabad1.jpg'
// import I3 from './images/j3.jpg'
// import Footer from '@/components/Footer/page';
// import { useState } from 'react';
// import I4 from './images/j4.jpg'
// import styles from './page.module.css';
// const page = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [currentImage, setCurrentImage] = useState(null);
//   const slides = [I1, I2, I3, I4];

//   const openModal = (image) => {
//     setCurrentImage(image);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setCurrentImage(null); // Reset the current image when closing modal
//     setModalOpen(false);
//   };

//   return (
//     <>
//     <div className={styles.container}>
//         {slides.map((image, index) => (
//           <div
//             key={index}
//             className='rounded-[15%] ml-[60px] w-[300px] h-[400px] bg-gray-500 mt-9 bg-no-repeat hover:scale-110 transition duration-500 cursor-pointer relative'
//             onClick={() => openModal(image)}
//           >
//             <Image src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-[15%]"  />
//           </div>
//         ))}
//       </div>
//       <div className={styles.para}>

//     <h1 className='xl: text-3xl  text-center justify-center text-pink-600 sm:mt-10'>About Jamalabad Fort/Gadaikallu</h1>
//     <p className='m-[30px] justify-center text-white'>Jamalabad Fort is an old hilltop fortification in Killoor road, Belthangady, Dakshina Kannada District, Karnataka, India.
//       It is located in the Kudremukh range of hills, 8 km north of Beltangady town and 65 km from the city of Mangalore.
//       It is also referred locally as "Jamalabad Fort" or "Gadaikallu".The fort was built by Tipu Sultan in 1794 and named
//       after his mother, Jamalabee. He decided to build a fort there, as he was impressed by the massive granitic rock which was
//       suitable for the construction of a strong fort. According to locals, it was built to serve as a watch tower to see things
//       around when enemy attacked.there is a lake situated at the top which is used to store water, it’s truly mesmerising to watch
//       the sight.The fort is accessible via a narrow path, with around 1876 steps to the fort that are cut out of the granite hill and lead all the way to the top.
//       Inside the fort, there is a tank to store rainwater. Remains of a single cannon lie at the top. Nothing much of the fortifications
//        remain but hints of the fort wall with parapets are visible. The fort was captured by the British in 1799 during the 4th Mysore war.
//         Legend has it that those out of favour with Tipu were hurled down the edge to their death.</p>
//         <p className='m-[30px] justify-center  text-white '>Jamalabad Fort is a trekking destination, with the climb up to the fort being classified as 'medium difficulty level' and the top of the structure offering good views of the surrounding landscape and the Kudremukh range.

// At the base of the hill is a forest check post where visitors have to pay a nominal entry fee. Visitors should carry food and plenty of water since there is no potable fresh water available on top. The nearest town with any communication and medical facilities is Beltangady.

// Entry to the fort is open between 6 am and 4 pm and overnight stay at the fort is prohibited. This hillock fort has one room at the top.

// There is also an unmanned microwave repeater station on top of the hill. Being a hill station it is really cold there and suggested to wear warm and comfortable clothes due to lot of walking.

// The peak is 520m above MSL, while the surrounding area is less than 200m, meaning the trek is considerably steep.</p>
//     </div>
//     {modalOpen && (
//         <div className="fixed inset-0 flex justify-center items-center z-50">
//           <div className="absolute inset-0 bg-black opacity-75" onClick={closeModal}></div>
//           <div className=" mx-auto h-[600px] w-[1000px]  rounded-lg shadow-lg overflow-hidden z-50">
//             <Image className={styles.slide1} src={currentImage} alt="fullscreen"   />
//             <button className="absolute top-0 right-0 p-3 text-white" onClick={closeModal}>
//               X
//             </button>
//           </div>
//         </div>
//       )}
//     <Footer/>
//     </>
//   )
// }

// export default page
