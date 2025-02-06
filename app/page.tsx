"use client";
import React, { useState, useEffect } from "react";

const images = [
  {
    src: "https://assets.upstox.com/content/assets/images/cms/202461/refinery-3613526_1280.webp",
    title: "Ser 1",
    detail: "Ser1 Detail nnkjnkjnjk jknjnjnj jnjnmnmnm,nm,  bcfgcxfgcfcfx bhjv",
  },
  {
    src: "https://c1.wallpaperflare.com/preview/567/692/968/industry-industrial-fabric-chimneys.jpg",
    title: "Ser 2",
    detail: "Ser2 Detail",
  },
  {
    src: "https://e1.pxfuel.com/desktop-wallpaper/829/345/desktop-wallpaper-media-resources-oil-refinery.jpg",
    title: "Ser 3",
    detail: "Ser3 Detail",
  },
  {
    src: "https://www.eqimg.com/images/2024/1920x1080/10262024-image1-equitymaster.jpg",
    title: "Ser 4",
    detail: "Ser4 Detail",
  },
  {
    src: "https://images.pexels.com/photos/87236/pexels-photo-87236.jpeg",
    title: "Ser 5",
    detail: "Ser5 Detail",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-screen overflow-hidden relative">
        <div
          className="w-full h-full flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <img src={image.src} alt={`Sliding Image ${index}`} className="w-full h-full object-cover" />

              <div className="absolute inset-0 flex flex-col p-20 justify-center items-center text-white bg-black bg-opacity-40">
                <h1 className="text-6xl p-8 font-bold">{image.title}</h1>
                <p className="text-3xl font-bold mt-2">{image.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black text-white py-20 px-6 flex justify-center ">
        <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-center">
            Overview
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            <br />
            <strong>BAB AL RAYAN DIESEL FUEL TRADING L.L.C</strong> is a trusted leader in the
            supply and distribution of high-quality diesel fuel and related products.
            With a strong commitment to providing reliable fuel solutions, we serve a
            broad range of industries, including transportation, construction,
            agriculture, and power generation. We specialize in delivering diesel fuel
            to commercial fleets, industrial clients, and retail customers while
            ensuring consistent product quality and efficient delivery.
            <br />
            <br />
            With a robust supply chain, state-of-the-art storage facilities, and a
            dedicated team of professionals, we ensure that our customers have
            access to the fuel they need, when they need it. As a customer-centric
            company, we are committed to delivering tailored solutions that meet the
            specific needs of each client while prioritizing safety, reliability, and
            environmental sustainability.
          </p>
        </div>
      </div>

    </>
  );
};

export default Home;
