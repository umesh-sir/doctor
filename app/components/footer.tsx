"use client";

import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <div className="grid grid-cols-12 bg-slate-500 p-2">
                
                <div className="lg:col-span-3 md:col-span-3 col-span-6 text-white text-center p-2">
                    <div className="text-lg font-serif font-bold">Dr. Umesh Kumawat</div>
                    <div className="text-base font-serif">- for indian skin -</div>
                </div>
                <div className="lg:col-span-3 md:col-span-3 col-span-6 text-white text-center p-2">
                    <div className="text-lg font-serif font-bold">MY ACCOUNT</div>
                    <div className='font-serif'>Our Story</div>
                    <div className='font-serif'>Terms of Service</div>
                    <div className='font-serif'>Return Policy</div>
                    <div className='font-serif'>Refer a Friend</div>
                </div>
                <div className="lg:col-span-3 md:col-span-3 col-span-6 text-white text-center p-2">
                    <div className="text-lg font-serif font-bold">ABOUT US</div>
                    <div className='font-serif'>Information</div>
                </div>
                <div className="lg:col-span-3 md:col-span-3 col-span-6 text-white text-center p-2">
                    <div className="text-lg font-bold">FOLLOW US</div>
                    <div className="text-lg mt-1 flex justify-center">
                        <Image
                            className="w-5 h-5 hover:scale-110 hover:cursor-pointer"
                            src="/social/instagram.png"
                            alt="Instagram"
                            width={20}
                            height={20}
                            onClick={() => { console.log("Instagram") }}
                        />
                        <span className="text-base font-serif hover:cursor-pointer hover:scale-110 -mt-1 ml-2 font-semibold">Instagram</span>
                    </div>
                    <a className="text-lg mt-1 -ml-1 flex justify-center" href="https://wa.me/9887242595">
                        <Image
                            className="w-5 h-5 hover:scale-110 hover:cursor-pointer"
                            src="/social/whatsapp.png"
                            alt="WhatsApp"
                            width={20}
                            height={20}
                        />
                        <span className="text-base font-serif hover:cursor-pointer hover:scale-110 -mt-1 ml-2 font-semibold">WhatsApp</span>
                    </a>
                    <div className="text-lg mt-1 -ml-1 flex justify-center">
                        <Image
                            className="w-5 h-5 hover:scale-110 hover:cursor-pointer"
                            src="/social/facebook.png"
                            alt="Facebook"
                            width={20}
                            height={20}
                            onClick={() => { console.log("Facebook") }}
                        />
                        <span className="text-base font-serif hover:cursor-pointer hover:scale-110 -mt-1 ml-2 font-semibold">Facebook</span>
                    </div>
                    <div className="text-lg mt-1 -ml-4 flex justify-center">
                        <Image
                            className="w-5 h-5 hover:scale-110 hover:cursor-pointer"
                            src="/social/youtube.png"
                            alt="YouTube"
                            width={20}
                            height={20}
                            onClick={() => { console.log("YouTube") }}
                        />
                        <span className="text-base font-serif hover:cursor-pointer hover:scale-110 -mt-1 ml-2 font-semibold">YouTube</span>
                    </div>
                    <div className="text-lg mt-1 -ml-6 flex justify-center">
                        <Image
                            className="w-5 h-5 hover:scale-110 hover:cursor-pointer"
                            src="/social/twitter.png"
                            alt="Twitter"
                            width={20}
                            height={20}
                            onClick={() => { console.log("Twitter") }}
                        />
                        <span className="text-base font-serif hover:cursor-pointer hover:scale-110 -mt-1 ml-2 font-semibold">Twitter</span>
                    </div>
                </div>

                <hr className="col-span-12" />
                <div className="lg:col-span-6 md:col-span-6 col-span-12 text-white font-semibold text-center text-base p-2">
                    Copyright © 2023 All Rights Reserved
                </div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12 text-white p-2 text-center">
                    @ # $ % & *
                </div>
            </div>
        </>
    );
}
