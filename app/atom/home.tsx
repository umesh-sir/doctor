"use client"

import { useState } from "react";
import About from "../atom/about";
import SwipeableTextMobileStepper from "../atom/carousel";
import Feedback from "../atom/feedback";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "../atom/dailog";
import { DialogTitle, Rating } from "@mui/material";
import Apponitment from "./appointment";



export default function Home() {

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  
  const takeappointment = async (row: any) => {
    setIsDialogOpen(true)
};

    return (
   <>
   <div className="p-2 grid grid-cols-12 ">
    <div className="col-span-12">
   <marquee className=" mt-16 text-lg text-xl bg-blue-300" >ajay mulity hospital nera sk hospital station road sikar searvice provided 24 * 7</marquee>
   </div>
   <div className="col-span-12"><SwipeableTextMobileStepper/> </div>
   <div className="col-span-12 capitalize font-bold text-center lg:text-2xl text-xl"><span>--</span><span>We are hare for you</span><span>--</span></div>
<div className="col-span-12"><Apponitment></Apponitment></div>

    <div className="lg:col-span-6 col-span-12 lg:h-[500px] h-[250px]  font-bold flex justify-end items-start p-2 mt-2 bg-[url('/dr.jpeg')] bg-no-repeat bg-cover gap-2  bg-center   ">
   <button className="lg:px-8  bg-green-500 rounded px-2 hover:scale-110" onClick={takeappointment}><p className="text-xl font-bold">Appointmant</p><p>book now</p></button>
                </div>
                <div className="lg:col-span-6 col-span-12 font-serif shadow-xl lg:p-10 p-4 lg:m-10  lg:text-xl text-sm font-semibold  ">
                   <p className=""> We are committed to providing access to affordable and innovative medicines, driven by our purpose of ‘Good Health Can’t Wait’.</p>
                   <p className="mt-6"> Our products and services are spread across our core businesses of Active Pharmaceutical Ingredients (API), generics, branded generics, biosimilars and over-the-counter pharmaceutical products around the world. We work towards meeting unmet patients needs in the areas of gastro-enterology, cardiovascular, diabetology, oncology, pain management and dermatology. We are investing in businesses of the future including drug discovery, clinically-differentiated assets and digital healthcare.</p>
                </div>
   <div className="col-span-12">
   <div className="pt-20 relative grid grid-cols-12 gap-4">
  <button className="absolute top-4 right-4 bg-green-500 rounded px-4 py-2 hover:scale-110 transition-transform duration-300 z-10" onClick={takeappointment}>
    <p className="text-xl font-bold">give us rating</p>
  </button>

  <div className="lg:col-span-3 col-span-12 p-4 flex flex-col items-center justify-center space-y-4">
    <img className="rounded-full" src="profile.jpeg" alt="Profile" />
    <Rating name="read-only" value={3} readOnly />
    <p className="capitalize text-base w-[220px] font-serif text-center break-words">
      Service of the hospital is very good
    </p>
  </div>
  <div className="lg:col-span-3 col-span-12 p-4 flex flex-col items-center justify-center space-y-4">
    <img className="rounded-full" src="profile.jpeg" alt="Profile" />
    <Rating name="read-only" value={3} readOnly />
    <p className="capitalize text-base w-[220px] font-serif text-center break-words">
      Service of the hospital is very good
    </p>
  </div>
  <div className="lg:col-span-3 col-span-12 p-4 flex flex-col items-center justify-center space-y-4">
    <img className="rounded-full" src="profile.jpeg" alt="Profile" />
    <Rating name="read-only" value={3} readOnly />
    <p className="capitalize text-base w-[220px] font-serif text-center break-words">
      Service of the hospital is very good
    </p>
  </div>
  <div className="lg:col-span-3 col-span-12 p-4 flex flex-col items-center justify-center space-y-4">
    <img className="rounded-full" src="profile.jpeg" alt="Profile" />
    <Rating name="read-only" value={3} readOnly />
    <p className="capitalize text-base w-[220px] font-serif text-center break-words">
      Service of the hospital is very good
    </p>
  </div>
</div>

   </div>
   </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="w-full max-w-screen-md xs:h-auto ">
                    <DialogHeader>
                        <DialogTitle className="mt-2 ml-3 flex "><DialogTitle>For Appointment Please Fill Form </DialogTitle></DialogTitle>
                        <hr className="bg-body-color mx-2" />
                        <DialogDescription>
                        <div  className="grid grid-cols-12 gap-2 p-4">
hello</div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
    </>
    );
  }