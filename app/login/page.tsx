"use client";

import Link from "next/link";
import Ainput from "../atom/input";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const [signup, setSignup] = useState(false);
    const [Error, setError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (name:any, value:any) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const loginfunction = () => {
        console.log('Form data:', formData);
        if(formData.email=='umesh@gmail.com' && formData.password=='umesh'){
            setError('')
            router.push(`/hospital`)
        }else{
            setError('Please fill the right credencial')
        }
    };

    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/hero-img1.jpeg)' }}>
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <div className="col-span-12 absolute top-4 flex justify-center lg:text-5xl text-lg font-bold lg:mt-4 md:mt-40 md:text-2xl w-[300px] lg:w-[1000px] md:w-[600px]">
                    Welcome to Ramdeva Hospital
                </div>
                <div className="grid grid-cols-12 gap-2 p-4">
                    {signup && (
                        <>
                            <div className="col-span-12 w-[300px] lg:w-[400px] md:w-[350px]">
                                <Ainput
                                    title="Name"
                                    value={formData.name}
                                    name="name"
                                    type="text"
                                    handleInputChange={handleInputChange}
                                />
                            </div>
                            <div className="col-span-12 w-[300px] lg:w-[400px] md:w-[350px]">
                                <Ainput
                                    title="mobile"
                                    type="number"
                                    value={formData.mobile}
                                    name="mobile"
                                    handleInputChange={handleInputChange}
                                />
                            </div>
                        </>
                    )}
                    <div className="col-span-12 w-[300px] lg:w-[400px] md:w-[350px]">
                        <Ainput
                            title="Email"
                            type="email"
                            value={formData.email}
                            name="email"
                            handleInputChange={handleInputChange}
                        />
                    </div>
                    <div className="col-span-12 w-[300px] lg:w-[400px] md:w-[350px]">
                        <Ainput
                            title="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            handleInputChange={handleInputChange}
                        />
                    </div>
                    {signup && (
                        <div className="col-span-12 w-[300px] lg:w-[400px] md:w-[350px]">
                            <Ainput
                                title="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                handleInputChange={handleInputChange}
                            />
                        </div>
                    )}
                    {!signup && (
                        <div className="col-span-12 hover:scale-105 flex justify-center">
                            <Link href={'/'}><span className="text-blue-400 text-base hover:underline">Forgot password?</span></Link>
                        </div>
                    )}
                      <div className="col-span-12 text-red-800    w-[300px] lg:w-[400px] md:w-[350px] flex justify-center">
                           {Error}
                        </div>
                    {!signup && (
                        <div className="col-span-12   mb-4 w-[300px] lg:w-[400px] md:w-[350px] flex justify-center">
                            <button onClick={loginfunction} id="btn-button118" className="btn w-[300px] lg:w-[400px] md:w-[350px]">Login</button>
                        </div>
                    )}
                    {signup && (
                        <div className="col-span-12 mt-4 mb-4 w-[300px] lg:w-[400px] md:w-[350px] flex justify-center">
                            <button id="btn-button118" className="btn w-[300px] lg:w-[400px] md:w-[350px]">Sign Up</button>
                        </div>
                    )}
                    {!signup && (
                        <div className="col-span-12 hover:scale-105 flex justify-center">
                            <span>Do not have an account?</span>
                            <Link className="ml-2" href={''}>
                                <span onClick={() => setSignup(true)} className="text-blue-400 text-base hover:underline">Sign up</span>
                            </Link>
                        </div>
                    )}
                    {signup && (
                        <div className="col-span-12 hover:scale-105 flex justify-center">
                            <span>Already have an account?</span>
                            <Link className="ml-2" href={''}>
                                <span onClick={() => setSignup(false)} className="text-blue-400 text-base hover:underline">Login</span>
                            </Link>
                        </div>
                    )}
                    <div className="col-span-12 hover:scale-105 flex justify-center">
                        <Link className="ml-2" href={'/'}>
                            <span className="text-blue-400 text-base hover:underline">Go to home page</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
