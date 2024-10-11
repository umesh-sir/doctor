"use client";

import { useEffect, useState } from "react";
import About from "../atom/about";
import SwipeableTextMobileStepper from "../atom/carousel";
import Feedback from "../atom/feedback";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "../atom/dailog";
import { DialogTitle, Rating } from "@mui/material";
import Apponitment from "./appointment";
import Ainput from "./input";
import Image from "next/image"; // Import the Image component

export default function Home() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isDialogOpen1, setIsDialogOpen1] = useState(false);
    const [value, setValue] = useState(0); // State for the rating

    const giverating = async (row) => {
        setIsDialogOpen1(true);
    };

    const takeappointment = async (row) => {
        setIsDialogOpen(true);
    };

    return (
        <>
            <div className="p-2 relative grid grid-cols-12 ">
                <div className="col-span-12">
                    <marquee className="capitalize font-bold lg:mt-[70px] mt-16 text-lg text-xl bg-blue-300">
                        Ajay Multy Hospital near SK Hospital Station Road Sikar, services provided 24/7
                    </marquee>
                </div>
                <div className="col-span-12"><SwipeableTextMobileStepper /></div>
                <div className="flex flex-wrap col-span-12 justify-center items-start w-full my-16 contain_1">
                    <div className="w-[25rem] h-auto img_box">
                        <Image src="/man.jpeg" alt="" width={400} height={300} className="w-full h-auto" />
                    </div>
                    <div className="w-[25rem] h-auto text-box text-secondary-color">
                        <h1 className="text-2xl font-bold heading_1">
                            Welcome To MediLink <br /> Central Hospital
                        </h1>
                        <p className="mt-4 font-bold para_1 leading-6">
                            Hospital imply dummy text of the printing and typesetting industry been the industry.
                        </p>
                        <p className="mt-4 para_2 leading-6">
                            Standard dummy text since when an unknown printer took a galley MediPoint Lorem ipsum dolor sit amet, consetetur sadipscing elitr. At accusam aliquyam's standard dummy text since when an unknown printer took a galley consetetur.
                            <Image src="/assets/images.png" alt="" width={112} height={112} className="h-[7rem]" />
                        </p>
                    </div>

                    <div className="w-[20rem] h-auto details-buttons flex flex-col space-y-4 ml-4">
                        <button onClick={takeappointment} className="dt-btn flex items-center justify-start w-full p-4 rounded bg-btn-background text-primary-color hover:bg-btn-hover">
                            <i className="fa-solid fa-location-dot icon"></i>
                            Request Appointment
                            <i className="fa-solid fa-angle-right icon-right ml-auto"></i>
                        </button>

                        <button onClick={giverating} className="dt-btn flex items-center justify-start w-full p-4 rounded bg-btn-background text-primary-color hover:bg-btn-hover">
                            <i className="fa-solid fa-user-doctor icon"></i>
                            Give us Rating
                            <i className="fa-solid fa-angle-right icon-right ml-auto"></i>
                        </button>

                        <button className="dt-btn flex items-center justify-start w-full p-4 rounded bg-btn-background text-primary-color hover:bg-btn-hover">
                            <i className="fa-solid fa-location-dot icon"></i>
                            Location
                            <i className="fa-solid fa-angle-right icon-right ml-auto"></i>
                        </button>

                        <button className="dt-btn flex items-center justify-start w-full p-4 rounded bg-btn-background text-primary-color hover:bg-btn-hover">
                            <i className="fa-solid fa-phone icon"></i>
                            Emergency Contact
                            <i className="fa-solid fa-angle-right icon-right ml-auto"></i>
                        </button>
                    </div>
                </div>

                {/* Rating Section */}
                <div className="col-span-12">
                    <div className="mt-2 grid grid-cols-12 gap-4">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="lg:col-span-3 col-span-12 p-4 flex flex-col items-center justify-center space-y-4">
                                <Image className="rounded-full" src="/profile.jpeg" alt="Profile" width={80} height={80} />
                                <Rating name="read-only" value={3} readOnly />
                                <p className="capitalize text-base w-[220px] font-serif text-center break-words">
                                    Service of the hospital is very good
                                </p>
                            </div>
                        ))}
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
                                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                                    <Rating name="rating" value={value} onChange={(event, newValue) => setValue(newValue)} />
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
        </>
    );
}
