"use client"

import SwipeableTextMobileStepper from "../atom/carousel";


export default function Footer() {
    return (
        <>
            <div className="grid grid-cols-12 bg-blue-400  p-2">
                <div className="lg:col-span-3  md:col-span-3 col-span-6  text-white text-center p-2 ">
                    <div className="text-lg font-bold">Dr. Umesh Kumawat</div>
                    <div className="text-base font-serif">- for indian skin -</div>
                </div>
                <div className="lg:col-span-3  md:col-span-3 col-span-6 text-white text-center p-2 ">
                    <div className="text-lg font-bold">MY ACCOUNT</div>
                    <div>Our Story</div>
                    <div>Terms of Service </div>
                    <div>Return Policy </div>
                    <div>Refer a Friend </div>
                </div>
                <div className="lg:col-span-3  md:col-span-3 col-span-6 text-white text-center p-2">
                    <div className="text-lg font-bold">ABOUT AS</div>
                    <div>Information</div>
                </div>
                <div className="lg:col-span-3  md:col-span-3 col-span-6 text-white text-center p-2">
                    <div className="text-lg font-bold ">FOLLOW US</div>
                    <div className="text-lg mt-1 flex justify-center"><img className="w-5 h-5 hover:scale-110 hover:cursor-pointer" src="social/instagram.png" onClick={()=>{console.log("insta")}}></img> <span className="text-base hover:cursor-pointer hover:scale-110  -mt-1 ml-2 font-semibold">Instagram</span></div>
                    <a className="text-lg mt-1 -ml-1 flex justify-center" href="https://wa.me/9887242595"><img className="w-5 h-5 hover:scale-110 hover:cursor-pointer" src="social/whatsapp.png" ></img> <span className="text-base hover:cursor-pointer hover:scale-110  -mt-1 ml-2 font-semibold">whatsapp</span></a>
                    <div className="text-lg mt-1 -ml-1 flex justify-center"><img className="w-5 h-5 hover:scale-110 hover:cursor-pointer" src="social/facebook.png" onClick={()=>{console.log("insta")}}></img> <span className="text-base hover:cursor-pointer hover:scale-110  -mt-1 ml-2 font-semibold">Facebook</span></div>
                    <div className="text-lg mt-1 -ml-4 flex justify-center"><img className="w-5 h-5 hover:scale-110 hover:cursor-pointer" src="social/youtube.png" onClick={()=>{console.log("insta")}}></img> <span className="text-base hover:cursor-pointer hover:scale-110  -mt-1 ml-2 font-semibold">Youtube</span></div>
                    <div className="text-lg mt-1 -ml-6 flex justify-center"><img className="w-5 h-5 hover:scale-110 hover:cursor-pointer" src="social/twitter.png" onClick={()=>{console.log("insta")}}></img> <span className="text-base hover:cursor-pointer hover:scale-110  -mt-1 ml-2 font-semibold">Twitter</span></div>


                </div>

                <hr className="col-span-12 "></hr>
                <div className="lg:col-span-6 md:col-span-6 col-span-12 text-white font-semibold text-center text-base p-2"> Copyright © 2023 All Rights Reserved</div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12 text-white p-2 text-center ">@ # $ % & *</div>
            </div>
        </>
    );
}