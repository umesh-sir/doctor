"use client";
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "../atom/dailog";
import { DialogTitle } from "@mui/material";
import Image from 'next/image';
import { IoMdLogIn } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { RiGalleryLine } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";
import { PiPhoneCall } from "react-icons/pi";
import { CiBellOn } from "react-icons/ci";
import { FiAirplay } from "react-icons/fi";
import axios from 'axios';
import Popup from '../atom/popup';
import Ainput from '../atom/input';
import Aselect from '../atom/select';
import Swal from 'sweetalert2';
 

const Header = () => {

  function showSideAlert(message: any, type: any) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        container: "side-alert-container",
        popup: `side-alert-${type}`,
        title: "side-alert-title",
        icon: "side-alert-icon",
      },
    });

    Toast.fire({
      icon: type,
      title: message,
    });
  }

  
  function getCurrentDate(monthsBack = 0) {
    const today = new Date();
    today.setMonth(today.getMonth() - monthsBack);
    const year = today.getFullYear();
    let month: any = today.getMonth() + 1;
    let day: any = today.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    return `${year}-${month}-${day}`;
}

  const router = useRouter();
  const [drop, setDrop] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    age:'',
    mobile: '',
    date: getCurrentDate(),
    department: '',
    doctor: '',
  });
  const dropdownRef = useRef(null); // Create a ref for the dropdown
  const [sidealertmsg, setSidealertmsg] = useState('');
  const [departmentoption, setDepartmentoption] = useState([]);
  const [doctoroption, setDoctoroption] = useState([]);
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


  useEffect(()=>{
    getdeprtment()
},[])

    const getdeprtment = async () => {
        try {
            const response = await axios.post('http://localhost:8000/hospital/getdepartment'); 
      
            setDepartmentoption(response.data);
        } catch (err) {
            console.error(err);
        } 
       };

       useEffect(()=>{
        if(formData?.department){
          getdoctors()
        }else{
          console.log('nhi chi')
        }
      },[formData?.department])
      
          const getdoctors = async () => {
            setFormData({
              ...formData,
              doctor:'',
            });
              try {
                  const response = await axios.post('http://localhost:8000/hospital/getdoctor',{
                    depart:formData?.department
                  }); 
                  setDoctoroption(response.data);
              } catch (err) {
                  console.error(err);
              } 
             };
             
  const saveaponitment = async () => {
    if(!formData.name){
      showSideAlert("Please fill the name", "warning");
      return;
  }
  if(!formData.mobile){
    showSideAlert("Please fill the mobile no.", "warning");
    return;
}
if(!formData.age){
  showSideAlert("Please fill the age", "warning");
  return;
}
if(!formData.date){
showSideAlert("Please fill the date", "warning");
return;
}
if(!formData.department){
showSideAlert("Please fill the department", "warning");
return;
}
if(!formData.doctor){
showSideAlert("Please fill the doctor", "warning");
return;
}
    setIsDialogOpen(false)
    try {
      const response = await axios.post('http://localhost:8000/hospital/saveappoint', formData);
      setFormData({
        name: '',
        mobile: '',
        age: '',
        date: getCurrentDate(),
        department: '',
        doctor: '',
      })
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Appointment Save successfully',
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'warning',
        title: 'warning',
        text: 'Can not save the appointment',
      });
    }
  };


 


  return (
    <>
    
      <div className="grid rounded-lg  lg:fixed relative md:fixed shadow-sm z-10 bg-slate-500 lg:h-[70px] h-16 w-full grid-cols-12">
        <div className="col-span-3 flex ">
          <Image className="p-2 align-middle lg:h-[70px] h-16 w-28" src="/logo.png" alt="Logo" width={112} height={64} />
        <div className='mt-3 lg:ml-20'> <button className=" btn-88 h-10 w-10 ">
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
          <li className="hover:cursor-pointer  rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-darkshadow text-base font-serif font-bold px-2 py-2 rounded-tl-xl text-ellipsis text-white whitespace-nowrap rounded-br-xl hover:bg-slate-950 lg:text-xl md:text-lg" onClick={() => handleNavigation('/')}>home</li>
          <li className="hover:cursor-pointer rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-darkshadow text-base font-serif font-bold px-2 py-2 rounded-tl-xl text-ellipsis text-white whitespace-nowrap rounded-br-xl hover:bg-slate-950 lg:text-xl md:text-lg" onClick={() => handleNavigation('/ramdeva/about')}>about us</li>
          <li className="hover:cursor-pointer rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-darkshadow text-base font-serif font-bold px-2 py-2 rounded-tl-xl text-ellipsis text-white whitespace-nowrap rounded-br-xl hover:bg-slate-950 lg:text-xl md:text-lg" onClick={() => handleNavigation('/ramdeva/services')}>services</li>
          <li className="hover:cursor-pointer rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-darkshadow text-base font-serif font-bold px-2 py-2 rounded-tl-xl text-ellipsis text-white whitespace-nowrap rounded-br-xl hover:bg-slate-950 lg:text-xl md:text-lg" onClick={() => handleNavigation('/ramdeva/docters')}>doctor team</li>
          <li className="hover:cursor-pointer rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-darkshadow text-base font-serif font-bold px-2 py-2 rounded-tl-xl text-ellipsis text-white whitespace-nowrap rounded-br-xl hover:bg-slate-950 lg:text-xl md:text-lg" onClick={() => handleNavigation('/ramdeva/gallery')}>gallery</li>
          <li className="hover:cursor-pointer text-base font-serif font-bold bg-green-500 px-2 py-2 rounded-tl-xl text-ellipsis text-white whitespace-nowrap rounded-br-xl hover:bg-orange-600 lg:text-xl md:text-lg" onClick={() => setIsDialogOpen(true)}>appointment</li>
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
        
        {/* <div className='col-span-12 lg:hidden mt-2 mr-1 flex justify-end'>
          <button className='hover:cursor-pointer bg-green-500 font-bold px-2 py-2 rounded-tl-xl rounded-br-xl hover:bg-blue-600' onClick={() => setIsDialogOpen(true)}>Appointment</button>
        </div> */}
      
   
        {drop && (
          <div ref={dropdownRef}> {/* Attach the ref to the dropdown */}
            <ul className="font-bold capitalize rounded    bg-slate-200  lg:w-96 w-80 h-screen absolute top-[70px] right-2">
            <li className="hover:cursor-pointer flex py-2 pl-5 rounded bg-slate-400 hover:bg-slate-700 border" onClick={() => handleNavigation('/login')}><IoMdLogIn className='-mt-1 pr-2 w-8 h-8'  /><span className=' text-lg font-bold font-serif'>Login</span></li>
              <li className="hover:cursor-pointer py-2 pl-5 flex rounded bg-slate-400 hover:bg-slate-700 border" onClick={() => handleNavigation('/')}><AiOutlineHome className='-mt-1 pr-2 w-8 h-8'  /><span  className=' text-lg font-bold font-serif'>Home</span></li>
              <li className="hover:cursor-pointer py-2 pl-5 flex rounded bg-slate-400 hover:bg-slate-700 border" onClick={() => handleNavigation('/ramdeva/about')}><FiAirplay className='-mt-1 pr-2 w-8 h-8'/><span  className=' text-lg font-bold font-serif'>About us</span></li>
              <li className="hover:cursor-pointer py-2 pl-5 flex rounded bg-slate-400 hover:bg-slate-700 border" onClick={() => handleNavigation('/ramdeva/services')}><MdMiscellaneousServices  className='-mt-1 pr-2 w-8 h-8' /><span  className=' text-lg font-bold font-serif'>Services</span></li>
              <li className="hover:cursor-pointer py-2 pl-5 flex rounded bg-slate-400 hover:bg-slate-700 border" onClick={() => handleNavigation('/ramdeva/docters')}><RiTeamLine className='-mt-1 pr-2 w-8 h-8'/><span  className=' text-lg font-bold font-serif'>Doctor team</span></li>
              <li className="hover:cursor-pointer py-2 pl-5 flex rounded bg-slate-400 hover:bg-slate-700 border" onClick={() => handleNavigation('/ramdeva/gallery')}><RiGalleryLine className='-mt-1 pr-2 w-8 h-8'/><span  className=' text-lg font-bold font-serif'>Gallery</span></li>
              <li className="hover:cursor-pointer py-2 pl-5 flex rounded bg-slate-400 hover:bg-slate-700 border" onClick={() => handleNavigation('/ramdeva/')}><PiPhoneCall className='-mt-1 pr-2 w-8 h-8'/><span  className=' text-lg font-bold font-serif'>Contect us</span></li>
              <li className="hover:cursor-pointer py-2 pl-5 flex rounded bg-slate-400 hover:bg-slate-700 border" onClick={() => handleNavigation('/ramdeva/')}><CiBellOn className='-mt-1 pr-2 w-8 h-8'/><span  className=' text-lg font-bold font-serif'>Notifications</span></li>
              {/* <li className="hover:cursor-pointer   py-2 pl-5 flex  rounded bg-slate-400 hover:bg-slate-700 border" onClick={() => handleNavigation('/')}><RiLogoutCircleLine className='-mt-1 pr-2 w-8 h-8'/><span  className=' text-lg font-bold font-serif'>Logout</span></li> */}
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
                    redlabel='*'
                    max={50}
                  />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                  <Ainput
                    title='Age'
                    type='number'
                    name='age'
                    value={formData.age}
                    handleInputChange={handleInputChange}
                    redlabel='*'
                    max={2}



                  />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                  <Ainput
                    title='Mobile No.'
                    type='tel'
                    name='mobile'
                    value={formData.mobile}
                    handleInputChange={handleInputChange}
                    redlabel='*'
                    max={10}
                   

                  />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                  <Ainput
                    title='Date'
                    type='date'
                    name='date'
                    value={formData.date}
                    handleInputChange={handleInputChange}
                    redlabel='*'


                  />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                  <Aselect
                    title='Department'
                    name='department'
                    value={formData.department}
                    options={departmentoption}
                    handleInputChange={handleInputChange}
                  />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                  <Aselect
                    title='Doctor'
                    name='doctor'
                    options={doctoroption}
                    value={formData.doctor}
                    handleInputChange={handleInputChange}
                  />
                </div>
                <div className="col-span-12 flex justify-center text-red-600 mt-2" >{sidealertmsg}</div>
                <div className='col-span-12 md:col-span-12  flex justify-center lg:col-span-12 mt-2'>
                  <button onClick={saveaponitment} className='hover:cursor-pointer bg-green-500 text-xl px-2 py-1 rounded-tl-xl text-ellipsis text-white whitespace-nowrap rounded-br-xl hover:bg-blue-600'>submit</button>
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
