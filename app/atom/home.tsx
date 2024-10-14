"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "../atom/dailog";
import { DialogTitle, Rating } from "@mui/material";
import Ainput from "./input";
import Image from "next/image";
import Marquee from './Marquee';
import Doctors from "../docters/page";
import About from "../about/page";
import Services from "../services/page";
import Gallery from "../gallery/page";

export default function Home() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isDialogOpen1, setIsDialogOpen1] = useState(false);
    const [isDialogOpen2, setIsDialogOpen2] = useState(false);
    const [value, setValue] = useState(0);

    const giverating = async (row: any) => {
        setIsDialogOpen1(true);
    };

    const takeappointment = async (row: any) => {
        setIsDialogOpen(true);
    };

    const contectus = async (row: any) => {
        setIsDialogOpen2(true);
    };

    return (
        <>
            <div className="p-2 relative grid grid-cols-12">
                <div className="col-span-12  lg:mt-16 -mt-2">
                    <div className="overflow-hidden whitespace-nowrap">
                        <div className="inline-block text-2xl font-bold animate-marquee">
                            Ajay Multy Hospital near SK Hospital Station Road Sikar, services provided 24/7</div>
                    </div>
                   

                </div>
  
                <div className="col-span-12 relative w-full flex items-center cursor-pointer">
                    <Image 
                        src="/hero-img1.jpeg" // Ensure the path is correct
                        alt="Healthy Health"
                        className="w-full lg:h-[450px] md:h-[450px] h-[250px]"
                        width={500} // Set an appropriate width
                        height={300} // Set an appropriate height
                    />
                    <div className="absolute lg:left-20 md:left-16 left-8">
                        <h1 className="lg:text-3xl md:text-3xl text-xl">
                            We Take Care Of Your <br />Healthy Health <br />
                        </h1>
                        <p className="lg:text-xl md:text-xl :text-base">
                            Simply dummy text of the printing typesetting ipsum dotor
                            <br />onsecte diplscing
                        </p>
                        <button className="mt-4 bg-blue-400 rounded px-2 py-1">
                            READ MORE
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-4 md:col-span-4 col-span-12 lg:mt-10 flex items-center justify-center">
                    <Image src="/man.jpeg" alt="" width={400} height={300} className="lg:-mt-10" />
                </div>

                <div className="lg:col-span-4 md:col-span-4 col-span-12 flex flex-col items-center justify-center text-center">
                    <h1 className="text-2xl font-bold ">
                        Welcome To MediLink <br /> Central Hospital
                    </h1>
                    <p className="mt-4 font-bold leading-6">
                        Hospital imply dummy text of the printing and typesetting industry been the industry.
                    </p>
                    {/* <p className="mt-4 leading-6">
        Standard dummy text since when an unknown printer took a galley MediPoint Lorem ipsum dolor sit amet, consetetur sadipscing elitr. At accusam aliquyam's standard dummy text since when an unknown printer took a galley consetetur.
    </p> */}
                </div>

                <div className="lg:col-span-4 md:col-span-4 col-span-12  flex flex-col items-center justify-center">
                    <button className="btn-22 mb-2 min-w-72" onClick={giverating}><span>Give Us Rating</span></button>
                    <button className="btn-22 mb-2 min-w-72" onClick={takeappointment}><span> appointment</span></button>
                    <button className="btn-22 mb-2 min-w-72"><span>Location</span></button>
                    <button className="btn-22 min-w-72" onClick={contectus}><span>Contect us</span></button>
                </div>
                {/* <div className="col-span-12 lg:-mt-[69px]"><About></About></div> */}
                <div className="col-span-12 lg:-mt-[69px]"><Services></Services></div>
                <div className="col-span-12 lg:-mt-[69px]"><Doctors></Doctors></div>
                <div className="col-span-12 lg:-mt-[69px]"><Gallery></Gallery></div>
                {/* Rating Section */}
                <div className="col-span-12">
                    <div className="col-span-12">
                        <div className="mt-2 flex overflow-x-auto"> {/* Use flex for horizontal layout and enable horizontal scrolling */}
                            <div className="flex space-x-4"> {/* Space between items */}
                                {[...Array(4)].map((_, index) => (
                                    <div key={index} className="flex-shrink-0 w-[365px] p-4 flex flex-col items-center justify-center">
                                        <Image className="rounded-full" src="/profile.jpeg" alt="Profile" width={200} height={200} />
                                        <Rating name="read-only" value={3} readOnly />
                                        <p className="capitalize text-base font-serif text-center break-words">
                                            Service of the hospital is very good
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            {/* Rating Dialog */}
            <Dialog open={isDialogOpen1} onOpenChange={setIsDialogOpen1}>
                <DialogContent className="w-full max-w-screen-md xs:h-auto overflow-hidden">
                    <DialogHeader>
                        <DialogTitle>For giving us a rating please fill the form</DialogTitle>
                        <hr className="bg-body-color mx-2" />
                        <DialogDescription>
                            <div className="grid grid-cols-12 gap-2">
                                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                                    <Ainput title='Name'></Ainput>
                                </div>
                                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                                    <Ainput title='Your Image'></Ainput>
                                </div>
                                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                                    <Ainput title='Rating'></Ainput>
                                </div>
                                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                                    <Ainput title='Feedback'></Ainput>
                                </div>
                                <div className='col-span-12 flex items-center justify-center lg:mt-4 mt-2'>
                                    <Rating
                                        name="rating"
                                        value={value}
                                        onChange={(event, newValue) => setValue(newValue ?? 0)}
                                    />
                                </div>

                                <div className='col-span-12 text-center mt-6'>
                                    <button className='hover:cursor-pointer bg-green-500 text-xl px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-blue-600'>Submit</button>
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            {/* Appointment Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="w-full max-w-screen-md xs:h-auto overflow-hidden">
                    <DialogHeader>
                        <DialogTitle>For Appointment Please Fill Form</DialogTitle>
                        <hr className="bg-body-color mx-2" />
                        <DialogDescription>
                            <div className="grid grid-cols-12 gap-2">
                                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                                    <Ainput title='Name'></Ainput>
                                </div>
                                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                                    <Ainput title='Mobile No.'></Ainput>
                                </div>
                                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                                    <Ainput title='Date'></Ainput>
                                </div>
                                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                                    <Ainput title='Department'></Ainput>
                                </div>
                                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                                    <Ainput title='Doctor'></Ainput>
                                </div>
                                <div className='col-span-12 md:col-span-6 lg:col-span-6 mt-6'>
                                    <button className='hover:cursor-pointer bg-green-500 text-xl px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-blue-600'>Submit</button>
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            
            <Dialog open={isDialogOpen2} onOpenChange={setIsDialogOpen2}>
                <DialogContent className="w-full max-w-screen-md xs:h-auto overflow-hidden">
                    <DialogHeader>
                        <DialogTitle>Please Fill your Valueable Words</DialogTitle>
                        <hr className="bg-body-color mx-2" />
                        <DialogDescription>
                            <div className="grid grid-cols-12 gap-2">
                                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                                    <Ainput title='Name'></Ainput>
                                </div>
                                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                                    <Ainput title='Mobile No.'></Ainput>
                                </div>
                                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                                    <Ainput title='Date'></Ainput>
                                </div>
                                {/* <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                                    <Ainput title='Department'></Ainput>
                                </div> */}
                                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                                    <Ainput title='Reason'></Ainput>
                                </div>
                                <div className='col-span-12  flex justify-center mt-6'>
                                    <button className='hover:cursor-pointer bg-green-500 text-xl px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-blue-600'>Submit</button>
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}
