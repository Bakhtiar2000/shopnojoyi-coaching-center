import React from 'react';
import Hero from './Hero';
import OurTeachers from './OurTeachers';
import Pictures from './Pictures';
import Reviews from './Reviews';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>স্বপ্নজয়ী</title>
            </Helmet>
            <Hero />
            <OurTeachers />
            <Pictures />
            <Reviews />
        </div>
    );
};

export default Home;