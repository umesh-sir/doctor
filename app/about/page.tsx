"use client";

import Image from "next/image";

export default function About() {
    const starCount = 100;
    return (
        <>
            <div className="p-2 grid grid-cols-12 gap-2">
            {/* <div className="h-20 col-span-12 w-full mt-[69px] font-bold bg-slate-400 text-2xl text-black flex items-center justify-center">
    About
</div> */}

               
         <div className="relative rounded-bl-full rounded-tr-full  col-span-12 text-3xl font-bold flex lg:mt-[69px] justify-center items-center h-10  w-full bg-slate-400 overflow-hidden"> 
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
    </div> 
                {/* First Section */}
                <div className="col-span-12 relative w-full flex items-center cursor-pointer">
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

                {/* Second Section */}
        {/* <div className="col-span-12">
        
        </div> */}
            </div>
        </>
    );
}
