import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            <div className='relative'>
                <img className='hidden md:block w-full object-cover' src="https://i.ibb.co/vDL84dH/banner0.jpg" alt="" />
                <Link to="/contact" className='absolute bottom-5 right-5 py-1 lg:py-2 px-2 lg:px-3 rounded lg:rounded-lg bg-primary text-white lg:text-xl shadow-xl hover:bg-bg duration-300'>Contact us</Link>
            </div>
           
           <div className='relative'>
                <img className='md:hidden block w-full h-96 object-cover' src="https://i.ibb.co/ySmnqkN/banner2.jpg" alt="" />
                <Link to="/contact" className='absolute bottom-5 right-5 py-2 px-3 rounded bg-primary text-title hover:text-primary lg:text-xl shadow-xl hover:bg-title duration-300'>Contact us</Link>
           </div>
        </div>
    );
};

export default Hero;