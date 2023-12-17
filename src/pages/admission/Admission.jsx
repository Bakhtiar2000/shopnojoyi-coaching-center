import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';
import { FaPlus } from "react-icons/fa6";


const Admission = () => {
    const [paymentdata, setPaymnetData] = useState()
    const [selectedClass, setSelectedClass] = useState("")
    const selectedSubjects = paymentdata?.filter(data => data.division == selectedClass)[0]?.subjects
    console.log(selectedSubjects)

    useEffect(() => {
        fetch("/payment.json")
            .then(res => res.json())
            .then(data => setPaymnetData(data))
    }, [])

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

                <div className='max-w-4xl mx-auto'>
                    <label className='block mb-1.5'>শ্রেণি বাছাই করো (বিভাগ সহকারে)</label>
                    <select
                        onChange={(e) => setSelectedClass(e.target.value)}
                        className='w-60 rounded outline-none px-2 py-1 border border-black/60'
                        defaultValue=""
                    >
                        <option disabled value=""></option>
                        {
                            paymentdata?.map(data => <option key={data?._id}>{data?.division}</option>)
                        }
                    </select>
                </div>

                {
                    selectedClass !== "" &&
                    <div className='max-w-4xl mx-auto mt-10'>
                        <label className='block mb-3'>স্বপ্নজয়ীতে তুমি কি কি বিষয় পরতে ইচ্ছুক?</label>
                        <div className='flex flex-wrap gap-5'>
                            {
                                selectedSubjects?.map(sub =>
                                    <button className='rounded-full w-fit flex items-center gap-2 py-1 px-3 border border-title bg-primary/10'><FaPlus /> {sub}</button>
                                )
                            }
                        </div>

                        <div className='rounded border border-title text-title py-2 px-4 text-lg mt-5 w-fit'>মাসিক হাদিয়া: ২০০০৳</div>
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