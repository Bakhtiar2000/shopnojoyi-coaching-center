import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';

const Lectures = () => {
    const [lectures, setLectures]= useState([])
    const [showChemistry, setShowChemistry] = useState(false)

    useEffect(()=> {
        fetch('/lectures.json')
        .then(res=> res.json())
        .then(data=> setLectures(data))
    }, [])
    const mathLecture= lectures.filter(lecture=> lecture.playlist === "Math")
    const chemistryLecture= lectures.filter(lecture=> lecture.playlist === "Chemistry")
    const englishLecture= lectures.filter(lecture=> lecture.playlist === "English")
    const financeLecture= lectures.filter(lecture=> lecture.playlist === "Finance & Banking")
    const ictLecture= lectures.filter(lecture=> lecture.playlist === "I.C.T")

    const renderedChemistryLecture= showChemistry? chemistryLecture :chemistryLecture.slice(0,2)

    return (
        <div className='container pb-20'>
             <Helmet>
                <title>লেকচারসমূহ - স্বপ্নজয়ী</title>
            </Helmet>
            <Breadcrumbs bg="https://img.freepik.com/free-vector/school-children-attending-distance-class-monitors-desks-classroom-screen-view_74855-15518.jpg?w=1380&t=st=1700408511~exp=1700409111~hmac=b5d0619ba203da690edb83cdba57027500575fed726f2fe10449baaa085783d6" title="Online Lectures" />

            <div>

                {/* Math */}
                <div className='mt-10 bg-title/10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-primary font-semibold mb-6 md:mb-10'>📐 গণিত</h2>
                    <div className='grid 2xl:grid-cols-2 gap-6 md:gap-10'>
                    {
                        mathLecture?.map(lecture=> 
                        <div key={lecture?._id} className=''>
                            <iframe className='w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] xl:w-[640px] h-[180px] sm:h-[225px] md:h-[270px] lg:h-[315px] xl:h-[360px] duration-300' src={lecture?.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <p className='w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] duration-300 lg:text-lg font-semibold mt-3 text-title'>{lecture?.title}</p>
                        </div>)
                    }
                    </div>
                </div>

                {/* English */}
                <div className='mt-10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-primary font-semibold mb-6 md:mb-10'>📖 ইংরেজি</h2>
                    <div className='grid 2xl:grid-cols-2 gap-6 md:gap-10'>
                    {
                        englishLecture?.map(lecture=> 
                        <div key={lecture?._id} className=''>
                            <iframe className='w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] xl:w-[640px] h-[180px] sm:h-[225px] md:h-[270px] lg:h-[315px] xl:h-[360px] duration-300' src={lecture?.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <p className='w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] duration-300 lg:text-lg font-semibold mt-3 text-title'>{lecture?.title}</p>
                        </div>)
                    }
                    </div>
                </div>

                {/* Finance & Banking */}
                <div className='mt-10 bg-bg/10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-primary font-semibold mb-6 md:mb-10'>📊 ফাইন্যান্স এন্ড ব্যাংকিং</h2>
                    <div className='grid 2xl:grid-cols-2 gap-6 md:gap-10'>
                    {
                        financeLecture?.map(lecture=> 
                        <div key={lecture?._id} className=''>
                            <iframe className='w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] xl:w-[640px] h-[180px] sm:h-[225px] md:h-[270px] lg:h-[315px] xl:h-[360px] duration-300' src={lecture?.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <p className='w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] duration-300 lg:text-lg font-semibold mt-3 text-title'>{lecture?.title}</p>
                        </div>)
                    }
                    </div>
                </div>

                {/* Chemistry */}
                <div className='mt-10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-primary font-semibold mb-6 md:mb-10'>🧪 রসায়ন</h2>
                    <div className='grid 2xl:grid-cols-2 gap-6 md:gap-10'>
                    {
                        renderedChemistryLecture?.map(lecture=> 
                        <div key={lecture?._id} className=''>
                            <iframe className='w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] xl:w-[640px] h-[180px] sm:h-[225px] md:h-[270px] lg:h-[315px] xl:h-[360px] duration-300' src={lecture?.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <p className='w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] duration-300 lg:text-lg font-semibold mt-3 text-title'>{lecture?.title}</p>
                        </div>)
                    }
                    </div>
                    {
                        chemistryLecture?.length>2 && !showChemistry && <div className='flex justify-center'><button onClick={()=> setShowChemistry(true)} className='py-1 px-3 bg-primary rounded shadow-lg text-white mt-5'>See more</button></div>
                    }
                </div>

                {/* ICT */}
                <div className='mt-10 bg-primary/5 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-primary font-semibold mb-6 md:mb-10'>💻 আই.সি.টি.</h2>
                    <div className='grid 2xl:grid-cols-2 gap-6 md:gap-10'>
                    {
                        ictLecture?.map(lecture=> 
                        <div key={lecture?._id} className=''>
                            <iframe className='w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] xl:w-[640px] h-[180px] sm:h-[225px] md:h-[270px] lg:h-[315px] xl:h-[360px] duration-300' src={lecture?.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <p className='w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] duration-300 lg:text-lg font-semibold mt-3 text-title'>{lecture?.title}</p>
                        </div>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lectures;