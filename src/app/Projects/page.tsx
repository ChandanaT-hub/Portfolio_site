import React from 'react'
import I1 from './p1.jpg'
import I2 from './p2.jpg'
import I3 from './p3.jpg'
import styles from './page.module.css'
const projects = () => {
  return (
    <>
    <div className={styles.container}>
    <p className='text-5xl text-black text-center'>My Projects</p>


    <div className='flex rounded-3xl ml-[100px] w-[300px] h-[400px] mt-36 bg-gray-500  bg-no-repeat hover:scale-110 transition duration-500 cursor-pointer'
       style={{backgroundImage:`url(${I1.src})`}}>  
      
   
        <div className={styles.content}>
        <p className='text-3xl'>Library Management system</p>
        <p className='text-1xl w-[600px]'>I developed a comprehensive Library Management System utilizing a range of cutting-edge technologies to streamline
         library book processes. The system features a robust interface with functionalities for Create, Read, Update, and Delete (CRUD) operations, 
         ensuring efficient management of library resources. Additionally, I integrated a secure user authentication system to grant exclusive access 
         to administrators.The core of the system is built on Django, a high-level Python web framework renowned for its scalability and versatility.
         For data storage and management, I utilized SQLite, a lightweight and efficient relational database management system.  </p>
         <p className='text-1xl w-[600px]'>The Library Management System represents a sophisticated solution tailored to the specific needs of library management. By leveraging Django,
             Python, SQLite, HTML, and CSS, I have created a versatile and efficient platform that optimizes book management processes while prioritizing 
             usability and security.</p>
        </div>     
    </div>

    <div className='flex rounded-3xl ml-[100px] w-[300px] h-[400px] mt-36 bg-gray-500  bg-no-repeat hover:scale-110 transition duration-500 cursor-pointer'
       style={{backgroundImage:`url(${I2.src})`}}>  
      
      <div className={styles.content}>
      <p className='text-3xl'>To Do App</p>
        <p className='text-1xl w-[600px]'>I designed and implemented a robust To-Do application utilizing Django, Python, SQLite, HTML, and 
        CSS. The application features comprehensive functionalities for Create, Read, Update, and Delete (CRUD) operations, enabling users 
        to effortlessly manage their tasks. Additionally, I integrated a secure user authentication system, allowing administrators exclusive
         access to manage tasks and user accounts. Leveraging Django's powerful features, I ensured scalability and efficiency in handling 
         task data and user interactions. The intuitive interface, designed using HTML and CSS, prioritizes user experience, enhancing ease 
         of task management. Overall, the To-Do application offers a seamless and secure platform for organizing tasks, making it an 
         indispensable tool for personal and professional productivity.
        </p>

      </div>
    </div>

    <div className='flex rounded-3xl ml-[100px] w-[300px] h-[400px] mt-36 bg-gray-500  bg-no-repeat hover:scale-110 transition duration-500 cursor-pointer'
       style={{backgroundImage:`url(${I3.src})`}}>  
      
      <div className= {styles.content}>
      <p className='text-3xl'>Portfolio Website</p>
        <p className='text-1xl w-[600px]'>Crafted with meticulous attention to detail, my portfolio website represents a fusion of aesthetic appeal and seamless
         functionality, driven by the dynamic Django framework. With Django's versatility, I've ensured the website remains effortlessly updatable, allowing for 
         the addition of the latest achievements and details via an intuitive admin panel. Leveraging Python and SQLite, I've created a robust backend infrastructure,
          while HTML, CSS, and Javascript come together to deliver an engaging and interactive user experience. This amalgamation of technologies ensures the website 
          not only showcases my work effectively but also offers visitors a smooth and enjoyable browsing experience.
        </p>

      </div> 
    </div>
    </div>
    </>
  )
}

export default projects;