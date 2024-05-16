"use client";
import styles from "./page.module.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import React, { useState } from "react";
import I1 from "./Dubai-Miracle-Garden.jpg";
import I2 from "./mg.jpg";

import Footer from "@/components/Footer/page";
const Dubai = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [currentindex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentindex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentindex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    console.log("next");
    const isLastSlide = currentindex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentindex + 1;
    setCurrentIndex(newIndex);
  };
  const slides = [
    {
      url: "https://i0.wp.com/kashmirtimes.com/wp-content/uploads/2024/02/Dubai-Miracle-Garden.jpeg?fit=1200%2C900&ssl=1",
    },
    {
      url: "https://cdn-imgix.headout.com/media/images/87fe888ad84ca93587d655d433df6de5-2862-dubai-dubai-miracle-garden-01.jpg",
    },
    {
      url: "https://offloadmedia.feverup.com/secretdubai.co/wp-content/uploads/2023/05/07175320/Dubai-Miracle-Garden-6-e1683240077348.jpg",
    },
    {
      url: "https://media1.thrillophilia.com/filestore/rmwzo1v2htd55vnqw0p8le9edtva_shutterstock_1633679359.jpg",
    },
    {
      url: "https://media1.thrillophilia.com/filestore/k1qoceenud1mh1qvrbx7373wn4n6_shutterstock_1909808107.jpg",
    },
  ];
  const slides1 = [
    {
      url: "https://media1.thrillophilia.com/filestore/agvbw3csgyuqcql2ooatjgepkyzs_Global_Village_6f5fc1b5b9.jpg",
    },
    {
      url: "https://image.khaleejtimes.com/?uuid=6abbbd17-dd65-4aa6-980d-d533e90237cf&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.84375&x=0&y=0&width=1200&height=675",
    },
    {
      url: "https://www.sweet-home-dubai.com/wp-content/uploads/2020/10/2020-10-16_02-32-48_802056.jpg",
    },
    {
      url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/81/38/b9.jpg",
    },
    {
      url: "https://dubaipeople.ae/wp-content/uploads/2021/03/cover-2.jpg",
    },
  ];
  const slides2 = [
    {
      url: "https://www.visitdubaishoppingfestival.com/wp-content/uploads/2013/08/Overnight-safari.jpg",
    },
    {
      url: "https://cdn-imgix-open.headout.com/blog/dubai-guide/desert-safari.png",
    },
    {
      url: "https://pickyourtrail.com/blog/wp-content/uploads/2019/06/falconry-768x512.jpg",
    },
    {
      url: "https://www.dishaglobaltours.com/wp-content/uploads/2019/06/Dune-Bashing-Dubai.jpg",
    },
    {
      url: "https://thedesertsafaridubai.com/wp-content/uploads/2020/11/fire-show-in-dubai-desert.jpg",
    },
  ];
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

  return (
    <>
      <div className=" text-5xl w-full h-full text-center text-white mt-5">
        DUBAI
        <div className={styles.div}>
          <div
            style={{ backgroundImage: `url(${slides[currentindex].url})` }}
            className={styles.slide}  onClick={openModal}
          >
           
            <p className={styles.pheading}>MIRACLE GARDEN</p>
            <br></br>
            <p className={styles.para}>
              Dubai Miracle Garden is a breathtaking botanical wonder located in
              Dubai, UAE. It was established in 2013 and is known as the world's
              largest natural flower garden. This miracle garden covers a vast
              expanse of more than 72,000 square meters and features over 150
              million flowers from 120 plant varieties of plants. These
              beautiful flowers create an astonishing array of sculptures and
              formations. Landscape artist Akar is the mastermind behind its
              design that incorporates various structures and themes, including
              pyramids, heart-shaped arches, and an Emirates A380 aeroplane
              covered in flowers. Dubai’s Miracle Garden has become a prominent
              tourist attraction, drawing admirers worldwide to adore its floral
              creativity and splendour.
            </p></div>
            <div className={styles.left}>
              <BsChevronCompactLeft size={30} onClick={prevSlide} />
            </div>
            <div className={styles.right}>
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
        </div>
        <div className={styles.div}>
          <div
            style={{ backgroundImage: `url(${slides1[currentindex].url})` }}
            className={styles.slide}  onClick={openModal1}
          >
            
            <p className={styles.pheading}> GLOBAL VILLAGE</p>
            <br></br>
            <p className={styles.para}>
              Indulge in a global adventure with entertainment from around the
              world in nightly concerts and shows, featuring artists who create
              a mix of wonder, music and comedy at the World Culture Stage.
              While thrill-seekers can keep their energy high on the daring
              carnival rides, foodies will want to plan a feast with a taste of
              international dishes at the many restaurants, cafes and street
              food kiosks onsite. Restaurants at Global Village that have
              captivated visitors include the likes of Bosnian House and
              Floating Market, but it's a great spot to try something new every
              time you visit.
            </p>
          </div>
          <div className={styles.left}>
              <BsChevronCompactLeft size={30} onClick={prevSlide} />
            </div>
            <div className={styles.right}>
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
        </div>
        <div className={styles.div}>
          <div
            style={{ backgroundImage: `url(${slides2[currentindex].url})` }}
            className={styles.slide}  onClick={openModal2}
          >
            
            <p className={styles.pheading}>DESERT SAFARI</p>
            <br></br>
            <p className={styles.para}>
              Embark on a thrilling Dubai Desert Safari, where 4x4 vehicles
              traverse majestic sand dunes, offering heart-pounding dune bashing
              adventures. Witness a breathtaking sunset spectacle, followed by a
              cultural immersion at a traditional desert camp. Enjoy Tanoura and
              fire dance performances under the starlit sky, while indulging in
              a sumptuous Arabian feast with grilled meats, aromatic rice, and
              delectable desserts. Experience the ancient art of falconry and
              camel riding, immersing yourself in the rich heritage of the
              Arabian desert. This unforgettable journey promises adrenaline,
              cultural enrichment, and culinary delights—a quintessential Dubai
              experience in just one exhilarating escapade.
            </p>
          </div>
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
          <div className=" mx-auto h-[600px] w-[900px]  rounded-lg shadow-lg overflow-hidden z-50">
            <img src={slides[currentindex].url} alt={slides[currentindex].place} className={styles.slide1} />
            <button className="absolute top-0 right-0 p-3 text-white text-xs" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
        
      )}
      {modalOpen1 && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="absolute inset-0 bg-black opacity-75" onClick={closeModal1}></div>
          <div className="mx-auto h-[600px] w-[900px] rounded-lg shadow-lg overflow-hidden z-50">
            <img src={slides1[currentindex].url} alt={slides1[currentindex].place} className={styles.slide1} />
            <button className="absolute top-0 right-0 p-3 text-white text-xs" onClick={closeModal1}>
              X
            </button>
           
          </div>
        </div>
        
      )}
      {modalOpen2 && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="absolute inset-0 bg-black opacity-75" onClick={closeModal2}></div>
          <div className=" mx-auto h-[600px] w-[900px]  rounded-lg shadow-lg overflow-hidden z-50">
            <img src={slides2[currentindex].url} alt={slides2[currentindex].place} className={styles.slide1} />
            <button className="absolute top-0 right-0 p-3 text-white text-xs" onClick={closeModal2}>
              X
            </button>
          </div>
        </div>
        
      )}
      </div>
      <Footer />
    </>
  );
};

export default Dubai;
