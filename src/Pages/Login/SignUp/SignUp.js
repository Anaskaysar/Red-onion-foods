import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <main className="h-screen w-full banner ">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl poppins font-semibold text-red-700 mt-5">Please Sign Up Here</h1>
            <div className="flex flex-col justify-center items-center mt-8">
                <form className="bg-white w-96  p-1 rounded-lg shadow-lg" >
                    <div className="flex flex-col space-y-6">
                        <input type="name" className='w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none glass transition duration-300 border border-gray-300 focus:shadow-xl' placeholder='Name' />

                        <input type="text" className='w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none glass transition duration-300 border border-gray-300 focus:shadow-xl' placeholder='Email' />

                        <input type="password" className='w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none glass transition duration-300 border border-gray-300 focus:shadow-xl' placeholder='Password'/>

                        <input type="text" className='w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none glass transition duration-300 border border-gray-300 focus:shadow-xl' placeholder='Address'/>
                        
                        <button className='flex items-center space-x-3 bg-red-500 justify-center border border-gray-300 rounded-lg w-full py-3 cursor-pointer '>Sign Up</button>

                        <Link to="/signup">
                            <p className="text-base text-primary text-center my-6 hover:underline">Already Signed In ?
                            </p>
                        </Link>
                        </div>
                    </form>
                </div>
        </main>
    );
};

export default SignUp;