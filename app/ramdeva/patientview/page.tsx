'use client'

import Ainput from "@/app/atom/input";
import TableComponent from "@/app/atom/table";
import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";

import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { RiGalleryLine } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import { FiAirplay } from "react-icons/fi";
import { BsStarHalf } from "react-icons/bs";
import { RiHeartAddLine } from "react-icons/ri";
import { FiAlignJustify } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Loading from "@/app/atom/loading";



const Page = () => {

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


const [Data,setData]=useState([])
const [formdata,setFormdata]=useState({date:getCurrentDate()})
const [userDetails, setUserDetails] = useState(null);
const [drop, setDrop] = useState(false);
const dropdownRef = useRef(null)
const [isLoading, setIsLoading] = useState(false);
const router = useRouter();


useEffect(() => {
    // Retrieve the user details from cookies
    const cookies = document.cookie.split('; ');
    const userDetailCookie = cookies.find(row => row.startsWith('userDetails='));
    if (userDetailCookie) {
        const userDetailsStr = userDetailCookie.split('=')[1];
        setUserDetails(JSON.parse(decodeURIComponent(userDetailsStr))); // Parse and decode
    }
}, []);


const handleInputChange = (name: any, value: any) => {
    setFormdata((prevData) => ({
        ...prevData,
        [name]: value,
    }));
}

useEffect(()=>{
    getappintment()
},[])

    const getappintment = async () => {
        setData([])
        setIsLoading(true)
        try {
            const response = await axios.post('http://localhost:8000/hospital/getapointment',{
                date:formdata?.date
            }); 
            console.log(response.data,"responseresponseresponse")
            console.log(response,"respon")
            setData(response.data)
            setIsLoading(false)
        } catch (err) {
            console.error(err);
        } 
       };
       const headerMapping = {
        srno:'Sr. No.',
        name: 'Full Name',
        age: 'Age (Years)',
        date: 'Date',
        mobileno:'Mobile No.',
        depart:'Department',
        doctor:'Doctor Name'
      };
      

      
      const handleRowDoubleClick = (rowData:any) => {
        console.log('Double-clicked row data:', rowData);
      };

      const handleLogout = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"; // Clear the cookie
        router.push('/'); // Redirect to home page
      };

      const handleNavigation = (path:string) => {
        router.push(path);
        setDrop(false);
      };

    return (
        <>
       <div className="grid grid-cols-12 h-16 bg-slate-500 fixed top-0 left-0 w-full z-50">
    <div className="lg:col-span-3 md:col-span-3 col-span-2">
        <Image className="p-2 align-middle lg:h-[70px] h-16 w-28" src="/logo.png" alt="Logo" width={112} height={64} />
    </div>
    <div className="lg:col-span-6 md:col-span-6 col-span-8 rounded lg:text-2xl font-bold md:text-2xl flex justify-center items-center text-xl">
         Ramdeva hospital
    </div>
    <div className="lg:col-span-3 md:col-span-3 col-span-2 mr-4 flex justify-end items-center">
        <FiAlignJustify 
            onClick={() => setDrop(prev => !prev)}   
            className='h-9 w-9 hover:cursor-pointer'
        />
    </div>

    {drop && (
        <div ref={dropdownRef}> 
            <ul className="font-bold capitalize rounded z-10 bg-slate-200 lg:w-96 w-80 h-screen absolute top-[70px] right-2">
                <li className="hover:cursor-pointer py-2 flex pl-5 rounded bg-slate-400 hover:bg-slate-700 border" onClick={() => handleNavigation('/ramdeva/patientview')}>
                    <CgProfile className='-mt-1 pr-2 w-8 h-8' />
                    <span className='text-lg font-bold font-serif'>{userDetails?.name}</span>
                </li>
                <li className="hover:cursor-pointer py-2 pl-5 flex rounded bg-slate-400 hover:bg-slate-700 border" onClick={() => handleNavigation('/ramdeva/patientview')}><AiOutlineHome className='-mt-1 pr-2 w-8 h-8'  /><span  className=' text-lg font-bold font-serif'>Home</span></li>
 
              <li className="hover:cursor-pointer py-2 pl-5 flex rounded bg-slate-400 hover:bg-slate-700 border" onClick={() => handleNavigation('/ramdeva/patientview')}><RiGalleryLine className='-mt-1 pr-2 w-8 h-8'/><span  className=' text-lg font-bold font-serif'>Other</span></li>
              <li className="hover:cursor-pointer py-2 pl-5 flex rounded bg-slate-400 hover:bg-slate-700 border" onClick={() => handleNavigation('/ramdeva/patientview')}><CiBellOn className='-mt-1 pr-2 w-8 h-8'/><span  className=' text-lg font-bold font-serif'>Notifications</span></li>
                <li className="hover:cursor-pointer py-2 pl-5 flex rounded bg-slate-400 hover:bg-slate-700 border" onClick={handleLogout}>
                    <RiLogoutCircleLine className='-mt-1 pr-2 w-8 h-8' />
                    <span className='text-lg font-bold font-serif'>Logout</span>
                </li>
            </ul>
        </div>
    )}
</div>

            <div className="grid mt-16 p-2 grid-cols-12">
               
                <div className="lg:col-span-2 md:col-span-4 col-span-8">
                    <Ainput title="Date" type="date" handleInputChange={handleInputChange} name="date" value={formdata?.date}></Ainput>
                </div>
                
                <div className=" mt-7 ml-2 max-w-16  lg:col-span-1 md:col-span-1 col-span-4">
                <button className="rounded h-9 font-bold text-base px-2 pt-1 hover:bg-green-400 bg-green-500" onClick={getappintment}>Show</button>
                </div>
                <div className="col-span-12 mt-2"><TableComponent  onRowDoubleClick={handleRowDoubleClick} data={Data} headerMapping={headerMapping}></TableComponent></div>
            </div>
            <Loading isLoading={isLoading} />
        </>
    )
}
export default Page;