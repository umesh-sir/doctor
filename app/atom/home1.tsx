"use client"

import { useState } from "react";
import About from "../atom/about";
import SwipeableTextMobileStepper from "../atom/carousel";
import Feedback from "../atom/feedback";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "../atom/dailog";
import { DialogTitle, Rating } from "@mui/material";
import Apponitment from "./appointment";



export default function Home1() {

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  
  const takeappointment = async (row: any) => {
    setIsDialogOpen(true)
};

    return (
   <>
   <div className="hero-img">
      <img src="assets/hero-img1.jpeg" alt="" />
      <div className="text">
        We Take Care Of Your <br />Healthy Health <br />
        <p className="hero-para">
          Mimply dummy text of the printing typesetting ipsum dotor
          <br />onsecte diplscing
        </p>
        <button className="hero-btn hero-btn-1">
          READ MORE <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>

   

    <div className="contain_1">
      <div className="img_box">
        <img src="facebook.png" alt="" />
      </div>
      <div className="text-box">
        <h1 className="heading_1">Welcome To MediLink <br />Central Hospital</h1>

        <p className="para_1">
          Hospital imply dummy text of the printing and type setng industry been
          the industry.
        </p>

        <p className="para_2">
          Mtandard dummy text since when an unknown printer took a galley
          MediPoint Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At
          accusam aliquyam's standard dummy texr since when an unknown printer
          took a galley consetetur.
          <img src="/facebook.png" alt=""   />
        </p>
      </div>

      <div className="details-buttons">
        <button className="dt-btn">
          <i className="fa-solid fa-location-dot icon"></i>
          Request Appointment
          <i className="fa-solid fa-angle-right icon-right"></i>
        </button>

        <button className="dt-btn">
          <i className="fa-solid fa-user-doctor icon"></i>
          Find Doctors
          <i className="fa-solid fa-angle-right icon-right"></i>
        </button>

        <button className="dt-btn">
          <i className="fa-solid fa-location-dot icon"></i>
          Location
          <i className="fa-solid fa-angle-right icon-right"></i>
        </button>

        <button className="dt-btn">
          <i className="fa-solid fa-phone icon"></i>
          Emergency Contact
          <i className="fa-solid fa-angle-right icon-right"></i>
        </button>
      </div>
    </div>
    </>
    );
  }