"use client";

import Image from "next/image";

export default function About() {
    const starCount = 100;
    return (
        <>
            <div className="p-2 grid grid-cols-12 gap-2">
  

               
         {/* <div className="relative rounded-bl-full rounded-tr-full  col-span-12 text-3xl font-bold flex lg:mt-[69px] justify-center items-center h-10  w-full bg-slate-400 overflow-hidden"> 
            {Array.from({ length: starCount }).map((_, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            width: '5px',
            height: '5px',
            backgroundColor: 'white',
            borderRadius: '50%',
            animation: `blink 1.5s infinite ${Math.random() * 2}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>     About Us
    </div>  */}
               
                <div className="col-span-12 lg:mt-[69px] relative w-full flex items-center cursor-pointer">
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

         <div className="col-span-12 text-3xl text-red-400 font-bold ml-16 mr-16">
         About Manavata Healthcare & Research Center, Sikar
        </div> 
        <div className="col-span-12 text-2xl text-red-400 font-bold ml-16 mr-16">
        Your Health, Our Mission
        </div> 
        <div className="col-span-12 text-lg  font-medium ml-16 mr-16">
        Ramdeva Hospital is a renowned healthcare facility committed to providing high-quality medical services to its community. Established with a vision to deliver comprehensive healthcare, the hospital offers a wide range of specialties, including emergency care, surgery, pediatrics, and cardiology. With state-of-the-art technology and a team of experienced medical professionals, Ramdeva Hospital focuses on patient-centered care, ensuring that each individual receives personalized attention and treatment. The hospital is dedicated to promoting health and wellness through various outreach programs and preventive care initiatives, making it a trusted choice for patients seeking reliable healthcare services.
        </div> 
        <div className="col-span-12 text-2xl text-red-400 font-bold ml-16 mr-16">
        Facilities and Technology at Ramdeva Hospital
        </div> 
        <div className="col-span-12 text-lg font-medium ml-16 mr-16">
        Ramdeva Hospital is equipped with modern medical facilities and advanced technology to provide exceptional healthcare services. The hospital features well-equipped operation theaters, intensive care units (ICUs), and comfortable patient wards that ensure a conducive healing environment. Utilizing cutting-edge diagnostic tools such as MRI, CT scans, and ultrasound machines, the hospital ensures accurate and timely diagnoses. Additionally, the hospital incorporates telemedicine services, allowing patients to consult with specialists remotely. With a commitment to continuous improvement, Ramdeva Hospital invests in the latest medical technologies and training for its staff, ensuring that patients receive the best possible care.
        </div> 
        <div className="col-span-12 text-2xl text-red-400 font-bold ml-16 mr-16">
        Services at Ramdeva Hospital
        </div> 
        <div className="col-span-12 text-lg font-medium ml-16 mr-16">
    <p>Ramdeva Hospital provides a comprehensive range of healthcare services designed to meet the diverse needs of its patients. Key services include:</p>
    <ul className="list-disc pl-5">
        <li>24/7 Emergency Care</li>
        <li>Specialized consultations across various fields such as cardiology, orthopedics, pediatrics, and gynecology</li>
        <li>Advanced surgical procedures, including minimally invasive techniques</li>
        <li>Post-operative care</li>
        <li>Diagnostic services, including laboratory testing, imaging, and screenings for accurate assessments</li>
        <li>Preventive healthcare through wellness programs, health education, and regular health check-ups</li>
    </ul>
</div>

         <div className="col-span-12 text-2xl text-red-400 font-bold ml-16 mr-16">
         Key Highlights of Ramdeva Hospital
        </div> 
        <div className="col-span-12 text-lg font-medium ml-16 mr-16">
    <ul className="list-disc pl-5">
        <li>24/7 Emergency Care: Always available to address urgent medical needs.</li>
        <li>Specialized Departments: Comprehensive services in cardiology, orthopedics, pediatrics, gynecology, and more.</li>
        <li>Advanced Surgical Facilities: Equipped with state-of-the-art operating theaters for various surgical procedures, including minimally invasive options.</li>
        <li>Diagnostic Excellence: Modern imaging and laboratory services for accurate diagnostics.</li>
        <li>Patient-Centered Care: Focused on personalized treatment plans and compassionate care.</li>
        <li>Preventive Health Programs: Initiatives aimed at promoting health and wellness through education and regular screenings.</li>
    </ul>
</div>

            </div>
        </>
    );
}
