"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import "../styles/contact.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

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
                    contact us
                </h1>
            </div>

            <div className="flex items-center justify-center w-full bg-white text-black px-2 pt-[10rem] pb-[2rem]">
                <form className="login-form">
                    <h1 className='text-4xl'>Message Me</h1>

                    <div className="form-input-material">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder=" "
                            autoComplete="off"
                            className="form-control-material"
                            required=""
                        />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-input-material">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder=" "
                            autoComplete="off"
                            className="form-control-material"
                            required=""
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-input-material">
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder=" "
                            autoComplete="off"
                            className="form-control-material"
                            required=""
                        />
                        <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="form-input-material">
                        <textarea
                            name="message"
                            id="message"
                            placeholder=" "
                            autoComplete="off"
                            className="form-control-material"
                            required=""
                            defaultValue={""}
                        />
                        <label htmlFor="message">Message</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-ghost">
                        Send Message
                    </button>
                </form>
            </div>

            <div className="flex items-center justify-center w-full bg-white text-black px-2 pt-8 pb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">

                CONTACT INFO
            </div>

            <div className=" flex items-center justify-center w-full bg-white text-black px-2 pt-[2rem] pb-[10rem] sm:pb-[6rem] md:pb-[4rem] lg:pb-[2rem] xl:pb-0">
                <div className="container1">
                    <p ref={(el) => contactRefs.current[0] = el} className="slide-right">
                        📍 Address: H.676, Murat Birag, Shad-Al-Rak, Dubai
                    </p>

                    <p ref={(el) => contactRefs.current[1] = el} className="slide-left">
                        ✉️ Email: babalrayandiesel@gmail.com
                    </p>

                    <p ref={(el) => contactRefs.current[2] = el} className="slide-right">
                        📞 Phone: +971 508200464
                    </p>
                </div>
            </div>

            <div style={{ flex: "7", minWidth: "60%" }}>
                <iframe
                    width="100%"
                    height="600"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=dubai+(My%20Business%20Name)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    allowFullScreen
                    style={{ borderRadius: "10px", border: "none" }}
                ></iframe>
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

export default About;