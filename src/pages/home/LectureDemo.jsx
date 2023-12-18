import React from 'react';
import useLectures from '../../hooks/useLectures';

const LectureDemo = () => {
    const [lecturesData] = useLectures()

    const uniqueVideos = lecturesData.reduce((acc, video) => {
        acc[video?.playlist] = video;
    })

    console.log(uniqueVideos)
    return (
        <div className='container py-20'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl mb-10 text-center duration-300 text-title'>অভিজ্ঞ শিক্ষক পরিচালিত শিক্ষাদান</h2>

            <div className='lg:flex justify-between gap-8 duration-300'>
                {
                    lecturesData.map(lecture =>
                        <div key={lecture._id} className='p-5 bg-title/5 rounded-lg duration-300 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-sm mx-auto shadow-lg shadow-title/50'>
                            <div className='flex items-center gap-5 mb-5'>
                                <img className='rounded-full w-12 md:w-16 h-12 md:h-16 duration-300 object-cover object-center border-2 border-title/50 shadow-xl' src={lecture?.img} alt="" />
                                <div>
                                    <p className='text-lg md:text-xl text-title duration-300'>{lecture?.name}</p>
                                    <p className='text-sm md:text-base duration-300'>{lecture?.education}</p>
                                </div>
                            </div>
                            <p className='duration-300 text-sm md:text-base'>{lecture?.comment}</p>
                        </div>)
                }
            </div>
        </div>
    );
};

export default LectureDemo;