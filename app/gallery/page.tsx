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

    const starCount = 100;
    return (
        <>
            <div className="p-2 gap-2 grid grid-cols-12">
            <div className="relative col-span-12 text-3xl font-bold flex lg:mt-[69px] justify-center items-center h-10 rounded-bl-full rounded-tr-full  w-full bg-slate-400 overflow-hidden">
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
      `}</style>        Gallery
    </div>
               
                {departments.map((department, index) => (
                    <div
                        key={index}
                        className="lg:col-span-4 col-span-12 md:col-span-4 h-72 w-full rounded bg-blue-300 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-y-95 cursor-pointer"
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
                            className="bg-blue-500 text-white px-3 py-2 text-sm rounded"
                        >
                            Download
                        </button>
                        <button 
                            onClick={zoomIn} 
                            className="bg-green-500 text-white px-3 py-2 text-sm rounded"
                        >
                            Zoom In
                        </button>
                        <button 
                            onClick={zoomOut} 
                            className="bg-yellow-500 text-white px-3 py-2 text-sm rounded"
                        >
                            Zoom Out
                        </button>
                        <button 
                            onClick={closeImage} 
                            className="bg-red-500 text-white px-3 py-2 text-sm rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
