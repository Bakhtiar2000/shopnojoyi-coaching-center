import React from 'react';

const Hero = () => {
    return (
        <div>
            <div>
                <img className='hidden md:block w-full object-cover' src="https://i.ibb.co/vDL84dH/banner0.jpg" alt="" />
            </div>
           
           <div>
                <img className='md:hidden block w-full h-96 object-cover' src="https://i.ibb.co/ySmnqkN/banner2.jpg" alt="" />
           </div>
        </div>
    );
};

export default Hero;