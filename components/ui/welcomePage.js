"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

const WelcomePage = () => {
    useEffect(() => {

        localStorage.setItem("isVisit", "false");
        setTimeout(() => {
            localStorage.setItem("isVisit", "true");
        }, 2000)
    }, []);

    useEffect(() => {
        const curtain = document.getElementById("curtain");
        const slogan = document.getElementById("slogan");

        gsap.set(curtain, {
            opacity: 1,
            y: 0,
            zIndex: 100,
        });



        const scrambleText = (element) => {
            const text = element.innerText;
            let currentText = "";
            let scrambleInterval = setInterval(() => {
                currentText = text.split('').map((char) => {
                    if (/[a-zA-Z]/.test(char)) {
                        return Math.random() > 0.5 ? char : String.fromCharCode(Math.random() * 26 + 65);
                    }
                    return char;
                }).join('');
                element.innerText = currentText;
            }, 5);

            setTimeout(() => {
                clearInterval(scrambleInterval);
                element.innerText = text;
            }, 800);
        };
        scrambleText(slogan);

        setTimeout(() => {
            gsap.to(curtain, {
                opacity: 1,
                y: -window.innerHeight,
                duration: 1,
                ease: "power2.out",
                onComplete: () => {
                    curtain.style.zIndex = "-5";
                    curtain.style.opacity = "0";
                },
            });
        }, 2000);
    }, []);

    return (
        <div
            id="curtain"
            className="fixed inset-0 bg-black flex items-center justify-center z-[100] opacity-100 transform origin-top"
        >
            <div
                id="slogan"
                className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center px-4 sm:px-8"
            >
                Engineered for excellence, driving industries with efficient fuel.
            </div>
        </div>
    );
};

export default WelcomePage;
