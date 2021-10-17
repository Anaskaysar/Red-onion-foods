import React from 'react';
import logo from '../../../images/logo.png'
const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div >
                <img src={logo} alt="" width="200" height="100" className="ml-20 mt-3"/>
                <p className="text-red-500">Develoved By Kaysarul Anas Apurba</p>
            </div>
        </div>
    );
};

export default Footer;