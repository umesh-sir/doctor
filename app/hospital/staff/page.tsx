'use client'

import Ainput from "@/app/atom/input";
import TableComponent from "@/app/atom/table";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

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


 
const [formdata,setFormdata]=useState({date:getCurrentDate()})
const [Ratingdata, setRatingdata] = useState([]);


const handleInputChange = (name: any, value: any) => {
    setFormdata((prevData) => ({
        ...prevData,
        [name]: value,
    }));
}

useEffect(()=>{
    getratings()
},[])


    const getratings = async () => {
        try {
            const response = await axios.post('http://localhost:8000/hospital/allgetrating'); 
            console.log(response,"ratings")
            setRatingdata(response.data)
        } catch (err) {
            console.error(err);
        } 
       };


       const headerMapping = {
        train_id:'Sr.No.',
        name: 'Full Name',
        feedback: 'Feedback',
        Image:'image'
      };
      
 
      const handleRowDoubleClick = (rowData:any) => {
        console.log('Double-clicked row data:', rowData);
      };
      

      const handleButtonClick = async (rowData:any)=>{
        console.log(rowData,"button")
        try {
            const response = await axios.post('http://localhost:8000/hospital/deleterating',{
                tran_id:rowData?.train_id
            }); 
            console.log(response,"ratings")
            getratings()
        } catch (err) {
            console.error(err);
        } 
      }

    return (
        <>
            <div className="grid p-2 grid-cols-12">
                <div className="col-span-12  mt-[69px] relative w-full flex items-center cursor-pointer">
                    <Image
                        src="/hero-img1.jpeg" // Ensure the path is correct
                        alt="Healthy Health"
                        className="w-full h-16 object-cover" // Added object-cover for better image scaling
                        width={500} // Set an appropriate width
                        height={300} // Set an appropriate height
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className=" text-xl font-bold">Staff</span> {/* You can adjust the text style as needed */}
                    </div>
                </div>
                {/* <div className="lg:col-span-2 md:col-span-4 col-span-12">
                    <Ainput title="Date" type="date" handleInputChange={handleInputChange} name="date" value={formdata?.date}></Ainput>
                </div>
                
                <div className="mt-7 ml-2 rounded h-9 font-bold text-base px-2 pt-1.5 hover:bg-green-400 bg-green-500 lg:col-span-1 md:col-span-1 col-span-1">
                <button onClick={getratings}>Show</button>
                </div> */}
                <div className="col-span-12 mt-2"><TableComponent onButtonClick={handleButtonClick}  onRowDoubleClick={handleRowDoubleClick} data={Ratingdata} headerMapping={headerMapping}></TableComponent></div>
            </div>
        </>
    )
}
export default Page;