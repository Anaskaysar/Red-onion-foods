import React from 'react';
import './SingleFood.css';

const SingleFood = (props) => {
    const { type,image, title, price,description } = props.food;
    
    return (
        <div className="bg-white border border-gray-100 hover:shadow-xl  p-4 rounded-lg relative">
            <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">{type}</span>
            <img className="w-64 mx-auto" src={image} alt="" />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 poppins text-lg">{title}</h1>
                <p className="text-gray-500 poppins text-sm text-center">{description.slice(0,50)}</p>
                <h2 className="text-gray-900 poppins text-2xl font-bold">${price}</h2>
                <button className="bg-red-600 text-white rounded-full py-1 px-3">Order Now</button>  
            </div>
        </div>
    );
};

export default SingleFood;

