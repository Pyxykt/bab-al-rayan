"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./cursor.module.css";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const loaderRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const loader = loaderRef.current;

        if (!cursor || !loader) return;
        const moveCursor = (e) => {
            gsap.to(cursor, { duration: 0.2, x: e.clientX - 18, y: e.clientY - 18 });
        };

        document.addEventListener("mousemove", moveCursor);

        const handleMouseEnter = (e) => {
            const text = e.target.getAttribute("data-centerline") || "";
            cursor.innerHTML = `<p class="center-first">${text}</p>`;
            gsap.to(cursor, { scale: 2.4, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0)" });
            gsap.to(loader, { borderWidth: "2px", top: 2, left: 2 });

            e.target.querySelectorAll("video").forEach((video) => video.play());

            // Check    hovered element
            if (e.target.closest("a")) {
                gsap.to(cursor, { scale: 1.6, backgroundColor: "lightgrey", borderColor: "transparent" });
            }
        };

        const handleMouseLeave = (e) => {
            cursor.innerHTML = "";
            gsap.to(cursor, { scale: 1, backgroundColor: "transparent", borderColor: "#999999" });
            gsap.to(loader, { borderWidth: "4px", top: 0, left: 0 });

            e.target.querySelectorAll("video").forEach((video) => video.pause());

            // Reset c link
            gsap.to(cursor, { scale: 1, backgroundColor: "transparent", borderColor: "#999999" });
        };

        document.querySelectorAll(".cursor-blur-hover").forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            document.removeEventListener("mousemove", moveCursor);
            document.querySelectorAll(".cursor-blur-hover").forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className={styles.cursor} id="ball">
                <div ref={loaderRef} className={styles.loader} id="ball-loader"></div>
            </div>
        </>
    );
};

export default CustomCursor;


