import React from "react";
const product = () => {
    return (
        <div className="relative z-10">
            <img
                src="https://e1.pxfuel.com/desktop-wallpaper/829/345/desktop-wallpaper-media-resources-oil-refinery.jpg"
                alt="Oil Refinery"
                style={{ width: '100%', height: 500, objectFit: 'cover' }}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-7xl">
                Product
            </div>
        </div>
    );
}
export default product;