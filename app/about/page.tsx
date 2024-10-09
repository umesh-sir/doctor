"use client"

import Apponitment from "../atom/appointment";



export default function About() {

    
    return (
   <>
   <div className="p-2 grid grid-cols-12 gap-2">
    <div className="col-span-12 text-3xl font-bold flex justify-center items-center mt-16 h-40 bg-[url('/dr.jpeg')] bg-no-repeat bg-cover gap-2  bg-center   ">
     About Us
    </div>
    <div className="col-span-12 relative w-full flex items-center cursor-pointer ">
    <img src="hero-img1.jpeg" alt="" className="w-full h-auto" />
    <div className="absolute  left-10">
        <h1 className="text-3xl  ">
            We Take Care Of Your <br />Healthy Health <br />
        </h1>
        <p className="text-xl">
            Simply dummy text of the printing typesetting ipsum dotor
            <br />onsecte diplscing
        </p>
        <button className="mt-4 bg-blue-400 rounded px-2 py-1">
            READ MORE
        </button>
    </div>
</div>

{/* 
<div className="lg:col-span-6 md:col-span-6 col-span-12 w-96 p-10 lg:h-[400px] h-[250px]     items-start  mt-2 bg-[url('/dr.jpeg')] bg-no-repeat bg-cover gap-2  bg-center   ">
</div> */}

 </div>

    </>
    );
  }