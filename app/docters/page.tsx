"use client";

import Image from "next/image";

const doctorsData = [
    { id: 1, name: "Dr. John Smith", department: "Cardiology", photo: "/drteam/dr1.jfif" },
    { id: 2, name: "Dr. Jane Doe", department: "Pediatrics", photo: "/drteam/dr2.jfif" },
    { id: 3, name: "Dr. Alice Brown", department: "Orthopedics", photo: "/drteam/dr3.jpg" },
    { id: 4, name: "Dr. Bob Johnson", department: "Emergency Services", photo: "/drteam/dr4.jfif" },
    { id: 5, name: "Dr. John Smith", department: "Cardiology", photo: "/drteam/dr5.jfif" },
    { id: 6, name: "Dr. Jane Doe", department: "Pediatrics", photo: "/drteam/dr6.jfif" },
    { id: 7, name: "Dr. Alice Brown", department: "Orthopedics", photo: "/drteam/dr3.jpg" },
    { id: 8, name: "Dr. Bob Johnson", department: "Emergency Services", photo: "/drteam/dr4.jfif" },
];

export default function Doctors() {
    return (
        <>
            <div className="p-2 grid grid-cols-12">
                <div className="col-span-12 text-3xl font-bold flex justify-center items-center mt-16 h-20 bg-no-repeat bg-cover gap-2 bg-center animate-gradient">
                    Doctors
                </div>
                <div className="col-span-12 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                        {doctorsData.map(doctor => (
                            <div key={doctor.id} className="p-4 border rounded shadow-lg">
                                <Image 
                                    src={doctor.photo} 
                                    alt={doctor.name} 
                                    className="w-full h-48 object-cover rounded mb-2"
                                    width={192} // Adjust width as needed
                                    height={192} // Adjust height as needed
                                />
                                <h3 className="text-xl font-bold">{doctor.name}</h3>
                                <p className="text-gray-600">{doctor.department}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
