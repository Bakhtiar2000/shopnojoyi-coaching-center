import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import ImageComponent from '../../components/ImageComponent';
import usePrograms from '../../hooks/usePrograms';
import SingleProgram from './SingleProgram';

const Programs = () => {
    const [programsData] = usePrograms();
    const allPrograms = [...new Set(programsData.map(item => item?.program))];

    return (
        <div className='container pb-20'>
            <Helmet>
                <title>প্রোগ্রামসমূহ - স্বপ্নজয়ী</title>
            </Helmet>
            <Breadcrumbs bg="https://img.freepik.com/premium-vector/back-school-vector-hand-drawn-pattern_476422-809.jpg?size=626&ext=jpg&ga=GA1.1.670690934.1670350375&semt=ais" title="Program Photos" />

            <div>
                {
                    allPrograms.map((program, index)=> <SingleProgram key={index} program={program}></SingleProgram>)
                }
            </div>
        </div>
    );
};

export default Programs;