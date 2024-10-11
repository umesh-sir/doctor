"use client";

import Image from "next/image";
import Apponitment from "../atom/appointment";

export default function About() {
    return (
        <>
            <div className="p-2 grid grid-cols-12 gap-2">
                <div className="col-span-12 text-3xl font-bold flex justify-center items-center mt-16 h-20 bg-no-repeat bg-cover gap-2 bg-center animate-gradient">
                    About Us
                </div>
                
                {/* First Section */}
                <div className="col-span-12 relative w-full flex items-center cursor-pointer">
                    <Image 
                        src="/hero-img1.jpeg" // Ensure the path is correct
                        alt="Healthy Health"
                        className="w-full lg:h-[450px] md:h-[450px] h-[250px]"
                        width={500} // Set an appropriate width
                        height={300} // Set an appropriate height
                    />
                    <div className="absolute lg:left-20">
                        <h1 className="text-3xl">
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

                {/* Second Section */}
                <div className="col-span-12 relative w-full flex items-center cursor-pointer">
                    <Image 
                        src="/hero-img1.jpeg" // Ensure the path is correct
                        alt="Your Health is Good"
                        className="w-full lg:h-[450px] md:h-[450px] h-[250px]"
                        width={500} // Set an appropriate width
                        height={300} // Set an appropriate height
                    />
                    <div className="absolute lg:left-20">
                        <h1 className="text-3xl">
                            Your Health is Good <br />This is Our Aim <br />
                        </h1>
                        <p className="text-xl">
                            Welcome to <span className="text-2xl font-bold">Ajay Hospital</span>, where your health and well-being are our top priorities. Established in 1992, we are dedicated to providing compassionate, high-quality medical care to our community.
                        </p>
                        <p className="text-xl hidden md:block">
                            At <span className="text-2xl font-bold">Ajay Hospital</span>, our team of experienced healthcare professionals is committed to delivering comprehensive services across a wide range of specialties, including [list a few key specialties, e.g., cardiology, orthopedics, pediatrics]. We leverage the latest medical technology and evidence-based practices to ensure the best possible outcomes for our patients.
                        </p>
                        <p className="text-xl hidden md:block">
                            Our mission is to enhance the health of our community through personalized care, advanced treatment options, and a commitment to excellence. We believe in treating each patient with dignity and respect, fostering a supportive environment for healing and recovery.
                        </p>
                        <p className="hidden md:block text-xl font-semibold">
                            Thank you for trusting us with your healthcare needs. Together, we can achieve a healthier tomorrow.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
