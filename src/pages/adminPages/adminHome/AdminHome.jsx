import React from 'react';
import { IoMdPerson } from 'react-icons/io';
import { SiGoogleclassroom } from 'react-icons/si';
import useTeachers from '../../../hooks/useTeachers';
import useLectures from '../../../hooks/useLectures';

const AdminHome = () => {
    const [teachersData] = useTeachers()
    const [lecturesData] = useLectures()
    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl text-center text-title font-semibold'>Welcome Shopnojoyi Admin</h2>

                <div className='sm:flex gap-5 mt-10 mx-auto w-fit duration-300'>
                    <div className='w-fit rounded-lg shadow-lg shadow-primary/30 bg-title/10 p-5 mx-auto mb-5 sm:mb-0'>
                        <div className='flex items-center gap-3 text-xl'>
                            <IoMdPerson />
                            Teachers added
                        </div>
                        <p className='text-center font-semibold mt-3 text-3xl md:text-4xl lg:text-5xl'>{teachersData.length}</p>
                    </div>

                    <div className='w-fit rounded-lg shadow-lg shadow-primary/30 bg-title/10 p-5'>
                        <div className='flex items-center gap-3 text-xl'>
                            <SiGoogleclassroom />
                            Lectures uploaded
                        </div>
                        <p className='text-center font-semibold mt-3 text-3xl md:text-4xl lg:text-5xl'>{lecturesData.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;