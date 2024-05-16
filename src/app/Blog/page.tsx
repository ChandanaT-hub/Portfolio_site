// Blog.js
"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navigation/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer/page";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import styles from "./page.module.css";


const Blog = () => {
  const [currentindex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentindex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentindex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentindex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentindex + 1;
    setCurrentIndex(newIndex);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal1 = () => {
    setModalOpen1(true);
  };

  const closeModal1 = () => {
    setModalOpen1(false);
  };
  const openModal2 = () => {
    setModalOpen2(true);
  };

  const closeModal2 = () => {
    setModalOpen2(false);
  };

  const slides = [
    // change
    {
      url: "https:www.chikkamagalurustays.in/wp-content/uploads/2015/08/Jamalabad-Fort-Gadaikallu-4.jpg",
      place: "Gadaikallu,Belthangady",
    },
    {
      url: "https://lightuptemples.com/wp-content/uploads/2023/01/2021-01-16.jpg",
      place: "Kaaringeshwara,Bantwal",
    },
    {
      url: "https://moxtain.s3.ap-south-1.amazonaws.com/blogs/SkandagiriHillsTrek/skandagiri-trek-sunrise.jpg",
      place: "Skandagiri,Bangalore",
    },
    {
      url: "https://i.pinimg.com/originals/ee/6e/70/ee6e70edb91f21e02743242258aef12e.jpg",
    },
    // {
    //   url: "https://www.miraclegardenblog.com/pictures/pictures-dubai-miracle-garden.jpg",
    // },
    {
      url: "https://www.artnews.com/wp-content/uploads/2022/05/Museum-of-Future-Exterior-3.jpg?w=1200",
    },
    {
      url: "https://t3.ftcdn.net/jpg/03/54/44/76/360_F_354447633_eaplJq9O6YW4YhPODKtWxNtgVg8xBKbg.jpg",
    },
    {
      url: "https://tripventura.com/cdn/shop/files/df_cbb71117-e82c-4837-ba23-d74e6ab926a0.jpg?v=1703678560&width=1946",
    },
  ];
  const slides1 = [
    // {
    //   url: "https://www.miraclegardenblog.com/pictures/pictures-dubai-miracle-garden.jpg",
    // },
    {
      url: "https://www.artnews.com/wp-content/uploads/2022/05/Museum-of-Future-Exterior-3.jpg?w=1200",
    },
    {
      url: "https://t3.ftcdn.net/jpg/03/54/44/76/360_F_354447633_eaplJq9O6YW4YhPODKtWxNtgVg8xBKbg.jpg",
    },
    {
      url: "https://tripventura.com/cdn/shop/files/df_cbb71117-e82c-4837-ba23-d74e6ab926a0.jpg?v=1703678560&width=1946",
    },
    {
      url: "https:www.chikkamagalurustays.in/wp-content/uploads/2015/08/Jamalabad-Fort-Gadaikallu-4.jpg",
      place: "Gadaikallu,Belthangady",
    },
    {
      url: "https://lightuptemples.com/wp-content/uploads/2023/01/2021-01-16.jpg",
      place: "Kaaringeshwara,Bantwal",
    },
    {
      url: "https://moxtain.s3.ap-south-1.amazonaws.com/blogs/SkandagiriHillsTrek/skandagiri-trek-sunrise.jpg",
      place: "Skandagiri,Bangalore",
    },
    {
      url: "https://i.pinimg.com/originals/ee/6e/70/ee6e70edb91f21e02743242258aef12e.jpg",
    },
  ];
  const slides2 = [
    {
      url: "https://t3.ftcdn.net/jpg/03/54/44/76/360_F_354447633_eaplJq9O6YW4YhPODKtWxNtgVg8xBKbg.jpg",
    },
    {
      url: "https://tripventura.com/cdn/shop/files/df_cbb71117-e82c-4837-ba23-d74e6ab926a0.jpg?v=1703678560&width=1946",
    },
    {
      url: "https:www.chikkamagalurustays.in/wp-content/uploads/2015/08/Jamalabad-Fort-Gadaikallu-4.jpg",
      place: "Gadaikallu,Belthangady",
    },
    // {
    //   url: "https://www.miraclegardenblog.com/pictures/pictures-dubai-miracle-garden.jpg",
    // },
    {
      url: "https://www.artnews.com/wp-content/uploads/2022/05/Museum-of-Future-Exterior-3.jpg?w=1200",
    },
    {
      url: "https://moxtain.s3.ap-south-1.amazonaws.com/blogs/SkandagiriHillsTrek/skandagiri-trek-sunrise.jpg",
      place: "Skandagiri,Bangalore",
    },
    {
      url: "https://i.pinimg.com/originals/ee/6e/70/ee6e70edb91f21e02743242258aef12e.jpg",
    },
    
    {
      url: "https://lightuptemples.com/wp-content/uploads/2023/01/2021-01-16.jpg",
      place: "Kaaringeshwara,Bantwal",
    },
    
  ];



  return (
    <>
      <Navbar />
      <h2 className="mt-10 text-5xl text-white text-center">
        WELCOME TO MY TRAVEL BLOG
      </h2>
        <button className={styles.button1}>
          <Link href="./Blog/Moreinfo">More Info</Link>
        </button>
        <br />
        <p className=" text-white text-center mt-5 mb-5">
          YOU CAN EXPLORE THE FOLLOWING PLACES
        </p>
        <div className={styles.container}>
    
        <div
          style={{ backgroundImage: `url(${slides[currentindex].url})` }}
          className={styles.slide}  onClick={openModal}
        ></div>
        <div
          style={{ backgroundImage: `url(${slides1[currentindex].url})` }}
          className={styles.slide}  onClick={openModal1}
        ></div>
        <div
          style={{ backgroundImage: `url(${slides2[currentindex].url})` }}
          className={styles.slide}  onClick={openModal2}
        ></div>

        <div className={styles.left}>
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>
        <div className={styles.right}>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="absolute inset-0 bg-black opacity-75" onClick={closeModal}></div>
          <div className=" mx-auto h-[600px] w-[900px]   shadow-lg overflow-hidden z-50">
            <img src={slides[currentindex].url} alt={slides[currentindex].place} className={styles.slide1} />
            <button className="absolute top-0 right-0 p-3 text-white" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
        
      )}
      {modalOpen1 && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="absolute inset-0 bg-black opacity-75" onClick={closeModal1}></div>
          <div className="mx-auto h-[600px] w-[900px]  shadow-lg overflow-hidden z-50">
            <img src={slides1[currentindex].url} alt={slides1[currentindex].place} className={styles.slide1} />
            <button className="absolute top-0 right-0 p-3 text-white" onClick={closeModal1}>
              X
            </button>
          </div>
        </div>
        
      )}
      {modalOpen2 && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="absolute inset-0 bg-black opacity-75" onClick={closeModal2}></div>
          <div className=" mx-auto h-[600px] w-[900px] shadow-lg overflow-hidden z-50">
            <img src={slides2[currentindex].url} alt={slides2[currentindex].place} className={styles.slide1} />
            <button className="absolute top-0 right-0 p-3 text-white" onClick={closeModal2}>
              X
            </button>
          </div>
        </div>
        
      )}
      <Footer />
    </>
  );
};

export default Blog;
