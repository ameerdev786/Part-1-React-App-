import React, { useState, useEffect } from 'react';
import { Router, useNavigate, useParams } from 'react-router-dom';
import { products } from '../../utils/productsData';

import GalleryComponent from './galleryside';
import DataComponent from './dataside';

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products?.find(product => product.id == id);

    if (!product) {
        return <div>Product not found</div>;
    }
    return (
        <div className='w-full pt-12 h-screen flex items-center  bg-[#F8F9FA;] justify-start flex-col'>
            <header className='w-full  bg-[#F8F9FA;] '>
                <div className='w-[80%] mx-auto  flex items-center justify-between'>
                    <h1 onClick={() => navigate("/")} className=' cursor-pointer font-bold text-xl text-[#5E687C;]'>Batteries</h1>
                    <p onClick={() => navigate("/")} className='text-xl text-sm cursor-pointer text-[#5E687C;]'>View all batteries</p>
                </div>

            </header>
            <section className="w-full lg:w-[60%] mt-12 rounded-md flex bg-[#FFFFFF;] h-[80%]">

                <GalleryComponent product={product} />
                <DataComponent product={product} />

            </section>

        </div>
    );
};

export default ProductPage;
