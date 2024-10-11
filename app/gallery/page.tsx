"use client";

import { useState } from "react";

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(1); // Keep track of zoom level

    const departments = [
        { img: 'dr.jpeg' },
        { img: 'logo.png' },
        { img: 'service/surgery.png' },
        { img: 'service/pediatrics.png' },
        { img: 'service/orthopedics.png' },
        { img: 'service/cardiology.png' },
        { img: 'service/radiology.png' },
        { img: 'service/neurology.png' },
        { img: 'service/default.png' }
    ];

    const handleImageClick = (img) => {
        setSelectedImage(img); // Open the image directly on click
    };

    const closeImage = () => {
        setSelectedImage(null); // Close the image
        setZoomLevel(1); // Reset zoom level
    };

    const downloadImage = () => {
        const link = document.createElement('a');
        link.href = selectedImage;
        link.download = selectedImage.split('/').pop(); // Get the image name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const zoomIn = () => {
        setZoomLevel((prev) => prev + 0.2); // Increase zoom level
    };

    const zoomOut = () => {
        setZoomLevel((prev) => Math.max(prev - 0.2, 1)); // Decrease zoom level, minimum 1
    };

    return (
        <>
            <div className="p-2 gap-4 grid grid-cols-12">
                <div className="col-span-12 text-3xl font-bold flex justify-center items-center mt-16 h-40 bg-[url('/dr.jpeg')] bg-no-repeat bg-cover gap-2 bg-center">
                    Gallery
                </div>
                {departments.map((department, index) => (
                    <div
                        key={index}
                        className="lg:col-span-4 col-span-12 md:col-span-4 h-72 w-full rounded bg-blue-300 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-y-105 cursor-pointer"
                        onClick={() => handleImageClick(department.img)} // Open image immediately on click
                    >
                        <img className="h-full w-full object-cover rounded" src={department.img} alt="" />
                    </div>
                ))}
            </div>

            {/* Full-screen image overlay */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <img 
                        src={selectedImage} 
                        alt="Selected" 
                        className={`cursor-pointer`} 
                        onClick={closeImage}
                        style={{ transform: `scale(${zoomLevel})` }} // Apply zoom level
                    />
                    <div className="absolute bottom-4 right-8 flex space-x-2">
                        <button 
                            onClick={downloadImage} 
                            className="bg-blue-500 text-white px-3 py-2 rounded"
                        >
                            Download
                        </button>
                        <button 
                            onClick={zoomIn} 
                            className="bg-green-500 text-white px-3 py-2 rounded"
                        >
                            Zoom In
                        </button>
                        <button 
                            onClick={zoomOut} 
                            className="bg-yellow-500 text-white px-3 py-2 rounded"
                        >
                            Zoom Out
                        </button>
                        <button 
                            onClick={closeImage} 
                            className="bg-red-500 text-white px-3 py-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
