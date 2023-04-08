import React from "react";

function Card({ imgSrc, title, description, bgColor }) {
    return (
        <div className={`about-box dark:bg-transparent rounded-md shadow-md`} style={{ background: bgColor }}>
            <img
                className="w-16 h-16 rounded-full mx-auto"
                src={imgSrc}
                alt=""
            />
            <div className="p-4 space-y-2">
                <h3 className="dark:text-[#333333] text-lg font-semibold text-center">
                    {title}
                </h3>
                <p className="text-base leading-6 text-[#212121] dark:text-[#1A202C]">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;
