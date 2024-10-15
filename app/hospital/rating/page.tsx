"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function About() {
    const router = useRouter();
    const [records, setRecords] = useState([]);

    const fetchRecords = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/records'); 
            console.log(response,"responseresponseresponse")
            // setRecords(response.data);
        } catch (err) {
            console.error(err);
        } 
    };


  

    return (
        <>
            <div className="p-2 grid grid-cols-12 gap-2">
                <div className="col-span-12">
                </div>
                <div className="col-span-12 lg:mt-[69px] relative w-full flex items-center cursor-pointer">
                    <Image 
                        src="/hero-img1.jpeg" // Ensure the path is correct
                        alt="Healthy Health"
                        className="w-full lg:h-[450px] md:h-[450px] h-[250px]"
                        width={500} // Set an appropriate width
                        height={300} // Set an appropriate height
                    />
                     
                </div>

       

            </div>
        </>
    );
}
