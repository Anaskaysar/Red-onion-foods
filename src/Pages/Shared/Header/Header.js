 import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo2.png';


 
 const Header = () => {
     return (
        <div className='bg-white flex nav-bar'>
            <div className="flex-auto ">
                <NavLink to='/home'>
                    <img src={logo} alt="" width="150" height="50" className="ml-20 mt-3"/>
                </NavLink>
            </div>
            <div className='ml-100 flex-auto mt-5'>
                <NavLink to='/cart' className='pr-6'>Cart</NavLink>
                <NavLink to="/login" className='pr-6' >Login</NavLink>
                <NavLink to="/signup" className=' bg-red-600 text-white rounded-full py-1 px-3'>Sign Up</NavLink>
            </div>  
        </div>
     );
 };
 
 export default Header;