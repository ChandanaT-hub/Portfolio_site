import React from "react";
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
import { Metadata } from "next";
export const metadata:Metadata={
  title:"Skills"
}
const Features = () => {
  return (
    <>
      <Navbar/>
      <p className="text-5xl text-center mt-10 text-white">MY SKILLS</p>
      <div className="flex flex-wrap justify-center items-center gap-4 mb-[400px] 
      xl:mb-[285px] mt-36 lg:mb-[480px] md:mb-[550px] sm:mb-[500px]">
        <div className="skill-container">
          <FontAwesomeIcon icon={faJs} className={styles.icon}/>
          <p className="ml-5 text-1xl text-white ">Javascript</p>
        </div>
        <div className="skill-container">
          <FontAwesomeIcon icon={faPython} className={styles.icon} />
          <p className="ml-9 text-1xl text-white ">Python</p>
        </div>
        <div className="skill-container">
          <FontAwesomeIcon icon={faHtml5} className={styles.icon} />
          <p className="ml-6 text-1xl text-white text-center">Html5</p>
        </div>
        <div className="skill-container">
          <FontAwesomeIcon icon={faCss3Alt} className={styles.icon} />
          <p className="ml-11 text-1xl text-white">CSS3</p>
        </div>
        <div className="skill-container">
          <FontAwesomeIcon icon={faReact} className={styles.icon} />
          <p className="ml-11 text-1xl text-white">React</p>
        </div>
        <div className="skill-container">
          <FontAwesomeIcon icon={faDatabase} className={styles.icon} />
          <p className="ml-10 text-1xl text-white">MySQL</p>
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
