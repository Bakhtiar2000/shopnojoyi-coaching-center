import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';

const Programs = () => {
    const [programs, setPrograms]= useState([])

    // State to handle show more button
    const [showHscModelTest, setShowHscModelTest] = useState(false)
    const [showSscModelTest, setShowSscModelTest] = useState(false)
    const [showDakshinkhanFirstDay, setShowDakshinkhanFirstDay] = useState(false)
    const [showDemoClass, setShowDemoClass] = useState(false)
    const [showMonthlyExam, setShowMonthlyExam] = useState(false)
    const [showRamadanHelp, setShowRamadanHelp] = useState(false)

    useEffect(()=> {
        fetch('/programs.json')
        .then(res=> res.json())
        .then(data=> setPrograms(data))
    }, [])

    // All data for selected program
    const hscModelTest = programs.filter(program=> program?.program === "এইচ.এস.সি মডেল টেস্ট")
    const sscModelTest = programs.filter(program=> program?.program === "এস.এস.সি মডেল টেস্ট")
    const dakshinkhanFirstDay = programs.filter(program=> program?.program === "দক্ষিনখান শাখায় প্রথম দিন")
    const demoClass = programs.filter(program=> program?.program === "প্রথম ৭ দিনের ডেমো ক্লাস")
    const monthlyExam= programs.filter(program=> program?.program === "মাসিক পরীক্ষা")
    const ramadanHelp= programs.filter(program=> program?.program === "রমাদান সাহায্য")

     // Filtered data for selected program
    const renderedHscModelTest= showHscModelTest? hscModelTest :hscModelTest.slice(0,3)
    const renderedSscModelTest= showSscModelTest? sscModelTest :sscModelTest.slice(0,3)
    const renderedDakshinkhanFirstDay= showDakshinkhanFirstDay? dakshinkhanFirstDay :dakshinkhanFirstDay.slice(0,3)
    const renderedDemoClass= showDemoClass? demoClass :demoClass.slice(0,3)
    const renderedMonthlyExam= showMonthlyExam? monthlyExam :monthlyExam.slice(0,3)
    const renderedRamadanHelp= showRamadanHelp? ramadanHelp :ramadanHelp.slice(0,3)

    return (
        <div className='container pb-20'>
             <Helmet>
                <title>প্রোগ্রামসমূহ - স্বপ্নজয়ী</title>
            </Helmet>
            <Breadcrumbs bg="https://img.freepik.com/premium-vector/back-school-vector-hand-drawn-pattern_476422-809.jpg?size=626&ext=jpg&ga=GA1.1.670690934.1670350375&semt=ais" title="Program Photos" />

            <div>

                {/* এইচ.এস.সি মডেল টেস্ট */}
                <div className='mt-10 bg-title/10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-primary font-semibold mb-6 md:mb-10'>এইচ.এস.সি মডেল টেস্ট</h2>
                    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6 duration-300 md:gap-10'>
                    {
                        renderedHscModelTest?.map(program=> 
                        <div key={program?._id}>
                            <img src={program?.img} loading='lazy'/>
                        </div>)
                    }
                    </div>
                    {
                        hscModelTest?.length>2 && !showHscModelTest && <div className='flex justify-center'><button onClick={()=> setShowHscModelTest(true)} className='py-1 px-3 bg-primary rounded shadow-lg text-white mt-5'>See more</button></div>
                    }
                    {
                        hscModelTest?.length>2 && showHscModelTest && <div className='flex justify-center'><button onClick={()=> setShowHscModelTest(false)} className='py-1 px-3 bg-primary rounded shadow-lg text-white mt-5'>See less</button></div>
                    }
                </div>
                
                {/* এস.এস.সি মডেল টেস্ট */}
                <div className='mt-10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-primary font-semibold mb-6 md:mb-10'>এস.এস.সি মডেল টেস্ট</h2>
                    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6 duration-300 md:gap-10'>
                    {
                        renderedSscModelTest?.map(program=> 
                        <div key={program?._id}>
                            <img src={program?.img} loading='lazy'/>
                        </div>)
                    }
                    </div>
                    {
                        sscModelTest?.length>2 && !showSscModelTest && <div className='flex justify-center'><button onClick={()=> setShowSscModelTest(true)} className='py-1 px-3 bg-primary rounded shadow-lg text-white mt-5'>See more</button></div>
                    }
                    {
                        sscModelTest?.length>2 && showSscModelTest && <div className='flex justify-center'><button onClick={()=> setShowSscModelTest(false)} className='py-1 px-3 bg-primary rounded shadow-lg text-white mt-5'>See less</button></div>
                    }
                </div>
                
                {/* দক্ষিনখান শাখায় প্রথম দিন */}
                <div className='mt-10 bg-bg/10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-primary font-semibold mb-6 md:mb-10'>দক্ষিনখান শাখায় প্রথম দিন</h2>
                    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6 duration-300 md:gap-10'>
                    {
                        renderedDakshinkhanFirstDay?.map(program=> 
                        <div key={program?._id}>
                            <img src={program?.img} loading='lazy'/>
                        </div>)
                    }
                    </div>
                    {
                        dakshinkhanFirstDay?.length>2 && !showDakshinkhanFirstDay && <div className='flex justify-center'><button onClick={()=> setShowDakshinkhanFirstDay(true)} className='py-1 px-3 bg-primary rounded shadow-lg text-white mt-5'>See more</button></div>
                    }
                    {
                        dakshinkhanFirstDay?.length>2 && showDakshinkhanFirstDay && <div className='flex justify-center'><button onClick={()=> setShowDakshinkhanFirstDay(false)} className='py-1 px-3 bg-primary rounded shadow-lg text-white mt-5'>See less</button></div>
                    }
                </div>

                {/* প্রথম ৭ দিনের ডেমো ক্লাস */}
                <div className='mt-10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-primary font-semibold mb-6 md:mb-10'>প্রথম ৭ দিনের ডেমো ক্লাস</h2>
                    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6 duration-300 md:gap-10'>
                    {
                        renderedDemoClass?.map(program=> 
                        <div key={program?._id}>
                            <img src={program?.img} loading='lazy'/>
                        </div>)
                    }
                    </div>
                    {
                        demoClass?.length>2 && !showDemoClass && <div className='flex justify-center'><button onClick={()=> setShowDemoClass(true)} className='py-1 px-3 bg-primary rounded shadow-lg text-white mt-5'>See more</button></div>
                    }
                    {
                        demoClass?.length>2 && showDemoClass && <div className='flex justify-center'><button onClick={()=> setShowDemoClass(false)} className='py-1 px-3 bg-primary rounded shadow-lg text-white mt-5'>See less</button></div>
                    }
                </div>

                {/* মাসিক পরীক্ষা */}
                <div className='mt-10 bg-primary/10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-primary font-semibold mb-6 md:mb-10'>মাসিক পরীক্ষা</h2>
                    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6 duration-300 md:gap-10'>
                    {
                        renderedMonthlyExam?.map(program=> 
                        <div key={program?._id}>
                            <img src={program?.img} loading='lazy'/>
                        </div>)
                    }
                    </div>
                    {
                        monthlyExam?.length>2 && !showMonthlyExam && <div className='flex justify-center'><button onClick={()=> setShowMonthlyExam(true)} className='py-1 px-3 bg-primary rounded shadow-lg text-white mt-5'>See more</button></div>
                    }
                    {
                        monthlyExam?.length>2 && showMonthlyExam && <div className='flex justify-center'><button onClick={()=> setShowMonthlyExam(false)} className='py-1 px-3 bg-primary rounded shadow-lg text-white mt-5'>See less</button></div>
                    }
                </div>

                {/* রমাদান সাহায্য */}
                <div className='mt-10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-primary font-semibold mb-6 md:mb-10'>রমাদান সাহায্য</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 duration-300 md:gap-10'>
                    {
                        ramadanHelp?.map(program=> 
                        <div key={program?._id}>
                            <img className='h-[520px]' src={program?.img} loading='lazy' />
                        </div>)
                    }
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default Programs;