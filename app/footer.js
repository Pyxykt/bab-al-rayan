'use client';
import { useEffect } from 'react';
import feather from 'feather-icons';
import './styles/footer.css';

const Footer = () => {
    useEffect(() => {
        feather.replace();
    }, []);

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
                            <form className="footer__form">
                                <ul className="footer__nav-list">
                                    <li className="footer__nav-item">
                                        <input
                                            type="email"
                                            placeholder="Your Mail"
                                            className="footer__input"
                                            required
                                        />
                                    </li>
                                    <li className="footer__nav-item">
                                        <textarea
                                            placeholder="Enquiry"
                                            className="footer__input footer__textarea"
                                            required
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
                        <h3 className="footer__col-title">
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
