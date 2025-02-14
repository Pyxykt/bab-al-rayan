import React from "react";
import Image from "next/image";

const product = () => {
    return (
        <div className="relative " style={{ height: '500px' }}>
            <Image
                src="https://e1.pxfuel.com/desktop-wallpaper/829/345/desktop-wallpaper-media-resources-oil-refinery.jpg"
                alt="Oil Refinery"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-7xl">
                Product
            </div>
        </div>
    );
}

export default product;

