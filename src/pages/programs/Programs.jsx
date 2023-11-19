import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';

const Programs = () => {
    return (
        <div className='container pb-20'>
             <Helmet>
                <title>প্রোগ্রামসমূহ - স্বপ্নজয়ী</title>
            </Helmet>
            <Breadcrumbs bg="https://img.freepik.com/premium-vector/back-school-vector-hand-drawn-pattern_476422-809.jpg?size=626&ext=jpg&ga=GA1.1.670690934.1670350375&semt=ais" title="আমাদের প্রোগ্রামসমূহ" />
        </div>
    );
};

export default Programs;