"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import "../styles/contact.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const product = () => {

    const textRef = useRef(null);
    const sloganRef = useRef(null);
    const sloganText = "We always meet our customers <br /> demands and often surpass them.";
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const [showButton, setShowButton] = useState(true);
    const contactRefs = useRef([]);
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
    //rit left 
    useEffect(() => {
        gsap.fromTo(
            contactRefs.current,
            { opacity: 0, x: (i) => (i % 2 === 0 ? 1000 : -1000) },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".container1",
                    start: "top 80%",
                }
            }
        );
    }, []);



    return (
        <>
            <div className="flex items-center justify-center w-full bg-white text-black px-2 pt-[14rem] pb-[2rem]">
                <h1 ref={textRef} className="text-5xl sm:text-5xl md:text-8xl lg:text-[150px] font-bold opacity-0 text-center cursor-blur-hover">
                    product page
                </h1>
            </div>



            <div className="pb-[8rem]"></div>
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

export default product;