import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import { FaPlus } from "react-icons/fa6";
import usePayments from '../../hooks/usepayments';


const Admission = () => {
    const [paymentsdata] = usePayments()
    const [selectedClass, setSelectedClass] = useState("")
    const [selectedSubjects, setSelectedSubjects] = useState([])
    const selectedClassData= paymentsdata?.find(data => data.division == selectedClass)
    const classWiseSubjects = paymentsdata?.find(data => data.division == selectedClass)?.subjects || []

    const handleSubjectSelection = sub => {
        const updatedSubjects = [...selectedSubjects];
        const index = updatedSubjects.indexOf(sub);

        if (index !== -1) {
            updatedSubjects.splice(index, 1);
        } else {
            updatedSubjects.push(sub);
        }

        setSelectedSubjects(updatedSubjects);
    };

    return (
        <div>
            <Helmet>
                <title>ভর্তি তথ্য - স্বপ্নজয়ী</title>
            </Helmet>
            <Breadcrumbs bg="https://img.freepik.com/free-vector/classroom-mathematics-learning-school_107791-1685.jpg?size=626&ext=jpg&ga=GA1.1.670690934.1670350375&semt=sph" title="Admission" />

            <section className="container py-20">

                <h3 className='changing-text text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 py-2'>৭ দিনের ফ্রি ডেমো ক্লাসে তোমাকে স্বাগতম </h3>
                {/* <div className='lg:flex justify-center gap-8 xl:gap-16  w-fit mx-auto'>
                    <img className='w-96 sm:w-[520px] lg:w-96 xl:w-[520px] duration-300 border border-[#313238] rounded mb-10 lg:mb-0' src={admission1} alt="" />
                    <img className='w-96 sm:w-[520px] lg:w-96 xl:w-[520px] duration-300 border border-[#313238] rounded' src={admission2} alt="" />
                </div> */}

                <div className='flex justify-center'>
                    <div>
                        {/* <label className='block mb-1.5'>শ্রেণি বাছাই করো (বিভাগ সহকারে)</label> */}
                        <select
                            onChange={(e) => {
                                setSelectedClass(e.target.value)
                                setSelectedSubjects([])
                            }}
                            className='w-[280px] rounded outline-none px-2 py-1 border border-black/60'
                            defaultValue=""
                        >
                            <option disabled value="">শ্রেণি বাছাই করো (বিভাগ সহকারে)</option>
                            {
                                paymentsdata?.map(data => <option key={data?._id}>{data?.division}</option>)
                            }
                        </select>
                    </div>
                </div>

                {
                    selectedClass !== "" &&
                    <div className='max-w-3xl mx-auto mt-10'>
                        <img className='w-full md:w-[520px] mx-auto mb-8' src={selectedClassData?.img} alt="Routine" />
                        <label className='block mb-3'>স্বপ্নজয়ীতে তুমি কি কি বিষয় পরতে ইচ্ছুক?</label>
                        <div className='flex flex-wrap gap-5'>
                            {
                                classWiseSubjects?.map((sub, index) =>
                                    <button
                                        key={index}
                                        className={`rounded-full w-fit flex items-center gap-2 py-1 px-3 border border-title  ${selectedSubjects.includes(sub) ? "bg-title text-white" : "bg-primary/10 text-black"}`}
                                        onClick={() => handleSubjectSelection(sub)}
                                    >
                                        <FaPlus /> {sub}
                                    </button>
                                )
                            }
                        </div>
                        {
                            selectedSubjects?.length !== 0 &&
                            <div className='rounded border border-title text-title py-2 px-4 text-lg mt-5 w-fit'>
                                মাসিক বেতন: 
                                {
                                    selectedSubjects?.length == 1 ?  selectedClassData?.payment?.one_sub: 
                                    selectedSubjects?.length == 2 ?  selectedClassData?.payment?.two_sub: 
                                    selectedSubjects?.length == 3 ?  selectedClassData?.payment?.three_sub: 
                                    selectedSubjects?.length == 4 ?  selectedClassData?.payment?.four_sub: 
                                    selectedSubjects?.length == 5 ?  selectedClassData?.payment?.five_sub: 
                                    selectedSubjects?.length == 6 ?  selectedClassData?.payment?.six_sub: 
                                    selectedSubjects?.length == 7 ?  selectedClassData?.payment?.seven_sub: 
                                    selectedSubjects?.length == 8 ?  selectedClassData?.payment?.eight_sub: 
                                    ""
                                }৳
                            </div>
                        }
                    </div>
                }

                {/* Get admitted button */}
                <div className='flex justify-center'>
                    <a className='py-2 px-5 bg-title rounded shadow-lg text-white text-xl mt-10' href="https://forms.gle/Usebo2GTnvb7Wr3bA" target='_blank'>Get Admitted</a>
                </div>
            </section>
        </div>
    );
};

export default Admission;