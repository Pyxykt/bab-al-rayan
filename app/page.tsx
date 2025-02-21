
// const images = [
//   {
//     src: "https://assets.upstox.com/content/assets/images/cms/202461/refinery-3613526_1280.webp",
//     title: "Ser 1",
//     detail: "Ser1 Detail Ser1 Detail Ser1 Detail Ser1 Detail ",
//   },
//   {
//     src: "https://c1.wallpaperflare.com/preview/567/692/968/industry-industrial-fabric-chimneys.jpg",
//     title: "Ser 2",
//     detail: "Ser2 Detail",
//   },
//   {
//     src: "https://e1.pxfuel.com/desktop-wallpaper/829/345/desktop-wallpaper-media-resources-oil-refinery.jpg",
//     title: "Ser 3",
//     detail: "Ser3 Detail",
//   },
//   {
//     src: "https://www.eqimg.com/images/2024/1920x1080/10262024-image1-equitymaster.jpg",
//     title: "Ser 4",
//     detail: "Ser4 Detail",
//   },
//   {
//     src: "https://images.pexels.com/photos/87236/pexels-photo-87236.jpeg",
//     title: "Ser 5",
//     detail: "Ser5 Detail",
//   },
// ];

"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Lenis from '@studio-freight/lenis';
import SplitType from 'split-type';


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const textRef = useRef(null);
  const sloganRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = [useRef(null), useRef(null), useRef(null)];
  const [showButton, setShowButton] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const sloganText = "Powering Industries with Strength,<br/> Precision, and Reliability.";
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const scrambleText = (original: string, length: number): string => {
    let scrambled = "";
    for (let i = 0; i < length; i++) {
      scrambled += characters[Math.floor(Math.random() * characters.length)];
    }
    return scrambled;
  };
  //textref sloganref
  useEffect(() => {
    const isVisit = localStorage.getItem("isVisit") === "true";
    const delay = isVisit ? 0 : 2000; // 10 sec if visited before, else 2 sec

    const timeout = setTimeout(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        sloganRef.current,
        { opacity: 0, y: 200 },
        { opacity: 0.8, y: 0, duration: 1, ease: "power3.out" }
      );

      const timeline = gsap.timeline({ delay: 0.1 });

      for (let i = 0; i <= sloganText.length; i++) {
        timeline.to(sloganRef.current, {
          textContent: scrambleText(sloganText, i),
          duration: 0.02,
          ease: "none",
        });
      }

      timeline.to(sloganRef.current, {
        onUpdate: function () {
          if (sloganRef.current) {
            sloganRef.current.innerHTML = sloganText;
          }
        },
        duration: 0.1,
        ease: "power2.out",
      });

      // Set isVisit to true after the first visit
      localStorage.setItem("isVisit", "true");

    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const finalSizes = [
    { width: "20vw", height: "70vh" },
    { width: "40vw", height: "70vh" },
    { width: "20vw", height: "70vh" },
  ];
  //imageref
  useEffect(() => {

    imageRefs.forEach((ref, index) => {
      if (ref.current) {
        gsap.to(ref.current, {
          width: finalSizes[index].width,
          height: finalSizes[index].height,
          scale: 1.1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom-=100",
            end: "top center",
            scrub: 1.5,
          },
        });
      }
    });




    return () => {
      imageRefs.forEach((ref) => {
        if (ref.current) ScrollTrigger.getById(ref.current)?.kill();
      });
    };
  }, [isMobile]);

  //screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  //text reveal
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.07, });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));

    document.querySelectorAll(".reveal").forEach((text) => {
      if (text instanceof HTMLElement) {
        const splitText = new SplitType(text, { types: "words" });
        const section = text.closest("section");

        gsap.from(splitText.words, {
          opacity: 0,
          y: isMobile ? 10 : 20,
          ease: "power2.out",
          stagger: isMobile ? 0.05 : 1,
          duration: 4,
          scrollTrigger: {
            trigger: section,
            start: isMobile ? "top 8%" : "top top",
            end: isMobile ? "bottom center" : `+=${window.innerHeight * 5}px`,
            scrub: true,
            pin: true,
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);



  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 0.7,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex items-center justify-center w-full bg-white text-black px-2 pt-[13rem] pb-[2rem]">
        <h1 ref={textRef} className="text-5xl sm:text-5xl md:text-8xl lg:text-[130px] font-bold opacity-0 text-center cursor-blur-hover">
          Bab-Al-Rayan
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center w-full pb-[12rem]">
        <div ref={sloganRef} className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-light text-center pb-[12rem] overflow-x-hidden opacity-0">
          Powering Industries with <br /> Strength, Precision, and Reliability.
        </div>

        {/* large screen images */}
        {!isMobile && (<div className="flex justify-center items-center gap-x-20">
          {[
            "https://images.pexels.com/photos/87236/pexels-photo-87236.jpeg",
            "https://www.eqimg.com/images/2024/1920x1080/10262024-image1-equitymaster.jpg",
            "https://images.pexels.com/photos/87236/pexels-photo-87236.jpeg",
          ].map((src, index) => (
            <div key={index} className="mt-4 ml-0 mr-0 " >
              <Image
                ref={imageRefs[index]}
                src={src}
                alt="Industrial Refinery"
                layout="intrinsic"
                width={1000}
                height={1000}
                className="rounded-lg object-cover h-[50px] w-[50px]"
              />
            </div>
          ))}
        </div>
        )}
        {/* small screen images */}
        {isMobile && (

          <div className="flex flex-col justify-center items-center gap-x-20">
            {[
              "https://images.pexels.com/photos/87236/pexels-photo-87236.jpeg",
              "https://www.eqimg.com/images/2024/1920x1080/10262024-image1-equitymaster.jpg",
              "https://images.pexels.com/photos/87236/pexels-photo-87236.jpeg",
            ].map((src, index) => (
              <div key={index} className="mt-4 ml-0 mr-0 " >
                <Image
                  //ref={imageRefs[index]}
                  src={src}
                  alt="Industrial Refinery"
                  layout="intrinsic"
                  width={1000}
                  height={1000}
                  className="rounded-lg object-cover h-50 w-50"
                />
              </div>
            ))}
          </div>

        )}


        <div className="w-full mt-20 text-center text-lg sm:text-xl md:text-2xl lg:text-2xl opacity-1 bg-white text-black rounded-lg ">
          <section className="flex items-center justify-center min-h-auto">
            <p className="p-[5rem]  pb-[0rem] pt-[7rem] reveal ">

              <strong>BAB AL RAYAN DIESEL FUEL TRADING L.L.C</strong> is a trusted leader in the supply and distribution of high-quality diesel fuel and related products.
              With a strong commitment to providing reliable fuel solutions, we serve a broad range of industries, including transportation, construction, agriculture, and power generation.
              We specialize in delivering diesel fuel to commercial fleets, industrial clients, and retail customers while ensuring consistent product quality and efficient delivery.
              <br /><br />
              With a robust supply chain, state-of-the-art storage facilities, and a dedicated team of professionals, we ensure that our customers have access to the fuel they need, when they need it.
              As a customer-centric company, we are committed to delivering tailored solutions that meet the specific needs of each client, while prioritizing safety, reliability, and environmental sustainability.
            </p>
          </section>
        </div>
      </div>


      {showButton && (
        <button
          onClick={scrollDown}
          className="fixed bottom-4 left-4 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition-opacity duration-600"
        >
          ↓ Scroll Down
        </button>
      )}


    </>
  );
}
