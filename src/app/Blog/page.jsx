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

  const slides = [
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
    {
      url: "https://www.miraclegardenblog.com/pictures/pictures-dubai-miracle-garden.jpg",
    },
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
    {
      url: "https://www.miraclegardenblog.com/pictures/pictures-dubai-miracle-garden.jpg",
    },
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



  return (
    <>
      <Navbar />
      <h2 className="mt-5 text-5xl text-pink-600 text-center">
        WELCOME TO MY TRAVEL BLOG
      </h2>
        <button className={styles.button1}>
          <Link href="./Blog/Moreinfo">More Info</Link>{" "}
        </button>
        <br />
        <p className=" text-white text-center mt-5">
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
          <div className="max-w-lg mx-auto h-[340px] w-[600px] bg-white rounded-lg shadow-lg overflow-hidden z-50">
            <img src={slides[currentindex].url} alt={slides[currentindex].place} />
            <button className="absolute top-0 right-0 p-3 text-white" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
        
      )}
      {modalOpen1 && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="absolute inset-0 bg-black opacity-75" onClick={closeModal1}></div>
          <div className="max-w-lg mx-auto h-[340px] w-[600px] bg-white rounded-lg shadow-lg overflow-hidden z-50">
            <img src={slides1[currentindex].url} alt={slides1[currentindex].place} />
            <button className="absolute top-0 right-0 p-3 text-white" onClick={closeModal1}>
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
