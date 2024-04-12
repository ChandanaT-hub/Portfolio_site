import React from 'react'
import styles from "./Content2.module.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from "@/components/Footer/page";
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faBookOpen, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faAppStore, faApper } from '@fortawesome/free-brands-svg-icons';

const Contents2 = () => {
  return (
    <>
    <br></br>
    <div className={styles.flexcontainer21}>
          <br></br>
          <br></br>
                <p><span class={styles.span}>FEATURES</span></p>
                <h2 class="ml-20 mb-2 text-3xl"> What I Do</h2>
                <br></br>
                <div className={styles.boxes}>
                <div className={styles.box}>
                  <FontAwesomeIcon className={styles.icon} icon={faBars} style={{color:"#ad147d",}}/>
                    {/* <i class="fa-solid fa-bars" style="color:rgb(182, 34, 98);"></i> */}
                    <br></br>
                    <h1>Business Strategy</h1>  <br></br>
                    <p>I throw myself down among the tall gross by the streams on  i llie chose to the earth.
                    </p> 
                </div>
                <div className={styles.box}>
                <FontAwesomeIcon className={styles.icon} icon={faBookOpen} style={{color:"#ad147d",}}/>
                    {/* <i class="fa-sharp fa-solid fa-book-open" style="color:rgb(182, 34, 98);"></i> */}
                    <br></br>
                    <h1>App Development</h1>  <br></br>
                    <p>It uses a dictionary of over 200 latin words combined with 0 handle of model sentence.
                    </p> 
                    </div>
                <div className={styles.box}>
                <FontAwesomeIcon className={styles.icon} icon={faWifi} style={{color: "#c92c6b",}} />
                    {/* <i class="fa-sharp fa-solid fa-book-open" style="color:rgb(182, 34, 98);"></i> */}
                    <br></br>
                    <h1>App Development</h1>  <br></br>
                    <p>I throw myself down among the tall gross by the streams on  i llie chose to the earth.
                    </p> 
                </div>
                <div className={styles.box}>
                <FontAwesomeIcon className={styles.icon} icon={faMessage} style={{color:"#ad147d",}}/>
                    {/* <i class="fa-sharp fa-regular fa-message"style="color:rgb(182, 34, 98);"></i> */}
                    
                    <br></br>
                    <h1>Mobile App</h1>  <br></br>
                    <p>There are many variations of passengers of loreum ipsum evolution but the majority.
                    </p> 
                </div>
                <div className={styles.box}>
                <FontAwesomeIcon className={styles.icon} icon={faWifi} style={{color:"#ad147d",}}/>
                    {/* <i class="fa-solid fa-wifi" style="color:rgb(182, 34, 98);"></i> */}
    
                    <br></br>
                    <h1>CEO Marketing</h1>  <br></br>
                    <p>Always free from repetition injected humour of non chromatic words.
                    </p> 
                </div>
                <div className={styles.box}>
                <FontAwesomeIcon className={styles.icon} icon={faWifi} style={{color:"#ad147d",}}/>
                    {/* <i class="fa-solid fa-wifi" style="color:rgb(182, 34, 98);"></i> */}
                    <br></br>
                    <h1>Personal Portfolio April</h1>  <br></br>
                    <p>It uses a dictionary of over 200 latin words combined with 0 handle of model sentence.
                    </p> 
                </div>
            </div>
            
    
            
            </div>
            <Footer/>
    </>
  )
}

export default Contents2;