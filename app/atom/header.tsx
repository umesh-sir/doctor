"use client";
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "../atom/dailog";
import { DialogTitle } from "@mui/material";
import Ainput from './input';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();
  const [drop, setDrop] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    date: '',
    department: '',
    doctor: '',
  });

  const dropdownRef = useRef(null); // Create a ref for the dropdown

  const handleInputChange = (name:string, value:string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNavigation = (path:string) => {
    router.push(path);
    setDrop(false);
  };



  return (
    <>
    
      <div className="grid rounded-lg  lg:fixed relative md:fixed shadow-sm z-10 bg-slate-500 lg:h-[70px] h-16 w-full grid-cols-12">
        <div className="col-span-3 flex ">
          <Image className="p-2 align-middle lg:h-[70px] h-16 w-28" src="/logo.png" alt="Logo" width={112} height={64} />
        <div className='mt-1 lg:ml-20'> <button className="btn-88 mt-2">
  <svg viewBox="0 0 597.975 597.975">
    <path
      d="M325.125,26.138c-33.15,0-65.025,6.375-95.625,17.85c0,1.275,0,1.275,0,2.55v52.275
				c29.325-14.025,61.2-21.675,95.625-21.675c122.4,0,221.85,99.45,221.85,221.85c0,122.4-99.449,221.851-221.85,221.851
				c-34.425,0-66.3-7.65-95.625-21.676v49.726c0,1.274,0,3.825,0,5.1c29.325,11.476,61.2,17.851,95.625,17.851
				c150.45,0,272.85-122.4,272.85-272.851C597.975,148.538,475.575,26.138,325.125,26.138z"
    />
    <path
      d="M218.025,383.138c-8.925,0-15.3-6.375-15.3-15.3v-1.275c0-3.825,1.275-8.925,5.1-11.475l16.575-15.301
						c35.7-31.875,53.55-51,54.825-70.125c0-14.025-7.65-24.225-26.775-24.225c-7.65,0-15.3,2.55-21.675,5.1
						c-3.825,1.275-7.65,1.275-11.475,0c-3.825-1.275-6.375-3.825-7.65-7.65l0,0c-2.55-6.375,0-15.3,6.375-17.85
						c11.475-6.375,26.775-10.2,43.35-10.2c36.975,0,58.65,21.675,58.65,52.275c0,28.05-20.4,49.726-44.625,71.4l-15.3,12.75l0,0
						h47.175c8.925,0,15.3,7.649,15.3,15.3s-7.65,15.3-15.3,15.3L218.025,383.138L218.025,383.138z"
    />
    <path
      d="M408,383.138c-10.2,0-17.85-7.65-17.85-17.851v-21.675h-57.375c-8.926,0-15.301-7.649-15.301-15.3v-5.1
						c0-2.551,1.275-6.375,2.551-8.926l56.1-89.25c2.55-5.1,7.65-7.65,14.025-7.65H413.1c8.926,0,15.301,7.65,15.301,15.3v81.6h5.1
						c7.65,0,14.025,6.375,14.025,14.025s-6.375,14.025-14.025,14.025h-5.1v21.675C427.125,375.487,418.2,383.138,408,383.138z
						 M390.15,314.287v-36.975c0-10.2,0-20.4,1.274-30.6h-1.274c-5.101,10.2-10.2,20.4-15.301,30.6l-21.675,35.7l0,0h36.976V314.287
						z"
    />
    <path
      d="M191.25,441.787c0-22.949-17.85-43.35-40.8-43.35H127.5v-204h22.95c22.95,0,40.8-16.575,40.8-39.525V46.538
				c0-22.95-17.85-40.8-40.8-40.8C67.575,5.737,0,72.038,0,154.913v286.875c0,82.875,67.575,150.45,150.45,150.45
				c22.95,0,40.8-17.85,40.8-40.8V441.787z"
    />
  </svg>
           </button></div>
        </div>
        <ul className="lg:flex  md:hidden hidden font-bold capitalize items-center justify-between col-span-7">
          
          <li className="hover:cursor-pointer  rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-darkshadow text-base font-bold px-2 py-2 rounded-tl-xl text-ellipsis text-white whitespace-nowrap rounded-br-xl hover:bg-slate-950 lg:text-xl md:text-lg" onClick={() => handleNavigation('/')}>home</li>
          <li className="hover:cursor-pointer rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-darkshadow text-base font-bold px-2 py-2 rounded-tl-xl text-ellipsis text-white whitespace-nowrap rounded-br-xl hover:bg-slate-950 lg:text-xl md:text-lg" onClick={() => handleNavigation('/about')}>about us</li>
          <li className="hover:cursor-pointer rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-darkshadow text-base font-bold px-2 py-2 rounded-tl-xl text-ellipsis text-white whitespace-nowrap rounded-br-xl hover:bg-slate-950 lg:text-xl md:text-lg" onClick={() => handleNavigation('/services')}>services</li>
          <li className="hover:cursor-pointer rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-darkshadow text-base font-bold px-2 py-2 rounded-tl-xl text-ellipsis text-white whitespace-nowrap rounded-br-xl hover:bg-slate-950 lg:text-xl md:text-lg" onClick={() => handleNavigation('/docters')}>doctor team</li>
          <li className="hover:cursor-pointer rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-darkshadow text-base font-bold px-2 py-2 rounded-tl-xl text-ellipsis text-white whitespace-nowrap rounded-br-xl hover:bg-slate-950 lg:text-xl md:text-lg" onClick={() => handleNavigation('/gallery')}>gallery</li>
        

          <li className="hover:cursor-pointer text-base font-bold bg-green-500 px-2 py-2 rounded-tl-xl text-ellipsis text-white whitespace-nowrap rounded-br-xl hover:bg-orange-600 lg:text-xl md:text-lg" onClick={() => setIsDialogOpen(true)}>appointment</li>
      
        </ul>

        <div className="col-span-7 capitalize text-2xl font-bold flex items-center lg:hidden justify-center">
          ajay hospital
        </div>
      
        <div className="col-span-2 flex lg:justify-end lg:mr-10 items-center justify-center">
          <FiAlignJustify 
            onClick={() => setDrop(prev => !prev)} // Toggle dropdown state
            className='h-9 w-9 hover:cursor-pointer'
          />
        </div>
        
        <div className='col-span-12 lg:hidden mt-2 mr-1 flex justify-end'>
          <button className='hover:cursor-pointer bg-green-500 font-bold px-2 py-2 rounded-tl-xl rounded-br-xl hover:bg-blue-600' onClick={() => setIsDialogOpen(true)}>Appointment</button>
        </div>
        <div className='col-span-12 lg:hidden mt-2 mr-1 flex justify-end'>
      
        </div>
   
        {drop && (
          <div ref={dropdownRef}> {/* Attach the ref to the dropdown */}
            <ul className="font-bold capitalize rounded mt-1 mr-1 bg-slate-200  w-96 h-screen absolute top-[70px] right-2">
              <li className="hover:cursor-pointer py-2 text-center rounded bg-blue-400 hover:underline border" onClick={() => handleNavigation('/')}>home</li>
              <li className="hover:cursor-pointer py-2 text-center rounded bg-blue-400 hover:underline border" onClick={() => handleNavigation('/about')}>about us</li>
              <li className="hover:cursor-pointer py-2 text-center rounded bg-blue-400 hover:underline border" onClick={() => handleNavigation('/services')}>services</li>
              <li className="hover:cursor-pointer py-2 text-center rounded bg-blue-400 hover:underline border" onClick={() => handleNavigation('/docters')}>doctor team</li>
              <li className="hover:cursor-pointer py-2 text-center rounded bg-blue-400 hover:underline border" onClick={() => handleNavigation('/gallery')}>gallery</li>
            </ul>
          </div>
        )}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-full max-w-screen-md xs:h-auto overflow-hidden">
          <DialogHeader>
            <DialogTitle>For Appointment Please Fill Form</DialogTitle>
            <hr className="bg-body-color mx-2" />
            <DialogDescription>
              <div className="grid grid-cols-12 gap-2">
                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                  <Ainput 
                    title='Name' 
                    type='text' 
                    name='name' 
                    value={formData.name} 
                    handleInputChange={handleInputChange} 
                    redlabel='Name is required' 
                  />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                  <Ainput 
                    title='Mobile No.' 
                    type='tel' 
                    name='mobile' 
                    value={formData.mobile} 
                    handleInputChange={handleInputChange} 
                    redlabel='Mobile number is required' 
                  />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                  <Ainput 
                    title='Date' 
                    type='date' 
                    name='date' 
                    value={formData.date} 
                    handleInputChange={handleInputChange} 
                    redlabel='Date is required' 
                  />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                  <Ainput 
                    title='Department' 
                    type='text' 
                    name='department' 
                    value={formData.department} 
                    handleInputChange={handleInputChange} 
                    redlabel='Department is required' 
                  />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                  <Ainput 
                    title='Doctor' 
                    type='text' 
                    name='doctor' 
                    value={formData.doctor} 
                    handleInputChange={handleInputChange} 
                    redlabel='Doctor is required' 
                  />
                </div>
                <div className='col-span-12 md:col-span-6  flex justify-center lg:col-span-6 mt-6'>
                  <button className='hover:cursor-pointer bg-green-500 text-xl px-2 py-1 rounded-tl-xl text-ellipsis text-white whitespace-nowrap rounded-br-xl hover:bg-blue-600'>submit</button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
