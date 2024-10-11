"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [zoomLevel, setZoomLevel] = useState(1);

    const departments = [
        { img: '/gellary/g1.jpg' },
        { img: '/gellary/g2.jpg' },
        { img: '/gellary/g3.jpg' },
        { img: '/gellary/g4.jpg' },
        { img: '/gellary/g5.jpg' },
        { img: '/gellary/g6.jpg' },
        { img: '/gellary/g7.jpg' },
        { img: '/gellary/g8.jpg' },
        { img: '/gellary/g9.jpg' },
        { img: '/gellary/g10.jpg' },
        { img: '/gellary/g1.jpg' },
        { img: '/gellary/g2.jpg' },
    ];

    const [bgColor, setBgColor] = useState("bg-blue-400");

    useEffect(() => {
        const colors = ["bg-blue-400", "bg-blue-300", "bg-blue-200", "bg-blue-100"];
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % colors.length;
            setBgColor(colors[index]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const handleImageClick = (img: string) => { // Explicitly typing the parameter
        setSelectedImage(img);
    };

    const closeImage = () => {
        setSelectedImage(null);
        setZoomLevel(1);
    };

    const downloadImage = () => {
        if (selectedImage) {
            const link = document.createElement('a');
            link.href = selectedImage;
            link.download = selectedImage.split('/').pop() || 'download';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const zoomIn = () => {
        setZoomLevel((prev) => prev + 0.2);
    };

    const zoomOut = () => {
        setZoomLevel((prev) => Math.max(prev - 0.2, 1));
    };

    return (
        <>
            <div className="p-2 gap-4 grid grid-cols-12">
                <div
                    className={`col-span-12 text-3xl font-bold flex justify-center items-center mt-16 h-20 bg-no-repeat bg-cover gap-2 bg-center animate-gradient`}
                >
                    Gallery
                </div>
                {departments.map((department, index) => (
                    <div
                        key={index}
                        className="lg:col-span-4 col-span-12 md:col-span-4 h-72 w-full rounded bg-blue-300 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-y-105 cursor-pointer"
                        onClick={() => handleImageClick(department.img)}
                    >
                        <Image
                            className="h-full w-full object-cover rounded"
                            src={department.img}
                            alt={`Gallery image ${index + 1}`} // Provide a meaningful alt text
                            width={500} // Set an appropriate width
                            height={300} // Set an appropriate height
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <Image
                        src={selectedImage}
                        alt="Selected"
                        className={`cursor-pointer`}
                        onClick={closeImage}
                        style={{ transform: `scale(${zoomLevel})` }}
                        width={800} // Set an appropriate width for the full-size image
                        height={600} // Set an appropriate height for the full-size image
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
