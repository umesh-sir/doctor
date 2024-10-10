 
"use client"
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "../atom/dailog";
import { DialogTitle, Rating } from "@mui/material";
import Ainput from './input';

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


const [isDialogOpen, setIsDialogOpen] = useState(false);

  
const takeappointment = async (row: any) => {
  setIsDialogOpen(true)
};
  

 return (
        <>
        <div>ram</div>
      <div className="grid lg:fixed   md:fixed shadow-sm z-10 bg-blue-400 fixed lg:h-[70px] h-16 w-full   grid-cols-12">
       <div className="col-span-2">
       <img className=" p-2 align-middle lg:h-[70px] h-16 w-20" src="dr.jpeg"></img>
       </div>
        <ul  className="lg:flex md:hidden hidden font-bold capitalize items-center  justify-between col-span-8">
        <li className="hover:cursor-pointer rounded px-2 py-1 font-bold  transition duration-300 ease-in-out transform hover:-translate-y-0.5  hover:shadow-darkshadow text-base font-bold px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-white" onClick={homebutton}>home</li>
        <li className="hover:cursor-pointer rounded px-2 py-1 font-bold  transition duration-300 ease-in-out transform hover:-translate-y-0.5  hover:shadow-darkshadow text-base font-bold px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-white" onClick={aboutbutton}>about us</li>
        <li className="hover:cursor-pointer rounded px-2 py-1 font-bold  transition duration-300 ease-in-out transform hover:-translate-y-0.5  hover:shadow-darkshadow text-base font-bold px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-white" onClick={departmentbutton}>department</li>
        <li className="hover:cursor-pointer rounded px-2 py-1 font-bold  transition duration-300 ease-in-out transform hover:-translate-y-0.5  hover:shadow-darkshadow text-base font-bold px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-white" onClick={servicesbutton}>services</li>
        <li className="hover:cursor-pointer rounded px-2 py-1 font-bold  transition duration-300 ease-in-out transform hover:-translate-y-0.5  hover:shadow-darkshadow text-base font-bold px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-white" onClick={docterbutton}>docter team</li>
        {/* <li className="hover:cursor-pointer rounded px-2 py-1 font-bold  transition duration-300 ease-in-out transform hover:-translate-y-0.5  hover:shadow-darkshadow text-base font-bold px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-white" onClick={corporatebutton}>our corporate</li> */}
        <li className="hover:cursor-pointer rounded px-2 py-1 font-bold  transition duration-300 ease-in-out transform hover:-translate-y-0.5  hover:shadow-darkshadow text-base font-bold px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-white" onClick={gallerybutton}>gallery</li>
        <li className="hover:cursor-pointer text-base font-bold bg-green-500 px-2 py-2 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-white" onClick={takeappointment}>apointment</li>
        {/* <li className="hover:cursor-pointer rounded px-2 py-1 font-bold  transition duration-300 ease-in-out transform hover:-translate-y-0.5  hover:shadow-darkshadow text-base font-bold px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-white" onClick={healthbutton}>health checkup plan</li> */}
        </ul>
      
       <div className="col-span-8 capitalize text-2xl font-bold flex items-center lg:hidden justify-center">
         ajay hospital
       </div>
       <div className=" col-span-2 flex lg:justify-end lg:mr-10 items-center justify-center ">
       <FiAlignJustify onClick={opendropdown} className='h-9 w-9 hover:cursor-pointer' />
       </div>
       <div className='col-span-12 lg:hidden  mt-1 mr-1 flex justify-end'><button className=' hover:cursor-pointer bg-green-500 font-bold  px-2 py-1 rounded-tl-xl rounded-br-xl  hover:bg-blue-600' onClick={takeappointment}>Apointment</button></div>
     {(drop==true) &&  
   <> <div className='lg:col-span-10 col-span-6 '></div>
       <ul  className="font-bold  capitalize rounded mt-1 mr-1  bg-blue-400 lg:col-span-2 col-span-6">
        <li className="hover:cursor-pointer text-center hover:text-white hover:underline border " onClick={homebutton}>home</li>
        <li className="hover:cursor-pointer text-center hover:text-white hover:underline border " onClick={aboutbutton}>about us</li>
        <li className="hover:cursor-pointer text-center hover:text-white hover:underline border " onClick={departmentbutton}>department</li>
        <li className="hover:cursor-pointer text-center hover:text-white hover:underline border " onClick={servicesbutton}>services</li>
        <li className="hover:cursor-pointer text-center hover:text-white hover:underline border " onClick={docterbutton}>docter team</li>
        {/* <li className="hover:cursor-pointer text-center hover:text-white hover:underline border " onClick={corporatebutton}>our corporate</li> */}
        <li className="hover:cursor-pointer text-center hover:text-white hover:underline border " onClick={gallerybutton}>gallery</li>
        {/* <li className="hover:cursor-pointer text-center hover:text-white hover:underline border " onClick={healthbutton}>health checkup plan</li> */}
        </ul></>}
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="w-full max-w-screen-md xs:h-auto overflow-hidden">
                    <DialogHeader>
                        <DialogTitle className=""><DialogTitle>For Appointment Please Fill Form </DialogTitle></DialogTitle>
                        <hr className="bg-body-color mx-2" />
                        <DialogDescription>
                        <div  className="grid grid-cols-12 gap-2 ">
                          <div className='col-span-12 md:col-span-6 lg:col-span-6'>
<Ainput title='Name'></Ainput>
                          </div>
                          <div className='col-span-12 md:col-span-6 lg:col-span-6'>
<Ainput title='Mobile No.'></Ainput>
                          </div>
                          <div className='col-span-12 md:col-span-6 lg:col-span-6'>
<Ainput title='Date'></Ainput>
                          </div>
                          <div className='col-span-12 md:col-span-6 lg:col-span-6'>
<Ainput title='Department'></Ainput>
                          </div>
                          <div className='col-span-12 md:col-span-6 lg:col-span-6'>
<Ainput title='Doctor'></Ainput>
                          </div>
                          <div className='col-span-12 md:col-span-6 lg:col-span-6 mt-6'>
                            <button className='hover:cursor-pointer bg-green-500 text-xl  px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-blue-600'>submit</button>
                          </div>
                          </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </> 
 )   
}

export default Header;
