"use client";

import Appointment from "../atom/appointment";

const doctorsData = [
    { id: 1, name: "Dr. John Smith", department: "Cardiology", photo: "about1.jpg" },
    { id: 2, name: "Dr. Jane Doe", department: "Pediatrics", photo: "about1.jpg" },
    { id: 3, name: "Dr. Alice Brown", department: "Orthopedics", photo: "about1.jpg" },
    { id: 4, name: "Dr. Bob Johnson", department: "Emergency Services", photo: "about1.jpg" },
    // Add more doctors as needed
];

export default function Doctors() {
    return (
        <>
            <div className="p-2 grid grid-cols-12">
                <div className="col-span-12 text-3xl font-bold flex justify-center items-center mt-16 h-40 bg-[url('/dr.jpeg')] bg-no-repeat bg-cover gap-2 bg-center">
                    Doctors
                </div>
                <div className="col-span-12 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                        {doctorsData.map(doctor => (
                            <div key={doctor.id} className="p-4 border rounded shadow-lg">
                                <img src={doctor.photo} alt={doctor.name} className="w-full h-76 object-cover rounded mb-2" />
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
