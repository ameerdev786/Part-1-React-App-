// Import necessary dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../utils/productsData';
import ProductCard from '../ProductCard';



// Products component to render the list of products
const Products = () => (
    <div className=" bg-[#F8F9FA;]  flex items-center justify-center w-[100%] h-[100vh]">
        <div className="container h-auto   w-[80%] ">
            {/* Use a responsive grid layout with three columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {products?.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    </div>

);

export default Products;
