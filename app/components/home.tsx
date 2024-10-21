"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "../atom/dailog";
import { DialogTitle, Rating } from "@mui/material";
import Image from "next/image";
import { BiUpArrowAlt } from "react-icons/bi";
import axios from "axios";
import Services from "../ramdeva/services/page";
import Doctors from "../ramdeva/docters/page";
import Gallery from "../ramdeva/gallery/page";
import Popup from "../atom/popup";
import Ainput from "../atom/input";
import Aselect from "../atom/select";
import React from "react";
import Swal from "sweetalert2";
import Loading from "../atom/loading";


interface RatingItem {
  image: string; // Adjust the type if necessary
  rating: number;
  name: string;
  feedback: string;
}


export default function Home() {


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


  function getCurrentDate(monthsBack = 0) {
    const today = new Date();
    today.setMonth(today.getMonth() - monthsBack);
    const year = today.getFullYear();
    let month: any = today.getMonth() + 1;
    let day: any = today.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    return `${year}-${month}-${day}`;
}

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDialogOpen1, setIsDialogOpen1] = useState(false);
  const [Ratingdata, setRatingdata] = useState<RatingItem[]>([]);
  const [sidealertmsg, setSidealertmsg] = useState('');
  const [departmentoption, setDepartmentoption] = useState([]);
  const [doctoroption, setDoctoroption] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    age: '',
    date: getCurrentDate(),
    department: '',
    doctor: '',
  });

  const [formData1, setFormData1] = useState({
    name: '',
    image: '',
    feedback: '',
  });
  const [rating, setRating] = React.useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    getratings()
    getdeprtment()
  }, [])

  const getdeprtment = async () => {
    try {
      const response = await axios.post('http://localhost:8000/hospital/getdepartment');

      setDepartmentoption(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getratings = async () => {
    setIsLoading(true)
    try {
      const response = await axios.post('http://localhost:8000/hospital/getrating');
      console.log(response, "rating")
      setRatingdata(response.data);
      setIsLoading(false)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(()=>{
    if(formData?.department){
      getdoctors()
    }else{
      console.log('nhi chi')
    }
  },[formData?.department])
  
      const getdoctors = async () => {
        setFormData({
          ...formData,
          doctor:'',
        });
          try {
              const response = await axios.post('http://localhost:8000/hospital/getdoctor',{
                depart:formData?.department
              }); 
              setDoctoroption(response.data);
          } catch (err) {
              console.error(err);
          } 
         };
  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInputChange1 = (name: string, value: string) => {
    setFormData1({
      ...formData1,
      [name]: value,
    });
  };


  const giverating = async (row: any) => {
    setIsDialogOpen1(true);
  };

  const takeappointment = async (row: any) => {
    setIsDialogOpen(true);
  };

  const contectus = async (row: any) => {

  };
  const scrollToTop = () => {
    const scrollDuration = 1000; // Duration in milliseconds
    const scrollStep = -window.scrollY / (scrollDuration / 15); // Calculate scroll step
    const scrollInterval = setInterval(() => {
      if (window.scrollY <= 0) {
        clearInterval(scrollInterval); // Clear interval when scrolled to the top
      } else {
        window.scrollBy(0, scrollStep); // Scroll by calculated step
      }
    }, 15); // Execute every 15 ms
  };

  const saveaponitment = async () => {
    if(!formData.name){
        showSideAlert("Please fill the name", "warning");
        return;
    }
    if(!formData.mobile){
      showSideAlert("Please fill the mobile no.", "warning");
      return;
  }
  if(!formData.age){
    showSideAlert("Please fill the age", "warning");
    return;
}
if(!formData.date){
  showSideAlert("Please fill the date", "warning");
  return;
}
if(!formData.department){
  showSideAlert("Please fill the department", "warning");
  return;
}
if(!formData.doctor){
  showSideAlert("Please fill the doctor", "warning");
  return;
}
    
    setIsDialogOpen(false)
    try {
      const response = await axios.post('http://localhost:8000/hospital/saveappoint', formData);
      console.log(response, "responseresponseresponse")
      setFormData({
        name: '',
        mobile: '',
        age: '',
        date: getCurrentDate(),
        department: '',
        doctor: '',
      })
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Appointment Save successfully',
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'warning',
        title: 'warning',
        text: 'Can not save the appointment',
      });
    }
  };


  const handleFileChange = async (event: any) => {
    const file = event.target.files?.[0];
    console.log(file, "filefile");
    if (file) {
      await uploadimage(file);
    }
  };


  const uploadimage = async (file: any) => {
    try {
      const formData2 = new FormData();
      formData2.append("name", 'ramdeva');
      formData2.append("Image", file);

      const result = await axios.post(
        `http://localhost:8000/hospital/uploadeddocument`, formData2)
      // console.log(result.data.data[0].path, "result")
      const data = result.data.data[0].path
      setFormData1({
        ...formData1,
        image: data,
      });
    }
    catch (err) {
      console.error(err);
    }
  };


  const saverating = async () => {
    if(!formData1.name){
      showSideAlert("Please fill the name", "warning");
      return;
  }
  if(!formData1.image){
    showSideAlert("Please fill the image", "warning");
    return;
}
if(!formData1.feedback){
  showSideAlert("Please fill the feedback", "warning");
  return;
}
if(!rating){
  showSideAlert("Please fill the rating", "warning");
  return;
}
    setIsDialogOpen1(false)
    try {
      const response = await axios.post('http://localhost:8000/hospital/saverating', {...formData1,rating:rating});
      getratings()
      setFormData1({
        name: '',
        image: '',
        feedback: '',
      });
      setRating(null)
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Thank you for geving us rating',
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'warning',
        title: 'warning',
        text: 'there is a probleam',
      });
    }
  };

 

  const handleRatingChange = (event: React.SyntheticEvent, newValue: number | null) => {
    setRating(newValue);
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
                {Ratingdata?.map((item: RatingItem, index) => (
                  <div key={index} className="flex-shrink-0 w-[365px] p-4 flex flex-col items-center justify-center">
                    <Image className="rounded-full" src={`https://erp.autovyn.com/backend/fetch?filePath=${item.image}`} alt="Profile" width={200} height={300} />
                    <Rating name="read-only" value={item.rating} readOnly />
                    <p className="capitalize text-base font-serif text-center break-words">{item.name}</p>
                    <p className="capitalize text-base font-serif text-center break-words">{item.feedback}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <button onClick={scrollToTop} className="bg-blue-500 hover:translate-y-[-8px] text-white rounded-full shadow-lg transition-transform duration-300 ease-in-out">
          <BiUpArrowAlt className="w-10 font-bold h-10" />
        </button>
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
                  <Ainput
                    title='Name'
                    type='text'
                    name='name'
                    value={formData1.name}
                    handleInputChange={handleInputChange1}
                    redlabel='*'
                    max={50}

                  />
                </div>
                <div className='col-span-12 mt-8 md:col-span-6 lg:col-span-6'>
                  <input
                    title='Your Image'
                    type='file'
                    name='image'
                    // value={formData1.image}
                    onChange={() => { handleFileChange(event) }}
                  />
                </div>

                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                  <Ainput
                    title='Feedback'
                    type='text'
                    name='feedback'
                    value={formData1.feedback}
                    handleInputChange={handleInputChange1}
                    redlabel='*'
                    max={50}

                  />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-6 flex items-center justify-center lg:mt-4 mt-2'>
                <Rating
        name="simple-controlled"
        value={rating}
        onChange={handleRatingChange}
        precision={0.5}
      />

                </div>
                <div className="col-span-12 flex justify-center text-red-600 mt-2" >{sidealertmsg}</div>
                <div className='col-span-12 text-center mt-6'>
                  <button onClick={saverating} className='hover:cursor-pointer bg-green-500 text-xl px-2 py-1 rounded-tl-xl text-ellipsis whitespace-nowrap rounded-br-xl hover:bg-blue-600'>Submit</button>
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
                  <Ainput
                    title='Name'
                    type='text'
                    name='name'
                    value={formData.name}
                    handleInputChange={handleInputChange}
                    redlabel='*'
                    max={50}


                  />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                  <Ainput
                    title='Age'
                    type='number'
                    name='age'
                    value={formData.age}
                    handleInputChange={handleInputChange}
                    redlabel='*'
                    max={2}


                  />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                  <Ainput
                    title='Mobile No.'
                    type='tel'
                    name='mobile'
                    value={formData.mobile}
                    handleInputChange={handleInputChange}
                    redlabel='*'
                    max={10}


                  />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                  <Ainput
                    title='Date'
                    type='date'
                    name='date'
                    value={formData.date}
                    handleInputChange={handleInputChange}
                    redlabel='*'


                  />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                  <Aselect
                    title='Department'
                    name='department'
                    value={formData.department}
                    options={departmentoption}
                    handleInputChange={handleInputChange}
                  />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                  <Aselect
                    title='Doctor'
                    name='doctor'
                    options={doctoroption}
                    value={formData.doctor}
                    handleInputChange={handleInputChange}
                  />


                </div>
                <div className="col-span-12 flex justify-center text-red-600 mt-2" >{sidealertmsg}</div>
                <div className='col-span-12 md:col-span-12  flex justify-center lg:col-span-12 mt-2'>
                  <button onClick={saveaponitment} className='hover:cursor-pointer bg-green-500 text-xl px-2 py-1 rounded-tl-xl text-ellipsis text-white whitespace-nowrap rounded-br-xl hover:bg-blue-600'>submit</button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Loading isLoading={isLoading} />

    </>
  );
}
