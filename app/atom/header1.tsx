 
"use client"
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";

const Header1 = ()=>{
  const targetRefhome = useRef(null);
  const router = useRouter();

  const [drop,setDrop]=useState(false)

  const homebutton = () => {
    router.push('/');
    setDrop(false)
  };



  const aboutbutton = () => {
      router.push('/about');
      setDrop(false)
};

const departmentbutton = () => {
  router.push('/department');
  setDrop(false)
};

const servicesbutton = () => {
  router.push('/services');
  setDrop(false)
};


const docterbutton = () => {
  router.push('/docters');
  setDrop(false)
};

const corporatebutton = () => {
  router.push('/corporate');
  setDrop(false)
};
const gallerybutton = () => {
  router.push('/gallery');
  setDrop(false)
};
const healthbutton = () => {
  router.push('/health-plan');
  setDrop(false)
};


const opendropdown= ()=>{
  setDrop(!drop)
}

  

 return (
        <>
        <header className='fixed mt-20'>
      <div className="nav_2">
        <div className="logo"><a href="#">LOGO</a></div>

        <ul className="links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Departments</a></li>
          <li><a href="#">Doctors</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="buttons">
          <i className="fa-solid fa-magnifying-glass"></i>
          <button>APPOINTMENT <i className="fa-solid fa-chevron-right"></i></button>
        </div>

        <div className="bars_sear">
          <i className="fa-solid fa-magnifying-glass sear"></i>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
       </header>
        </> 
 )   
}

export default Header1;
