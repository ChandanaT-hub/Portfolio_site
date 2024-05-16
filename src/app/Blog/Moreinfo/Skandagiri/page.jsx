
'use client'
import React, { useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import Footer from '@/components/Footer/page';
import styles from './page.module.css';
import I1 from './s1.jpg';
import I2 from './s2.jpg'
import I3 from './s3.jpg';
import I4 from './s4.jpg';


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
            className='rounded-[15%] ml-[55px] w-[300px] h-[400px] bg-gray-500 mt-9 bg-no-repeat hover:scale-110 transition duration-500 cursor-pointer relative'
            onClick={() => openModal(image)}
          >
            <Image src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-[15%]"  />
          </div>
        ))}
      </div>
      <div className={styles.para}>
        {/* Your content */}
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
      <Footer />
      {modalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="absolute inset-0 bg-black opacity-75" onClick={closeModal}></div>
          <div className=" mx-auto h-[600px] w-[1000px]  shadow-lg overflow-hidden z-50">
            <Image className={styles.slide1} src={currentImage} alt="fullscreen"   />
            <button className="absolute top-0 right-0 p-3 text-white" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
