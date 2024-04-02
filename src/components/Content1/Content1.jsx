import React from "react";
import Image from "next/image";
import Link from "next/link";

import { faFacebook, faLinkedin ,faInstagram ,} from '@fortawesome/free-brands-svg-icons';
import { faGem } from "@fortawesome/free-solid-svg-icons";
import ProfileImg from "./profile.jpeg";
import Figma from "./figma.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Content1.module.css";


const content1 = () => {
  return (
    <div className={styles.con}>
      <div
        className="flex gap-1 bg-rgb(44,43,43)"
        height={300}
        width={400}
      >
        <div className={styles.flex}>
          <div className={styles.content}>
            <div>
              <p>WELCOME TO MY WORLD</p>

              <h1 class="mb-4 text-4xl">
                Hi,I'm <span className={styles.span}>Chandana T <br></br></span>a
                Developer.
              </h1>

              <p class="mb-2 text-1xl">
              Seeking position to utilize my skills and abilities in the information technology 
              industry that offers me professional growth while being resourceful, innovative 
              and flexible.
               {/* Entry level position in software development. */}
              </p>
              <div className={styles.main}>
                <div
                  className={styles.flexcontainer1}
                >
                  <div>
                    <p>FIND WITH ME</p>
                  </div>

                  <div className={styles.container2}>
                    <div className={styles.flex1}>
                      <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                      {/* <FontAwesomeIcon icon="fa-brands fa-facebook" style={{color: "#fafafa",}} /> */}
                    </div>
                    <div className={styles.flex1}>
                    <Link href="https://www.instagram.com/chandana.y.t?igsh=OGYwMnRqNGdtMHU4">
                    <FontAwesomeIcon icon={faInstagram} className={styles.icon}/>
                    </Link>
                      {/* <FontAwesomeIcon icon="fa-brands fa-instagram" style={{color: "#fafafa",}} /> */}
                    </div>
                    <div className={styles.flex1}>
                    <Link href="https://www.linkedin.com/in/chandana-t-51b0531a2">
                    <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                    </Link>
                      {/* <FontAwesomeIcon icon="fa-brands fa--linkedin" style={{color: "#fafafa",}} /> */}
                    </div>
                  </div>
                  
                </div>

                <div
                  className="flex-col mt-9 gap-1 bg-rgb(44, 43, 43)"
                  height={60}
                  width={160}
                >
                  <div>
                    <p>BEST SELL ON</p>
                  </div>
                  <div className={styles.container2}>
                    <div className={styles.flex1}>
                    <Link href="https://www.linkedin.com/in/chandana-t-51b0531a2">
                    <FontAwesomeIcon icon={faLinkedin} className={styles.icon} style={{color: "#c92c6b",}} />
                    </Link>
                      {/* <FontAwesomeIcon icon="fa-brands fa--linkedin" style={{color: "#fafafa",}} /> */}
                    </div>

                    <div className={styles.flex1}>
                    
                    <FontAwesomeIcon icon={faGem} style={{color: "#c92c6b",}} />
                      {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-gem" style={{color: "#fafafa",}} /> */}
                    </div>
                  <div className={styles.flex1}>
                    <Image src={Figma} alt="fig"></Image>
                  </div>
                 
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.images}>
                <div className={styles.shape}>
                    <Image src={ProfileImg} alt="profile"></Image>
                </div>
            </div>
        </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default content1;
