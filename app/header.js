"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import logo from "./companylogo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>

            <div className={styles.logo}>
                <Image src={logo} alt="Company Logo" width={120} height={4} />
            </div>
            <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
                <li onClick={() => setMenuOpen(!menuOpen)}><Link href="/">Home</Link></li>
                <li onClick={() => setMenuOpen(!menuOpen)}><Link href="/about">About</Link></li>
                <li onClick={() => setMenuOpen(!menuOpen)}><Link href="/product">Products</Link></li>
                <li onClick={() => setMenuOpen(!menuOpen)}><Link href="/contact">Contact</Link></li>
            </ul>


            <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
        </nav>
    );
};

export default Header;
