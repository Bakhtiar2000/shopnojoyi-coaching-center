import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Helmet } from 'react-helmet';

const Teachers = () => {
    const [teachers, setTeachers]= useState([])

    useEffect(()=> {
        fetch('/teachers.json')
        .then(res=> res.json())
        .then(data=> setTeachers(data))
    }, [])

    return (
        <div className='container pb-20'>
             <Helmet>
                <title>শিক্ষকসমূহ - স্বপ্নজয়ী</title>
            </Helmet>
            <Breadcrumbs bg="https://i.ibb.co/KXcRw8D/314687788-558362672961148-1820664537336077308-n.jpg" title="Our Teachers" />

            <div className='flex flex-wrap justify-center gap-10 mt-20'>
            {
                teachers?.map(teacher=> 

                <div key={teacher?._id} className='p-5 rounded-lg w-96 md:w-80 lg:w-96 hover:bg-title/10 hover:shadow-xl duration-300'>
                    <img className='w-96 mx-auto rounded' src={teacher?.img} alt={teacher?.name} />

                    <div className='mt-5'>
                        <p className='text-2xl text-title mb-3'>{teacher?.name} {teacher?.position && `(${teacher?.position})`}</p>
                        <p className='mb-1'>{teacher?.education}</p>
                        {
                            teacher?.classes?.map((singleClass, index)=> <span key={index} >
                                {singleClass} {index !== teacher.classes.length - 1 && ', '}
                            </span>)
                        }
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Teachers;