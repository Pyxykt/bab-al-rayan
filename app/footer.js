'use client';
import { useEffect, useState } from 'react';
import feather from 'feather-icons';
import './styles/footer.css';

const Footer = () => {
    useEffect(() => {
        feather.replace();
    }, []);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 900);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const [formData, setFormData] = useState({
        email: "",
        message: ""
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfkIAtU9AItButzPx_AlP9ZU9nnUeem0dbuRGds85_7KXx18w/formResponse";

        const formDataGoogle = new FormData();

        formDataGoogle.append("entry.1045781291", formData.email);

        formDataGoogle.append("entry.839337160", formData.message);

        try {
            await fetch(formUrl, {
                method: "POST",
                body: formDataGoogle,
                mode: "no-cors",
            });
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            });
            alert("Enquiry sent successfully!");
        } catch (error) {
            console.error("Error sending enquiry:", error);
        }
    };

    return (
        <footer className="footer">
            <div className="footer__parralax">
                <div className="footer__parralax-trees" />
                <div className="footer__parralax-moto" />
                <div className="footer__parralax-secondplan" />
                <div className="footer__parralax-premierplan" />
                <div className="footer__parralax-voiture" />
            </div>
            <div className="container">
                <div className="footer__columns">
                    <div className="footer__col">
                        <h3 className="footer__col-title">
                            <span>Your enquiry</span>
                        </h3>
                        <nav className="footer__nav">
                            <form className="footer__form" onSubmit={handleSubmit}>
                                <ul className="footer__nav-list">
                                    <li className="footer__nav-item">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Mail"
                                            className="footer__input"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </li>
                                    <li className="footer__nav-item">
                                        <textarea
                                            name="message"
                                            placeholder="Enquiry"
                                            className="footer__input footer__textarea"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </li>
                                    <li className="footer__nav-item">
                                        <button type="submit" className="footer__submit">
                                            Submit
                                        </button>
                                    </li>
                                </ul>
                            </form>
                        </nav>
                    </div>
                    <div className="footer__col">
                        <h3 className="footer__col-title pt-[3rem]">
                            <span>Socials</span>
                        </h3>
                        <nav className="footer__nav">
                            <ul className="footer__nav-list">
                                <li className="footer__nav-item">
                                    <a href="" className="footer__nav-link cursor-blur-hover">
                                        <i data-feather="youtube" />
                                        <span>Youtube</span>
                                    </a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="" className="footer__nav-link cursor-blur-hover">
                                        <i data-feather="facebook" />
                                        <span>Facebook</span>
                                    </a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="" className="footer__nav-link cursor-blur-hover">
                                        <i data-feather="instagram" />
                                        <span>Instagram</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="footer__copyrights">
                    <p>
                        {" "}
                        <a href="" target="_blank">
                            @Bab-Al-Rayan
                        </a>
                    </p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
