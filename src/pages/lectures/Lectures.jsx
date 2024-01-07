import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import useLectures from '../../hooks/useLectures';
import SingleLecture from './SingleLecture';

const Lectures = () => {
    const [lecturesData]= useLectures()
    const allPlaylists = [...new Set(lecturesData.map(item => item?.playlist))];

    return (
        <div className='container pb-20'>
             <Helmet>
                <title>লেকচারসমূহ - স্বপ্নজয়ী</title>
            </Helmet>
            <Breadcrumbs bg="https://img.freepik.com/free-vector/school-children-attending-distance-class-monitors-desks-classroom-screen-view_74855-15518.jpg?w=1380&t=st=1700408511~exp=1700409111~hmac=b5d0619ba203da690edb83cdba57027500575fed726f2fe10449baaa085783d6" title="Online Lectures" />

            <div>
                {
                    allPlaylists.map((playlist, index)=> <SingleLecture key={index} playlist={playlist}></SingleLecture>)
                }

                {/* Get Resources button */}
                <div className='flex justify-center'>
                    <a className='py-2 px-5 bg-title rounded shadow-lg text-white text-xl mt-10' href="https://drive.google.com/drive/folders/1-382h4i8WFcvmrgLrTHt45bLEsrPyJk3" target='_blank'>Get Resources</a>
                </div>
            </div>
        </div>
    );
};

export default Lectures;