import Image from "next/image";
import Link from "next/link";
import ProfileImg from './profile.jpeg';
import styles from './styles.module.css';
import './globals.css';
import  Navbar  from "../components/Navigation/Navbar";
import  Content1  from "../components/Content1/Content1";
import  Content2  from "../components/Content2/Content2";


export default function Home() {
  return (
    <>
  <Navbar/>
  <Content1/>
  <Content2/>

  </>
  );
}
