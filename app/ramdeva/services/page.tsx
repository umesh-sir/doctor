"use client";

import Image from "next/image";

export default function Services() {
    const departments = [
        { img: '/service/emg.png', depart: 'Emergency Services', desc: 'Emergency Department is staffed 24/7 with experienced medical professionals ready to provide immediate care for urgent and life-threatening conditions.' },
        { img: '/service/medi.png', depart: 'Internal Medicine', desc: 'Internal medicine focuses on adult health, diagnosing and treating complex diseases, emphasizing preventive care and comprehensive management of chronic conditions.' },
        { img: '/service/surgery.png', depart: 'General & Laparoscopic Surgery', desc: 'General and laparoscopic surgery involve diagnosing and treating conditions through minimally invasive techniques, enhancing recovery and reducing scarring compared to traditional surgery.' },
        { img: '/service/pediatrics.png', depart: 'Pediatrics', desc: 'Pediatrics focuses on the health and development of infants, children, and adolescents, addressing their physical, emotional, and social well-being.' },
        { img: '/service/orthopedics.png', depart: 'Orthopedics', desc: 'Orthopedics specializes in diagnosing, treating, and preventing musculoskeletal disorders, including bones, joints, ligaments, and muscles, to restore function and mobility.' },
        { img: '/service/cardiology.png', depart: 'Cardiology', desc: 'Cardiology focuses on diagnosing and treating heart and vascular conditions, emphasizing prevention, management of diseases, and promoting overall cardiovascular health.' },
        { img: '/service/radiology.png', depart: 'Radiology', desc: 'Radiology uses imaging techniques like X-rays, MRIs, and CT scans to diagnose and monitor diseases, guiding treatment decisions and patient care.' },
        { img: '/service/neurology.png', depart: 'Neurology', desc: 'Neurology focuses on diagnosing and treating disorders of the nervous system, including the brain, spinal cord, and peripheral nerves.' },
        { img: '/service/default.png', depart: 'General Services', desc: 'This is the free service for all people.' },
        { img: '/service/default.png', depart: 'General Services', desc: 'This is the free service for all people.' },
        { img: '/service/default.png', depart: 'General Services', desc: 'This is the free service for all people.' },
        { img: '/service/default.png', depart: 'General Services', desc: 'This is the free service for all people.' },
    ];

    const starCount = 100;
    return (
        <>
            <div className="p-2 grid grid-cols-12 gap-4">
                
                {/* <div className="relative col-span-12 text-3xl font-bold flex lg:mt-[69px] justify-center items-center h-10 rounded-bl-full rounded-tr-full -mb-2 w-full bg-slate-400 overflow-hidden">
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
      `}</style>     Services
    </div> */}
    <div className=" flex justify-center text-3xl font-bold col-span-12 mt-[69px]">
   -- Services --
    </div>
    {departments.map((department, index) => (
                <div
                    key={index}
                    className={`col-span-4 min-h-72  transform transition-all duration-300 hover:scale-x-105 rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl ${department.color}`} // Use the color class
                >
                    <Image
                        className="rounded-full h-24 w-24 bg-primary mx-auto mt-4 transition-transform duration-300 transform hover:scale-125"
                        src={department.img}
                        alt={department.depart}
                        width={100}
                        height={100}
                    />
                    <div className="p-4 text-center">
                        <h2 className="text-2xl font-bold ">{department.depart}</h2> {/* Change text color to white for better contrast */}
                        <p className=" mt-2">{department.desc}</p> {/* Change text color for better contrast */}
                    </div>
                </div>
            ))}
            </div>
        </>
    );
}
