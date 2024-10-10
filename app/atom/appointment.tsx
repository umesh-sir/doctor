"use client"

import Ainput from "../atom/input";





const Apponitment = () => {

 
    return (
        <>    
         
            <div className="grid grid-cols-12 lg:p-10 md:p-10 p-4 lg:gap-10 md:gap-4 ">
        <div className="lg:col-span-5 md:col-span-6 col-span-12  ">
            <img className="lg:w-full  lg:h-[530px] w-full  h-[350px]" src="dr.jpeg"></img>
            </div>
        <div className="lg:col-span-7 md:col-span-6 col-span-12 mt-4">
            <div className="grid grid-cols-12 gap-6 p-6 rounded shadow-2xl bg-white">
            <div className="col-span-12 text-center font-bold font-mono capitalize text-xl " >fill the details</div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                    <Ainput title="First Name"></Ainput>
                </div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                    <Ainput title="Last Name" ></Ainput>
                </div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                    <Ainput title="Mobile Number" ></Ainput>
                </div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                    <Ainput title="Email" ></Ainput>
                </div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                    <Ainput title="Type of Appointment" ></Ainput>
                </div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                    <Ainput title="Date" type="date" ></Ainput>
                </div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                    <Ainput title="Address" ></Ainput>
                </div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                    <Ainput title="Address" ></Ainput>
                </div>
                <div className="text-center col-span-12">
                   <button className="bg-green-300 rounded text-base font-bold hover:scale-105 px-4 p-2">Submit</button>
                </div>
            </div>
        </div>
            </div>
        
       
        </>

    )
}

export default Apponitment;