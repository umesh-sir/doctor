 
"use client"
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";

const Header = ()=>{
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
        
      <div className="grid lg:fixed md:fixed shadow-lg z-50 fixed lg:h-20 h-16 w-full bg-blue-600 grid-cols-12">
       <div className="col-span-2">
       <img className=" p-2 align-middle lg:h-20 h-16 w-20" src="dr.jpeg"></img>
       </div>
        <ul  className="lg:flex md:hidden hidden font-bold capitalize items-center  justify-between col-span-8">
        <li className="hover:cursor-pointer" onClick={homebutton}>home</li>
        <li className="hover:cursor-pointer" onClick={aboutbutton}>about us</li>
        <li className="hover:cursor-pointer" onClick={departmentbutton}>department</li>
        <li className="hover:cursor-pointer" onClick={servicesbutton}>services</li>
        <li className="hover:cursor-pointer" onClick={docterbutton}>docter team</li>
        <li className="hover:cursor-pointer" onClick={corporatebutton}>our corporate</li>
        <li className="hover:cursor-pointer" onClick={gallerybutton}>gallery</li>
        <li className="hover:cursor-pointer" onClick={healthbutton}>health checkup plan</li>
        </ul>
      
       <div className="col-span-8 capitalize text-2xl font-bold flex items-center lg:hidden justify-center">
         ajay hospital
       </div>
       <div className=" col-span-2 flex lg:justify-end lg:mr-10 items-center justify-center ">
       <FiAlignJustify onClick={opendropdown} className='h-9 w-9 hover:cursor-pointer' />
       </div>
     {(drop==true) &&  
   <> <div className='lg:col-span-10 col-span-6 '></div>
       <ul  className="font-bold  capitalize rounded mt-1 mr-1  bg-blue-400 lg:col-span-2 col-span-6">
        <li className="hover:cursor-pointer text-center hover:text-white hover:underline border " onClick={homebutton}>home</li>
        <li className="hover:cursor-pointer text-center hover:text-white hover:underline border " onClick={aboutbutton}>about us</li>
        <li className="hover:cursor-pointer text-center hover:text-white hover:underline border " onClick={departmentbutton}>department</li>
        <li className="hover:cursor-pointer text-center hover:text-white hover:underline border " onClick={servicesbutton}>services</li>
        <li className="hover:cursor-pointer text-center hover:text-white hover:underline border " onClick={docterbutton}>docter team</li>
        <li className="hover:cursor-pointer text-center hover:text-white hover:underline border " onClick={corporatebutton}>our corporate</li>
        <li className="hover:cursor-pointer text-center hover:text-white hover:underline border " onClick={gallerybutton}>gallery</li>
        <li className="hover:cursor-pointer text-center hover:text-white hover:underline border " onClick={healthbutton}>health checkup plan</li>
        </ul></>}
      </div>
        </> 
 )   
}

export default Header;
