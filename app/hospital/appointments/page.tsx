'use client'

import TableComponent from "@/app/atom/table";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";

const Appointments = () => {

useEffect(()=>{
    getappintment()
},[])

    const getappintment = async () => {
        try {
            const response = await axios.post('http://localhost:8000/hospital/getapointment'); 
            console.log(response,"responseresponseresponse")
        } catch (err) {
            console.error(err);
        } 
       };



    const data = [
        { Name: 'John Doe', Age: 28, Occupation: 'Developer' },
        { Name: 'Jane Smith', Age: 34, Occupation: 'Designer' },
        { Name: 'Mike Johnson', Age: 45, Occupation: 'Manager' },
        { Name: 'John Doe', Age: 28, Occupation: 'Developer' },
        { Name: 'Jane Smith', Age: 34, Occupation: 'Designer' },
        { Name: 'Mike Johnson', Age: 45, Occupation: 'Manager' },
        { Name: 'John Doe', Age: 28, Occupation: 'Developer' },
        { Name: 'Jane Smith', Age: 34, Occupation: 'Designer' },
        { Name: 'Mike Johnson', Age: 45, Occupation: 'Manager' },
        { Name: 'John Doe', Age: 28, Occupation: 'Developer' },
        { Name: 'Jane Smith', Age: 34, Occupation: 'Designer' },
        { Name: 'Mike Johnson', Age: 45, Occupation: 'Manager' },
        { Name: 'John Doe', Age: 28, Occupation: 'Developer' },
        { Name: 'Jane Smith', Age: 34, Occupation: 'Designer' },
        { Name: 'Mike Johnson', Age: 45, Occupation: 'Manager' },
        { Name: 'John Doe', Age: 28, Occupation: 'Developer' },
        { Name: 'Jane Smith', Age: 34, Occupation: 'Designer' },
        { Name: 'Mike Johnson', Age: 45, Occupation: 'Manager' },
        { Name: 'John Doe', Age: 28, Occupation: 'Developer' },
        { Name: 'Jane Smith', Age: 34, Occupation: 'Designer' },
        { Name: 'Mike Johnson', Age: 45, Occupation: 'Manager' },
        { Name: 'John Doe', Age: 28, Occupation: 'Developer' },
        { Name: 'Jane Smith', Age: 34, Occupation: 'Designer' },
        { Name: 'Mike Johnson', Age: 45, Occupation: 'Manager' },
        { Name: 'John Doe', Age: 28, Occupation: 'Developer' },
        { Name: 'Jane Smith', Age: 34, Occupation: 'Designer' },
        { Name: 'Mike Johnson', Age: 45, Occupation: 'Manager' },
        { Name: 'John Doe', Age: 28, Occupation: 'Developer' },
        { Name: 'Jane Smith', Age: 34, Occupation: 'Designer' },
        { Name: 'Mike Johnson', Age: 45, Occupation: 'Manager' },
        { Name: 'John Doe', Age: 28, Occupation: 'Developer' },
        { Name: 'Jane Smith', Age: 34, Occupation: 'Designer' },
        { Name: 'Mike Johnson', Age: 45, Occupation: 'Manager' },
        { Name: 'John Doe', Age: 28, Occupation: 'Developer' },
        { Name: 'Jane Smith', Age: 34, Occupation: 'Designer' },
        { Name: 'Mike Johnson', Age: 45, Occupation: 'Manager' },
      ];
    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-12 lg:mt-[74px] relative w-full flex items-center cursor-pointer">
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
                <button onClick={getappintment}>show</button>

                <div className="col-span-12"><TableComponent data={data}></TableComponent></div>
            </div>

        </>
    )
}
export default Appointments;