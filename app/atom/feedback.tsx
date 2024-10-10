"use client"

import BasicRating from "./rating";
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Ainput from "./input";

export default function Feedback() {
  const [value, setValue] = React.useState<number | null>(5);
  React.useEffect(() => {
    console.log(value, "value")
  }, [value])


  return (
    <>
   
      {/* <div className="bg-[url('/dr.jpeg')] bg-no-repeat bg-cover gap-2 ml-2 mr-2 p-2 bg-center  grid grid-cols-12 ">

        <div className="col-span-12 text-center font-bold font-mono  capitalize text-xl">
          please give us your feedback. your feedback is very importent for us.
          </div>
        <div className="lg:col-span-2  md:col-span-6 col-span-12">
          <Ainput title="Name"></Ainput>
        </div>
        <div className="lg:col-span-2  md:col-span-6 col-span-12">
          <Ainput title="Mobile Number"></Ainput>
        </div>
        <div className="lg:col-span-4  md:col-span-6 col-span-12">
          <Ainput title="Remark"></Ainput>
        </div>
        <div className="lg:col-span-2 mt-8 text-center  md:col-span-6 col-span-12">
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
        </div>
        <div className="lg:col-span-2 mt-5  md:col-span-6 col-span-12">
          <button className="bg-green-300 rounded text-base font-bold hover:scale-105 px-4 p-2">Submit</button>
        </div>
      </div> */}

      <div className="grid grid-cols-12">
        <div className="col-span-3 p-4 flex flex-col items-center justify-center space-y-4">
          <img className="rounded-full" src="profile.jpeg" alt="Profile" />
          <Rating name="read-only" value={value} readOnly />
          <p className="capitalize text-base w-[220px] font-serif text-center break-words">
            service of the hospital is very good
          </p>
        </div>
        <div className="col-span-3 p-4 flex flex-col items-center justify-center space-y-4">
          <img className="rounded-full" src="profile.jpeg" alt="Profile" />
          <Rating name="read-only" value={value} readOnly />
          <p className="capitalize text-base w-[220px] font-serif text-center break-words">
            service of the hospital is very good
          </p>
        </div>
        <div className="col-span-3 p-4 flex flex-col items-center justify-center space-y-4">
          <img className="rounded-full" src="profile.jpeg" alt="Profile" />
          <Rating name="read-only" value={value} readOnly />
          <p className="capitalize text-base w-[220px] font-serif text-center break-words">
            service of the hospital is very good
          </p>
        </div>
        <div className="col-span-3 p-4 flex flex-col items-center justify-center space-y-4">
          <img className="rounded-full" src="profile.jpeg" alt="Profile" />
          <Rating name="read-only" value={value} readOnly />
          <p className="capitalize text-base w-[220px] font-serif text-center break-words">
            service of the hospital is very good
          </p>
        </div>
      </div>
    </>
  );
}


{/* <marquee>This is a scrolling text using the marquee tag!</marquee> */ }
