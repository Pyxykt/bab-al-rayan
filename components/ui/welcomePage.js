"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

const WelcomePage = () => {
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
            }, 50);

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
                duration: 0.9,
                ease: "power2.out",
                onComplete: () => {
                    curtain.style.zIndex = "-1";
                },
            });
        }, 2000);
    }, []);

    return (
        <div id="curtain" className="curtain">
            <div id="slogan" className="slogan">
                Engineered for excellence, driving industries with efficient fuel.
            </div>

            <style jsx>{`
                .curtain {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background-color: black;
                    z-index: 100;
                    opacity: 1;
                    transform-origin: top center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .slogan {
                    font-size: 2rem;
                    color: white;
                    text-align: center;
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
};

export default WelcomePage;
