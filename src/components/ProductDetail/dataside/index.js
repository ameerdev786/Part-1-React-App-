import React from 'react';
import chip from "../../../assests/images/chip.png";
import heart from "../../../assests/images/heart.png";
import parameters from "../../../assests/images/Parametres.png";
import right from "../../../assests/images/right.png";
import available from "../../../assests/images/available.png";

function DataComponent({product}) {
    return (
        <div className="metadata-img w-full lg:w-1/2 h-full mt-8">
            <div className="w-11/12 mx-auto pt-4 flex items-center justify-between">
                <button className="bg-[#EEF5F0;] px-2 py-1 rounded-sm">10% New Year offer</button>
                <img src={chip} alt="Chip" />
            </div>

            <div className="w-11/12 mx-auto pt-4 px-2 flex items-center justify-between">
                <h1 className="text-[#0E1E3C;] cursor-pointer text-xl font-bold">{product?.name}</h1>
                <img src={heart} alt="Heart" />
            </div>

            <div className="w-11/12 mx-auto pt-4 px-2 flex items-start gap-2">
                <button className="bg-[#EAECFB;] text-[#707FE2;] px-4 py-1 rounded-sm">Selling out fast</button>
                <button className="bg-[#FFE38933;] text-[#B59738;] px-4 py-1 rounded-sm">Best in UAE</button>
            </div>

            <div className="w-11/12 mx-auto pt-4 px-2 flex items-center justify-between">
                <img className="w-11/12" src={parameters} alt="Parameters" />
            </div>

            <div className="w-11/12 cursor-pointer mx-auto pt-4 px-2 flex items-center justify-between">
                <div>
                    <p className="text-[#9098A5;]">Price Inclusive of VAT</p>
                    <h1 className="font-bold text-xl">{product?.price} AED</h1>
                </div>
                <img src={right} alt="Right arrow" />
            </div>

            <div className="w-11/12 cursor-pointer mx-auto pt-4 px-2 flex items-center justify-between">
                <div>
                    <img src={available} alt="Available" />
                </div>
            </div>

            <div className="w-11/12 mx-auto pt-4 px-2 flex items-center justify-between">
                <button className="bg-[#C62A1C;] w-full text-white font-bold text-center rounded-md py-2 px-2 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                    Buy Now
                </button>
            </div>
        </div>)
}

export default DataComponent