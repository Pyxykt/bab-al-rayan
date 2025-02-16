"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import "../styles/contact.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
    const textRef = useRef(null);
    const [showButton, setShowButton] = useState(true);
    const contactRefs = useRef([]);

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
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 200 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
    }, []);

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
                    Product Page
                </h1>
            </div>

            <div className="pb-[4rem]"></div>
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

export default Product;
