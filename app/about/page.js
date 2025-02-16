"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from "gsap";
import "../styles/about.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const textRef = useRef(null);
    const sloganRef = useRef(null);
    const sloganText = "We always meet our customers <br /> demands and often surpass them.";
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const [showButton, setShowButton] = useState(true);

    const scrambleText = (original, length) => {
        let scrambled = "";
        for (let i = 0; i < length; i++) {
            scrambled += characters[Math.floor(Math.random() * characters.length)];
        }
        return scrambled;
    };

    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY <= 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
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
                    duration: .02,
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

        }, 2);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        gsap.utils.toArray(".reveal").forEach((containerA) => {
            let image = containerA.querySelector("img");

            gsap.set(containerA, { autoAlpha: 0, xPercent: -50 });
            gsap.set(image, { xPercent: 50, scale: 1.3 });

            gsap.timeline({
                scrollTrigger: {
                    trigger: containerA,
                    start: "top 80%",
                    toggleActions: "play none none reset",
                },
            })
                .to(containerA, { autoAlpha: 1, xPercent: 0, duration: 1.2, ease: "power2.out" })
                .to(image, { xPercent: 0, scale: 1, duration: 1.2, ease: "power2.out" }, "-=1.2");
        });
    }, []);

    return (
        <>
            <div className="flex items-center justify-center w-full bg-white text-black px-2 pt-[14rem] pb-[2rem]">
                <h1 ref={textRef} className="text-5xl sm:text-5xl md:text-8xl lg:text-[150px] font-bold opacity-0 text-center cursor-blur-hover">
                    About us
                </h1>
            </div>
            <div ref={sloganRef} className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-light text-center pb-[12rem] opacity-0">
                We always meet our customers <br /> demands and often surpass them.
            </div>

            <div className="containerA">
                <div className="reveal">
                    <Image
                        src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-black-solid-color-background.jpg" alt="Mission"
                        width={1920}
                        height={1080}

                    />
                    <p className="overlay-text">
                        <span id="mission-text" className="text-4xl text-center flex flex-col items-center justify-center">MISSION

                        </span>

                        <br />To provide high-quality diesel products and services that enable our
                        customers to operate more efficiently, reduce environmental impact, and
                        maintain their competitive edge in the global marketplace</p>
                </div>
            </div>

            <div className="containerA">
                <div className="reveal">
                    <Image
                        src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-black-solid-color-background.jpg" alt="Mission"
                        width={1920}
                        height={1080}

                    />
                    <p className="overlay-text">
                        <span className="text-4xl text-center flex flex-col items-center justify-center">VISION</span>
                        <br />
                        To be the preferred partner in the diesel industry, setting standards for
                        innovation, sustainability, and customer satisfaction. </p>
                    <br />
                </div>
            </div>

            <div className="containerA">
                <div className="reveal">
                    <Image
                        src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-black-solid-color-background.jpg" alt="Mission"
                        width={1920}
                        height={1080}

                    />
                    <p className="overlay-text">
                        <span className="text-4xl text-center flex flex-col items-center justify-center">CORE VALUES</span><br />
                        <span className="text-lg md:text-xl lg:text-2xl max-w-xl md:max-w-2xl lg:max-w-8xl">
                            <span className="">Innovation:</span> Constantly advancing our product offerings through technology and research. <br />
                            <span className="font-semibold">Reliability:</span> Delivering consistent, high-performance solutions. <br />
                            <span className="font-semibold">Sustainability:</span> Promoting eco-friendly practices and reducing carbon footprints. <br />
                            <span className="font-semibold">Customer-Centric:</span> Focusing on the needs of our customers through tailored solutions. <br />
                            <span className="font-semibold">Integrity:</span> Upholding the highest standards of ethics in all our business dealings.
                        </span>
                    </p>

                </div>
            </div>

            <div className="pb-[20rem]"></div>
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
};

export default About;




// //____________________________________
// "use client";
// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../styles/about.css";
// gsap.registerPlugin(ScrollTrigger);

// export default function About() {
//     useEffect(() => {
//         gsap.utils.toArray(".reveal").forEach((containerA) => {
//             let image = containerA.querySelector("img");

//             gsap.set(containerA, { autoAlpha: 0, xPercent: -50 });
//             gsap.set(image, { xPercent: 50, scale: 1.3 });

//             gsap.timeline({
//                 scrollTrigger: {
//                     trigger: containerA,
//                     start: "top 80%",
//                     toggleActions: "play none none reset",
//                 },
//             })
//                 .to(containerA, { autoAlpha: 1, xPercent: 0, duration: 1.2, ease: "power2.out" })
//                 .to(image, { xPercent: 0, scale: 1, duration: 1.2, ease: "power2.out" }, "-=1.2");
//         });
//     }, []);

//     return (
//         <>
//             {[
//                 "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
//                 "https://images.unsplash.com/photo-1505201372024-aedc618d47c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
//                 "https://images.unsplash.com/photo-1531727991582-cfd25ce79613?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
//                 "https://images.unsplash.com/photo-1580215935060-a5adc57c5157?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
//             ].map((src, index) => (
//                 <div className="containerA" key={index}>
//                     <div className="reveal">
//                         <img src={src} alt={`image-${index}`} />
//                     </div>
//                 </div>
//             ))}
//             <div className="credit">
//                 <a href="https://thisisadvantage.com" target="_blank">
//                     Made by Advantage
//                 </a>
//             </div>
//         </>
//     );
// }
