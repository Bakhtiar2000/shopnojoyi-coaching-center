import React, { useState } from 'react';
import usePrograms from '../../../hooks/usePrograms';
import ProgramBox from './Programbox';
import CustomModal from '../../../components/CustomModal';
import { useForm } from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';

const ManagePrograms = () => {
    const [programsData, refetch] = usePrograms()
    const [isProgramModalOpen, setIsProgramModalOpen] = useState(false)
    const [changeField, setChangeField] = useState(false)
    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm();

    // All data for selected program
    const hscModelTest = programsData.filter(program => program?.program === "এইচ.এস.সি মডেল টেস্ট")
    const sscModelTest = programsData.filter(program => program?.program === "এস.এস.সি মডেল টেস্ট")
    const dakshinkhanFirstDay = programsData.filter(program => program?.program === "দক্ষিনখান শাখায় প্রথম দিন")
    const demoClass = programsData.filter(program => program?.program === "প্রথম ৭ দিনের ডেমো ক্লাস")
    const monthlyExam = programsData.filter(program => program?.program === "মাসিক পরীক্ষা")
    const ramadanHelp = programsData.filter(program => program?.program === "রমাদান সাহায্য")

    const programs = [...new Set(programsData.map(item => item?.program))];

    const onProgramDataSubmit = data => {
        const updateData = {
            img: data?.photo,
            hash: data?.hash,
            program: data?.program
        }
        setIsProgramModalOpen(false)
        reset()
        console.log(updateData)
    }

    return (
        <div className='m-5 lg:m-10'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl text-center mt-10 text-title font-semibold'>Manage Program Photos</h2>

            <div>
                {/* এইচ.এস.সি মডেল টেস্ট */}
                <div className='mt-10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl text-title font-semibold mb-5 md:mb-8'>এইচ.এস.সি মডেল টেস্ট</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 duration-300 md:gap-10'>
                        {
                            hscModelTest?.map(program => <ProgramBox key={program?._id} program={program} refetch={refetch}></ProgramBox>)
                        }
                    </div>
                </div>

                {/* এস.এস.সি মডেল টেস্ট */}
                <div className='mt-10 bg-title/10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl text-title font-semibold mb-5 md:mb-8'>এস.এস.সি মডেল টেস্ট</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 duration-300 md:gap-10'>
                        {
                            sscModelTest?.map(program => <ProgramBox key={program?._id} program={program} refetch={refetch}></ProgramBox>)
                        }
                    </div>
                </div>

                {/* প্রথম ৭ দিনের ডেমো ক্লাস */}
                <div className='mt-10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl text-title font-semibold mb-5 md:mb-8'>প্রথম ৭ দিনের ডেমো ক্লাস</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 duration-300 md:gap-10'>
                        {
                            demoClass?.map(program => <ProgramBox key={program?._id} program={program} refetch={refetch}></ProgramBox>)
                        }
                    </div>
                </div>

                {/* মাসিক পরীক্ষা */}
                <div className='mt-10 bg-primary/10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl text-title font-semibold mb-5 md:mb-8'>মাসিক পরীক্ষা</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 duration-300 md:gap-10'>
                        {
                            monthlyExam?.map(program => <ProgramBox key={program?._id} program={program} refetch={refetch}></ProgramBox>)
                        }
                    </div>
                </div>

                {/* রমাদান সাহায্য */}
                <div className='mt-10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl text-title font-semibold mb-5 md:mb-8'>রমাদান সাহায্য</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 duration-300 md:gap-10'>
                        {
                            ramadanHelp?.map(program => <ProgramBox key={program?._id} program={program} refetch={refetch}></ProgramBox>)
                        }
                    </div>
                </div>

                {/* দক্ষিনখান শাখায় প্রথম দিন */}
                <div className='mt-10 bg-bg/10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl text-title font-semibold mb-5 md:mb-8'>দক্ষিনখান শাখায় প্রথম দিন</h2>
                    <div className='grid lg:grid-cols-2 gap-6 duration-300 md:gap-10'>
                        {
                            dakshinkhanFirstDay?.map(program => <ProgramBox key={program?._id} program={program} refetch={refetch}></ProgramBox>)
                        }
                    </div>
                </div>
            </div>

            {/* Add photo button */}
            <button onClick={() => setIsProgramModalOpen(true)} className='p-5 rounded-lg w-[300px] h-[225px] border border-dashed border-black hover:shadow-xl duration-300 flex justify-center items-center text-5xl mx-auto mt-10'>
                <AiOutlinePlus />
            </button>

            {
                isProgramModalOpen &&
                <CustomModal
                    isModalOpen={isProgramModalOpen}
                    setIsModalOpen={setIsProgramModalOpen}
                >

                    <form onSubmit={handleSubmit(onProgramDataSubmit)}>
                        <h3 className="font-bold text-title text-xl mb-2">Add Photo</h3>
                        <p className='border-t border-dark mb-5'></p>

                        <div className='sm:flex gap-3'>
                            {/* image */}
                            <div className='w-full'>
                                <label className='text-dark text-sm'>Photo Link:</label>
                                <input
                                    type='text'
                                    {...register("photo", { required: true })}
                                    className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.photo && 'border border-red-500'}`}
                                />
                            </div>

                            {/* Hash */}
                            <div className='w-full'>
                                <label className='text-dark text-sm'>Photo Hash:</label>
                                <input
                                    type='text'
                                    {...register("hash", { required: true })}
                                    className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.hash && 'border border-red-500'}`}
                                />
                            </div>
                        </div>

                        {/* Program */}
                        <div className='mb-3'>
                            <div className='w-full'>
                                <label className='text-dark text-sm'>Program Name:</label>
                                {
                                    !changeField ?
                                        <select
                                            defaultValue=""
                                            {...register("program", { required: true })}
                                            className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 ${errors.program && 'border border-red-500'}`}
                                        >
                                            <option disabled value="">Select program</option>
                                            {
                                                programs.map(program =>
                                                    <option value={program}>{program}</option>
                                                )
                                            }
                                        </select> :
                                        <input
                                            type='text'
                                            {...register("program", { required: true })}
                                            className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 ${errors.program && 'border border-red-500'}`}
                                        />
                                }
                            </div>
                            <div onClick={() => setChangeField(!changeField)} className=' text-blue-500 hover:underline text-sm duration-300 cursor-pointer w-fit'>
                                {
                                    !changeField ? "New Program ?" : "Old Program ?"
                                }
                            </div>
                        </div>

                        {/* Submit */}
                        <input
                            className="mt-3 text-center px-3 md:px-5 py-1 md:py-3 bg-primary hover:bg-title duration-300 rounded-lg text-white cursor-pointer"
                            type="submit"
                            value="Save Changes"
                        />
                    </form>
                </CustomModal>
            }
        </div>
    );
};

export default ManagePrograms;