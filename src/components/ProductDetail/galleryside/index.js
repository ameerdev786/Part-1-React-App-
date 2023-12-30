import React from 'react'

function GalleryComponent({product}) {
    const hoverclass = ' hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer'
    const hoverclassbig = ' hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer'

    return (
        <div className="images-showcase w-full lg:w-1/2 h-full flex items-start justify-between bg-[#FFFFFF;]">
            <div className="w-full lg:w-11/12 mx-auto flex flex-col h-full justify-evenly">
                <div className={`bg-[#F8F9FA;] rounded-md flex items-center justify-center ${hoverclassbig}`}>
                    <img src={product?.image} alt={product?.name} />
                </div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-2">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className={`bg-[#F8F9FA;] p-2 rounded-md ${hoverclass}`}>
                            <img src={product?.image} alt={`Product ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GalleryComponent