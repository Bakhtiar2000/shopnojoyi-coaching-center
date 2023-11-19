import React from 'react';
import Hero from './Hero';
import OurTeachers from './OurTeachers';
import Pictures from './Pictures';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className='pb-20'>
            <Hero />
            <OurTeachers />
            <Pictures />
            <Reviews />
        </div>
    );
};

export default Home;