'use client'

import Ainput from "@/app/atom/input";
import Loading from "@/app/atom/loading";
import Aselect from "@/app/atom/select";
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


 
const [formdata,setFormdata]=useState({date:getCurrentDate(),doctor:'',depart:''})
const [doctoroption, setDoctoroption] = useState([]);
const [departmentoption, setDepartmentoption] = useState([]);
const [tabledata, setTabledata] = useState([]);
const [isLoading, setIsLoading] = useState(false);



const handleInputChange = (name: any, value: any) => {
    setFormdata((prevData) => ({
        ...prevData,
        [name]: value,
    }));
}

useEffect(()=>{
    getpatients()
    getdeprtment()
},[])

useEffect(()=>{
  getpatients()
},[formdata?.depart,formdata?.doctor,formdata?.date])

 
  const getdeprtment = async () => {
    setIsLoading(true)
    try {
      const response = await axios.post('http://localhost:8000/hospital/getdepartment');
      setDepartmentoption(response.data);
      setIsLoading(false)
    } catch (err) {
      console.error(err);
    }
  };

  const getpatients = async () => {
    try {
        const response = await axios.post('http://localhost:8000/hospital/getpatient',formdata); 
        console.log(response,"patient")
        setTabledata(response.data)
    } catch (err) {
        console.error(err);
    } 
   };




useEffect(()=>{
    if(formdata?.depart){
      getdoctors()
    }else{
      console.log('nhi chi')
    }
  },[formdata?.depart])
  
      const getdoctors = async () => {
        setFormdata({
          ...formdata,
          doctor:'',
        });
          try {
              const response = await axios.post('http://localhost:8000/hospital/getdoctor',{
                depart:formdata?.depart
              }); 
              setDoctoroption(response.data);
          } catch (err) {
              console.error(err);
          } 
         };
      





       const headerMapping = {
        train_id:'Sr.No.',
        name: 'Full Name',
        doctor: 'Doctor',
        depart:'Department',
        mobileno:'Mobile No.',
        date:'Appointment date',
        age:'Age (yr)'
      };
      
 
      const handleRowDoubleClick = (rowData:any) => {
        console.log('Double-clicked row data:', rowData);
      };
      

      // const handleButtonClick = async (rowData:any)=>{
      //   console.log(rowData,"button")
      // }

    return (
        <>
            <div className="grid p-2 gap-2 grid-cols-12">
                <div className="col-span-12  lg:mt-[69px] md:mt-[69px] relative w-full flex items-center cursor-pointer">
                    <Image
                        src="/hero-img1.jpeg" // Ensure the path is correct
                        alt="Healthy Health"
                        className="w-full h-16 object-cover" // Added object-cover for better image scaling
                        width={500} // Set an appropriate width
                        height={300} // Set an appropriate height
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className=" text-xl font-bold">Patients</span> {/* You can adjust the text style as needed */}
                    </div>
                </div>
                <div className="lg:col-span-2 md:col-span-3 col-span-12">
                    <Aselect title="Department"  options={departmentoption}  handleInputChange={handleInputChange} name="depart" value={formdata?.depart}/>
                </div>
                <div className="lg:col-span-2 md:col-span-3 col-span-12">
                    <Aselect title="Doctor" options={doctoroption} handleInputChange={handleInputChange} name="doctor" value={formdata?.doctor} />
                </div>
                <div className="lg:col-span-2 md:col-span-3 col-span-12">
                    <Ainput title="Date" type="date" handleInputChange={handleInputChange} name="date" value={formdata?.date}></Ainput>
                </div>
                
                <div className="lg:mt-7 md:mt-7 mt-2 ml-2 max-w-16  lg:col-span-1 md:col-span-3 col-span-12">
                <button onClick={getpatients} className="rounded h-9 font-bold text-base px-2 pt-1 hover:bg-green-400 bg-green-500" >Show</button>
                </div>
                <div className="col-span-12 mt-2"><TableComponent onRowDoubleClick={handleRowDoubleClick} data={tabledata} headerMapping={headerMapping}></TableComponent></div>
            </div>
            <Loading isLoading={isLoading} />
        </>
    )
}
export default Page;