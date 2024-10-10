"use client"


export default function About() {
    return (
        <>
            <div className="p-2 grid grid-cols-12">
                <div className="col-span-6 shadow-xl p-4">
                    <img className="lg:w-full  lg:h-[530px] w-full  h-[350px]" src="dr.jpeg"></img>
                </div>
                <div className="col-span-6 font-serif shadow-xl p-10 m-10 lg:text-xl text-sm font-semibold  ">
                   <p className=""> We are committed to providing access to affordable and innovative medicines, driven by our purpose of ‘Good Health Can’t Wait’.</p>
                   <p className="mt-6"> Our products and services are spread across our core businesses of Active Pharmaceutical Ingredients (API), generics, branded generics, biosimilars and over-the-counter pharmaceutical products around the world. We work towards meeting unmet patients needs in the areas of gastro-enterology, cardiovascular, diabetology, oncology, pain management and dermatology. We are investing in businesses of the future including drug discovery, clinically-differentiated assets and digital healthcare.</p>
                </div>
            </div>
        </>
    );
}