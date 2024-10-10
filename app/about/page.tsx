"use client"

import Apponitment from "../atom/appointment";



export default function About() {
    return (
   <>
   <div className="p-2 grid grid-cols-12 gap-2">
    <div className="col-span-12 text-3xl font-bold flex justify-center items-center mt-20 h-40 bg-[url('/dr.jpeg')] bg-no-repeat bg-cover gap-2 ml-2 mr-2 bg-center   ">
     About Us
    </div>
    <ul  className="flex font-bold capitalize items-center bg-gray-500  justify-between col-span-12">
        <li className="hover:cursor-pointer" >home</li>
        <li className="hover:cursor-pointer" >about us</li>
        <li className="hover:cursor-pointer" >department</li>
        <li className="hover:cursor-pointer" >services</li>
        <li className="hover:cursor-pointer" >docter team</li>
        <li className="hover:cursor-pointer" >our corporate</li>
        <li className="hover:cursor-pointer" >gallery</li>
        <li className="hover:cursor-pointer" >health checkup plan</li>
        </ul>
    <div className="col-span-9 p-2  bg-green-400">
    <ul>
    <div className="text-2xl capitalize">about us</div>
    <li>Hospital was founded in the year 2000 it was established with the aim of providing comprehensive medical resources under one roof, while maintaining the highest standards of excellence. Since the inspection of the hospital, it has lived up to that dream, and has built a stellar reputation for complete care-giving. Not only have the most renowned specialists been brought together here, but our consistent investment and belief in technology has ensured that anyone who comes to us gets the benefit of very best that medical science can provide.</li>
    <div className="text-2xl capitalize">about us</div>
    <li>To provide quality Health services with technological perfection and personal care under one roof with highly well equipped infrastructure by component and devoted professionals at affordable cost in an ethical and hygienic environment.</li>
    <div className="text-2xl capitalize">about us</div>
    <li>We aim to provide world class healthcare at affordable rates to society</li>
    </ul>
    </div>
    <div className="col-span-3 bg-green-400">
    <div className="text-2xltext-center capitalize">about us</div>
    <ul>
    <li>About Hospital</li>
    <li>Mission & Vision</li>
    <li>Our Satellite Center</li>
    <li>Milestone</li>
    <li>Management</li>
    <li>para-medical</li>
    </ul>
    </div>
 </div>
    </>
    );
  }