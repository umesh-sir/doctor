'use client'

import Ainput from "@/app/atom/input";
import Loading from "@/app/atom/loading";
import TableComponent from "@/app/atom/table";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

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
const [isLoading, setIsLoading] = useState(false);

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

      
      const handleButtonClick = async (rowData:any) => {
        try {
            const response = await axios.post('http://localhost:8000/hospital/makepatient',rowData); 
           
            getappintment()
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Make patient successfully',
              });
        } catch (err) {
            console.error(err);
        } 
      };




    return (
        <>
            <div className="grid p-2 grid-cols-12">
                <div className="col-span-12  lg:mt-[69px] md:mt-[69px] relative w-full flex items-center cursor-pointer">
                    <Image
                        src="/hero-img1.jpeg" // Ensure the path is correct
                        alt="Healthy Health"
                        className="w-full h-16 object-cover" // Added object-cover for better image scaling
                        width={500} // Set an appropriate width
                        height={300} // Set an appropriate height
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className=" text-xl font-bold">Appointments</span> {/* You can adjust the text style as needed */}
                    </div>
                </div>
                <div className="lg:col-span-2 md:col-span-4 col-span-8">
                    <Ainput title="Date" type="date" handleInputChange={handleInputChange} name="date" value={formdata?.date}></Ainput>
                </div>
                
                <div className=" mt-7 ml-2 max-w-16  lg:col-span-1 md:col-span-1 col-span-4">
                <button className="rounded h-9 font-bold text-base px-2 pt-1 hover:bg-green-400 bg-green-500" onClick={getappintment}>Show</button>
                </div>
                <div className="col-span-12 mt-2"><TableComponent buttonname='ok'  onRowDoubleClick={handleRowDoubleClick} onButtonClick={handleButtonClick}  data={Data} headerMapping={headerMapping}></TableComponent></div>
            </div>
            <Loading isLoading={isLoading} />
        </>
    )
}
export default Page;