import React from "react";

const Contact = () => {
    return (
        <>
            <div className="relative">
                <img
                    src="https://e1.pxfuel.com/desktop-wallpaper/829/345/desktop-wallpaper-media-resources-oil-refinery.jpg"
                    alt="Oil Refinery"
                    className="w-full h-[500px] object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-7xl">
                    Contact
                </div>
            </div>
            <div style={{ flex: "7", minWidth: "60%" }}>
                <iframe
                    width="100%"
                    height="600"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=dubai+(My%20Business%20Name)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    allowFullScreen
                    style={{ borderRadius: "0px", border: "none" }}
                ></iframe>
            </div>
            <div className="flex flex-wrap w-full p-10 gap-10 bg-black">

                <div className="flex-7 min-w-[48%]">
                    <div className="bg-gray-100 p-5 rounded-lg shadow-lg flex flex-col gap-5 text-xl font-bold text-gray-800">
                        <p>📍 Address: H.676, Murat Birag, Shad-Al-Rak, Dubai</p>
                        <p>✉️ Email: contact@example.com</p>
                        <p>📞 Phone: +971 123 456 789</p>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </div>
                </div>

                <div className="flex-7 w-full sm:w-[48%] bg-white p-5 rounded-lg shadow-lg">
                    <h2 className="text-center mb-5 text-4xl">Contact Us</h2>
                    <form className="flex flex-col gap-3">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-2 rounded-md border border-gray-300 text-lg"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 rounded-md border border-gray-300 text-lg"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full p-2 rounded-md border border-gray-300 text-lg"
                            required
                        />
                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="w-full p-2 rounded-md border border-gray-300 text-lg"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="p-2 rounded-md bg-blue-600 text-white text-lg cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
