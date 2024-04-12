import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faCodePullRequest,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer/page";

const Features = () => {
  return (
    <>
      <Navbar />
      
        {/* <div className="mt-5  flex w-[100px] h-[100px] flex-wrap align-middle bg-stone-800"></div> */}
      <p className="text-5xl text-center mt-5 text-white">MY SKILLS</p>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-5 mb-[440px] xl:mb-[440px] lg:mb-[540px] md:mb-[550px] sm:mb-[500px]">
        <div className="skill-container">
          <FontAwesomeIcon icon={faJs} className={styles.icon} />
          <p className="ml-3 text-1xl text-white ">Javascript</p>
        </div>
        <div className="skill-container">
          <FontAwesomeIcon icon={faPython} className={styles.icon} />
          <p className="ml-5 text-1xl text-white ">Python</p>
        </div>
        <div className="skill-container">
          <FontAwesomeIcon icon={faHtml5} className={styles.icon} />
          <p className="ml-6 text-1xl text-white text-center">Html5</p>
        </div>
        <div className="skill-container">
          <FontAwesomeIcon icon={faCss3Alt} className={styles.icon} />
          <p className="ml-8 text-1xl text-white">CSS3</p>
        </div>
        <div className="skill-container">
          <FontAwesomeIcon icon={faReact} className={styles.icon} />
          <p className="ml-8 text-1xl text-white">React</p>
        </div>
        <div className="skill-container">
          <FontAwesomeIcon icon={faDatabase} className={styles.icon} />
          <p className="ml-7 text-1xl text-white">MySQL</p>
        </div>
        <div className="skill-container">
          <FontAwesomeIcon icon={faCodePullRequest} className={styles.icon} />
          <p className="ml-3 text-1xl text-white">Git source control</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Features;
