import React, { useEffect, useState } from 'react';
import SingleFood from '../Foods/SingleFood';
import './Home.css'
const Home = () => {
    const [foods,setFoods]=useState([]);

    const [type,setType]=useState("Breakfast");

    useEffect(()=>{
        fetch('./foods.json')
        .then(res=>res.json())
        .then(data=>
           { 
               const filterfood=data.filter(food=>food.type===type);
               setFoods(filterfood)
               console.log(filterfood);

        }

        )
    },[type])
    
    return (
        <>
            {/* Banner Section  */}
            <div className="banner mt-2">    
                <div className="flex flex-col items-center justify-center h-full">
                        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl poppins font-semibold text-gray-700">Best Food Waiting For Your Belly</h1>
                        <div className="rounded-full p-1 box-border mt-8 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center">
                            <input type="text" className=" rounded-full px-4 focus:outline-none w-full bg-transparent" placeholder="Search here ......." />
                            <button className="text-sm bg-red-600 py-3 px-6 rounded-full text-white poppins ring-red-300 focus:ring-red-4 transition duration-300 hover:scale-105 transform">Search</button>
                        </div>
                </div>
            </div>
           
                {/* food tabs section */}
            <section className="">
                    <div className="food-tabs-section ">
                        <div className="food-menu">
                            <button id="breakfast-btn" onClick={()=>setType("Breakfast")} className="mr-5 hover:underline active" >Breakfast</button>
                            <button id="lunch-btn" onClick={()=>setType("Lunch")} className="mr-5 hover:underline">Lunch</button>
                            <button id="dinner-btn" onClick={()=>setType("Dinner")} className="mr-5 hover:underline btn-menu">Dinner</button>
                        </div>
                        <div className="food-items">
                            {
                                foods.map(food=> <SingleFood food={food} key={food.id}/> )
                            }
                        </div>
                </div>
            </section>  
        </>
    );
};

export default Home;