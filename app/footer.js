"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./footer.module.css";
import logo from "./companylogo.png";

const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.logoContainer}>
                <Image src={logo} alt="Company Logo" width={150} height={50} />
            </div>


            <div className={styles.enquiryForm}>
                <h2>Enquiry</h2>
                <form>
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Enquiry" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>


            <div className={styles.socialLinks}>
                <Link href="https://facebook.com" target="_blank">
                    <FaFacebook />
                </Link>
                <Link href="https://instagram.com" target="_blank">
                    <FaInstagram />
                </Link>
                <Link href="https://linkedin.com" target="_blank">
                    <FaLinkedin />
                </Link>
                <Link href="https://twitter.com" target="_blank">
                    <FaTwitter />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
