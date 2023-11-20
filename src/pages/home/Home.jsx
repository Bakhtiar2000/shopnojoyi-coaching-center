import React from 'react';
import Hero from './Hero';
import OurTeachers from './OurTeachers';
import Pictures from './Pictures';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Hero />
            <OurTeachers />
            <Pictures />
            <Reviews />
        </div>
    );
};

export default Home;