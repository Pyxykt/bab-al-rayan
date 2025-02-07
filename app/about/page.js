
import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <>
            <div className="relative" style={{ height: '500px' }}>
                <Image
                    src="https://e1.pxfuel.com/desktop-wallpaper/829/345/desktop-wallpaper-media-resources-oil-refinery.jpg"
                    alt="Oil Refinery"
                    layout="fill"

                    objectFit="cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-7xl">
                    About Us
                </div>
            </div>
            <h1 className="text-4xl font-bold text-center pt-[3.9rem] w-full bg-black text-white">
                We always meet our customer's demands and often surpass them.
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 p-20 bg-black text-white">
                <div className="max-w-sm w-full bg-gray-800 p-4 rounded-lg shadow-lg text-center flex flex-col h-full flex-1 transform transition-transform duration-300 hover:scale-105">
                    <Image
                        src="https://img.freepik.com/premium-vector/futuristic-mission-concept-arrow-darts-target-glowing-symbols-text-technology-abstract_726113-365.jpg?semt=ais_hybrid"
                        alt="Mission"
                        width={500}
                        height={200}
                        className="w-full h-48 object-cover rounded-md"
                    />
                    <h2 className="text-2xl font-bold mt-4">Mission</h2>
                    <p className="mt-2 flex-grow text-justify">To provide high-quality diesel products and services that enable our customers to operate more efficiently, reduce environmental impact, and maintain their competitive edge in the global marketplace.</p>
                    <br /><br /><br /><br /><br />
                </div>

                <div className="max-w-sm w-full bg-gray-800 p-4 rounded-lg shadow-lg text-center flex flex-col h-full flex-1 transform transition-transform duration-300 hover:scale-105">
                    <Image
                        src="https://viso.ai/wp-content/smush-webp/2023/01/AI-and-computer-vision-in-oil-and-gas-1060x606.jpg.webp"
                        alt="Vision"
                        width={500}
                        height={200}
                        className="w-full h-full object-cover rounded-md"
                    />
                    <h2 className="text-2xl font-bold mt-4">Vision</h2>
                    <p className="mt-2 flex-grow text-justify">To be the preferred partner in the diesel industry, setting standards for innovation, sustainability, and customer satisfaction.</p>
                    <br /><br /><br /><br /><br /><br /><br />
                </div>

                <div className="max-w-sm w-full bg-gray-800 p-4 rounded-lg shadow-lg text-center flex flex-col h-full flex-1 transform transition-transform duration-300 hover:scale-105">
                    <Image
                        src="https://www.synergita.com/blog/wp-content/uploads/2019/06/core-values.jpg"
                        alt="Core Values"
                        width={500}
                        height={200}
                        className="w-full h-48 object-cover rounded-md"
                    />
                    <h2 className="text-2xl font-bold mt-4">Core Values</h2>
                    <ul className="mt-2 text-left px-4 list-disc flex-grow text-justify">
                        <li><strong>Innovation:</strong> Advancing our products through technology and research.</li>
                        <li><strong>Reliability:</strong> Delivering consistent, high-performance solutions.</li>
                        <li><strong>Sustainability:</strong> Promoting eco-friendly practices.</li>
                        <li><strong>Customer-Centric:</strong> Tailoring solutions to customer needs.</li>
                        <li><strong>Integrity:</strong> Upholding ethical standards in all dealings.</li>
                    </ul>
                </div>

            </div>
        </>
    );
};

export default About;
