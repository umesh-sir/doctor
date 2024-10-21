"use client";

import Link from "next/link";
import Ainput from "../atom/input";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";
import Swal from "sweetalert2";

export default function Login() {

    function showSideAlert(message: any, type: any) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          customClass: {
            container: "side-alert-container",
            popup: `side-alert-${type}`,
            title: "side-alert-title",
            icon: "side-alert-icon",
          },
        });
    
        Toast.fire({
          icon: type,
          title: message,
        });
      }
    
    const router = useRouter();
    const [signup, setSignup] = useState(false);
    const [Otp, setOtp] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: '',
        otp:''
    });

    const [userdata, setUserData] = useState({
        name: '',
        mobile: '',
        email: '',
        password: '',
    });



    const handleInputChange = (name:any, value:any) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const sendsignupOtp1 = async () => {
        try {
            const response = await axios.post('http://localhost:8000/hospital/sendsignupOtp',{
                // date:formData?.mobile
                mobile:'9887318543'
            }); 
         console.log(response,"responseresponseresponse")
         setOtp(response.data.Otp)
         Swal.fire({
            icon: 'success',
            title: 'Success',
            text: `Otp send to ${formdata?.mobile} successfully`,
          });
        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: 'warning',
                title: 'warning',
                text: 'there is a problem to send the otp',
              });
        } 
       };
    

    const savenewuser1 = async () => {
        if(formData.password==''){
            return console.log("please fill password")
        }
        if(formData.password!=formData.confirmPassword){
            return console.log("please confoirm the password")
        }
        if(formData.otp==""){
            return console.log("fill otp")
        }
        if(formData?.otp == Otp){
            return console.log("fill correct otp")
        }
         console.log('ready to save')

        try {
            const response = await axios.post('http://localhost:8000/hospital/savesignup',formData); 
            console.log(response.data,"responseresponseresponse")
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'you create your account successfully',
              }); 
              setFormData({
                name: '',
                mobile: '',
                email: '',
                password: '',
                confirmPassword: '',
                otp:''
            })        
        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: 'warning',
                title: 'warning',
                text: 'there is a problem',
              });
        } 
       };



    const loginfunction = async () => {
        console.log(formData,"formdata")
        try {
        const response = await axios.post('http://localhost:8000/hospital/loginapi',formData); 
         console.log(response,"loginresponse")
         setFormData({
            name: '',
            mobile: "",
            email: '',
            password: "",
            confirmPassword: '',
            otp:''
        })  
        const data=response.data.result;
        if (formData.mobile == data.mobile && formData.password ==data.password  && data.train_id==1) {
            document.cookie = "token=umeshkumawat; path=/";  
            router.push(`/hospital`);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Admin login successfully',
              }); 
        } 
    
        else if (formData.mobile == data.mobile && formData.password == data.password ) {
          
            document.cookie = "token=umeshkumawat; path=/";  
            document.cookie = `userDetails=${JSON.stringify({ email: formData.email })}; path=/`; // Save user details
            router.push(`/ramdeva/patientview`);  
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Login successfully',
              }); 
        }else {
                showSideAlert("Please fill the right credentials", "warning");
                return;
        }
    }catch (err) {
            console.error(err);
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
                                    max={50}
                                />
                            </div>
                            </>
                    )}
                            <div className="col-span-12 w-[300px] lg:w-[400px] md:w-[350px]">
                                <Ainput
                                    title="mobile"
                                    type="number"
                                    value={formData.mobile}
                                    name="mobile"
                                    handleInputChange={handleInputChange}
                                    max={10}
                                />
                            </div>
                  
                     {signup &&  <div className="col-span-12 w-[300px] lg:w-[400px] md:w-[350px]">
                        <Ainput
                            title="Email"
                            type="email"
                            value={formData.email}
                            name="email"
                            handleInputChange={handleInputChange}
                            max={100}
                        />
                    </div>}
                    <div className="col-span-12 w-[300px] lg:w-[400px] md:w-[350px]">
                        <Ainput
                            title="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            handleInputChange={handleInputChange}
                            max={10}
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
                                max={10}
                            />
                        </div>
                    )}
                     {signup && (
                        <div className="col-span-12 w-[300px] lg:w-[400px] md:w-[350px]">
                            <Ainput
                                title="Otp"
                                type="number"
                                name="otp"
                                value={formData.otp}
                                handleInputChange={handleInputChange}
                                max={6}
                            />
                        </div>
                    )}
                    {signup && (
                        <div className="col-span-12 w-[100px] lg:w-[400px] md:w-[350px]">
                           <button id="btn-button118" onClick={sendsignupOtp1} className="btn w-[300px] lg:w-[400px] md:w-[350px]">Send OTP</button>
                        </div>
                    )}
                    {!signup && (
                        <div className="col-span-12 hover:scale-105 flex justify-center">
                            <Link href={'/'}><span className="text-blue-400 text-base hover:underline">Forgot password?</span></Link>
                        </div>
                    )}
                   
                    {!signup && (
                        <div className="col-span-12   mb-4 w-[300px] lg:w-[400px] md:w-[350px] flex justify-center">
                            <button onClick={loginfunction} id="btn-button118" className="btn w-[300px] lg:w-[400px] md:w-[350px]">Login</button>
                        </div>
                    )}
                    {signup && (
                        <div className="col-span-12 mb-4 w-[300px] lg:w-[400px] md:w-[350px] flex justify-center">
                            <button id="btn-button118" onClick={savenewuser1} className="btn w-[300px] lg:w-[400px] md:w-[350px]">Sign Up</button>
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
