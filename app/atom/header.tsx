"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
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

 
  const handleInputChange = (name:string,value:string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setDrop(false);
  };

  return (
    <>
      <div className="grid lg:fixed relative md:fixed shadow-sm z-10 bg-blue-400  lg:h-[70px] h-16 w-full grid-cols-12">
        <div className="col-span-3">
          <Image className="p-2 align-middle lg:h-[70px] h-16 w-28" src="/logo.png" alt="Logo" width={112} height={64} />
        </div>
        <ul className="lg:flex md:hidden hidden font-bold capitalize items-center justify-between col-span-7">
          <li className="hover:cursor-pointer rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-darkshadow text-base font-bold px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-white" onClick={() => handleNavigation('/')}>home</li>
          <li className="hover:cursor-pointer rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-darkshadow text-base font-bold px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-white" onClick={() => handleNavigation('/about')}>about us</li>
          <li className="hover:cursor-pointer rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-darkshadow text-base font-bold px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-white" onClick={() => handleNavigation('/department')}>department</li>
          <li className="hover:cursor-pointer rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-darkshadow text-base font-bold px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-white" onClick={() => handleNavigation('/services')}>services</li>
          <li className="hover:cursor-pointer rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-darkshadow text-base font-bold px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-white" onClick={() => handleNavigation('/docters')}>doctor team</li>
          <li className="hover:cursor-pointer rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-darkshadow text-base font-bold px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-white" onClick={() => handleNavigation('/gallery')}>gallery</li>
          <li className="hover:cursor-pointer text-base font-bold bg-green-500 px-2 py-2 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-white" onClick={() => setIsDialogOpen(true)}>appointment</li>
        </ul>
      
        <div className="col-span-7 capitalize text-2xl font-bold flex items-center lg:hidden justify-center">
          ajay hospital
        </div>
        <div className="col-span-2 flex lg:justify-end lg:mr-10 items-center justify-center">
          <FiAlignJustify onClick={() => setDrop(!drop)} className='h-9 w-9 hover:cursor-pointer' />
        </div>
        <div className='col-span-12 lg:hidden mt-1 mr-1 flex justify-end'>
          <button className='hover:cursor-pointer bg-green-500 font-bold px-2 py-1 rounded-tl-xl rounded-br-xl hover:bg-blue-600' onClick={() => setIsDialogOpen(true)}>Appointment</button>
        </div>

        {drop && (
          <div className= 'absolute top-16 right-2 col-span-6'>
            <ul className="font-bold capitalize rounded mt-1 mr-1 bg-blue-400 lg:col-span-2 col-span-6">
              <li className="hover:cursor-pointer text-center hover:text-white hover:underline border" onClick={() => handleNavigation('/')}>home</li>
              <li className="hover:cursor-pointer text-center hover:text-white hover:underline border" onClick={() => handleNavigation('/about')}>about us</li>
              <li className="hover:cursor-pointer text-center hover:text-white hover:underline border" onClick={() => handleNavigation('/department')}>department</li>
              <li className="hover:cursor-pointer text-center hover:text-white hover:underline border" onClick={() => handleNavigation('/services')}>services</li>
              <li className="hover:cursor-pointer text-center hover:text-white hover:underline border" onClick={() => handleNavigation('/docters')}>doctor team</li>
              <li className="hover:cursor-pointer text-center hover:text-white hover:underline border" onClick={() => handleNavigation('/gallery')}>gallery</li>
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
                <div className='col-span-12 md:col-span-6 lg:col-span-6 mt-6'>
                  <button className='hover:cursor-pointer bg-green-500 text-xl px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-blue-600'>submit</button>
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
