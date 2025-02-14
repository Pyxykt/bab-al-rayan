"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "../app/styles/menu.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import logo from "./companylogo.png";

gsap.registerPlugin(ScrollTrigger);

const menuLinks = [
    { path: "/", label: "    home" },
    { path: "/about", label: "    about" },
    { path: "/product", label: "    product" },
    { path: "/contact", label: "    contact" }
];

const Header = () => {
    const container = useRef(null);
    const menuOverlay = useRef(null);
    const menuLinksRef = useRef([]);
    const backgroundRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const tl = useRef(null);
    const aboutRef = useRef(null);
    const homeRef = useRef(null);
    const productRef = useRef(null);
    const contactRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 900) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) {
            const ctx = gsap.context(() => {
                gsap.set(menuLinksRef.current, { y: 75, opacity: 0 });

                tl.current = gsap.timeline({ paused: true })
                    .to(menuOverlay.current, {
                        duration: 1.25,
                        clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                        ease: "power4.inOut"
                    })
                    .to(menuLinksRef.current, {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.1,
                        ease: "power4.inOut",
                        delay: -0.75,
                    });
            }, container);

            return () => ctx.revert();
        }
    }, [isMobile]);

    useEffect(() => {
        if (tl.current && isMobile) {
            if (isMenuOpen) {
                tl.current.play();
            } else {
                tl.current.reverse();
            }
        }
    }, [isMenuOpen, isMobile]);

    //    for text scramble
    useEffect(() => {
        const letters = "abcdefghijklmnopqrstuvwxyz";
        let interval;

        const handleMouseEnter = (ref) => {
            let iteration = 0;
            clearInterval(interval);

            interval = setInterval(() => {
                ref.current.innerText = ref.current.innerText.split("")
                    .map(() => letters[Math.floor(Math.random() * letters.length)])
                    .join("");

                iteration++;

                if (iteration > 5) {
                    clearInterval(interval);
                    ref.current.innerText = ref.current.dataset.originalText;
                }
            }, 20);
        };

        const setOriginalText = (ref) => {
            if (ref.current) {
                ref.current.dataset.originalText = ref.current.innerText;
            }
        };

        [homeRef, aboutRef, productRef, contactRef].forEach(setOriginalText);

        [homeRef, aboutRef, productRef, contactRef].forEach((ref) => {
            if (ref.current) {
                ref.current.addEventListener("mouseenter", () => handleMouseEnter(ref));
            }
        });

        return () => {
            [homeRef, aboutRef, productRef, contactRef].forEach((ref) => {
                if (ref.current) {
                    ref.current.removeEventListener("mouseenter", () => handleMouseEnter(ref));
                }
            });
            clearInterval(interval);
        };
    }, []);



    return (
        <div className="menu-container" ref={container}>
            <div className="menu-bar" ref={backgroundRef}>
                <div className="menu-logo">
                    <Image
                        src={logo}
                        alt="Company Logo"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                </div>
                <div className="menu-open" onClick={toggleMenu}>
                    <p>Menu</p>
                </div>
            </div>

            {/* Menu Overlay ( for small screens) */}
            {isMobile && (
                <div ref={menuOverlay} className="menu-overlay">
                    <div className="menu-overlay-bar">
                        <div className="menu-logo">
                            <Link href="/">homepage</Link>
                        </div>
                        <div className="menu-close" onClick={toggleMenu}>
                            <p>Close</p>
                        </div>
                    </div>
                    <div className="menu-close-icon" onClick={toggleMenu}>
                        <p>&#x2715;</p>
                    </div>
                    <div className="menu-copy">
                        <div className="menu-links">
                            {menuLinks.map((link, index) => (
                                <div className="menu-link-item" key={index}>
                                    <div
                                        className="menu-link-item-holder"
                                        onClick={toggleMenu}
                                        ref={(el) => (menuLinksRef.current[index] = el)}
                                    >
                                        <Link href={link.path} className="menu-link">
                                            {link.label}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Static Navbar Links for Large Screens */}
            {!isMobile && (
                <div className="menu-links-l">
                    <div className="menu-link-item-l cursor-blur-hover font">
                        <Link href="/" className="menu-link-l font-bold">
                            <span ref={homeRef}>home</span>
                        </Link>
                    </div>
                    <div className="menu-link-item-l cursor-blur-hover">
                        <Link href="/about" className="menu-link-l font-bold">
                            <span ref={aboutRef}>about</span>
                        </Link>
                    </div>
                    <div className="menu-link-item-l cursor-blur-hover">
                        <Link href="/product" className="menu-link-l font-bold">
                            <span ref={productRef}>product</span>
                        </Link>
                    </div>
                    <div className="menu-link-item-l cursor-blur-hover">
                        <Link href="/contact" className="menu-link-l font-bold">
                            <span ref={contactRef}>contact</span>
                        </Link>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Header;
