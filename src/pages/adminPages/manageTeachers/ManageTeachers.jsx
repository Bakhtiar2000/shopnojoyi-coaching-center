import React, { useState } from 'react';
import useTeachers from '../../../hooks/useTeachers';
import TeacherBox from './Teacherbox';
import { AiOutlinePlus } from "react-icons/ai";
import CustomModal from '../../../components/CustomModal';
import { useForm } from 'react-hook-form';
import { IoMdAddCircleOutline } from 'react-icons/io';

const ManageTeachers = () => {
    const [teachersData] = useTeachers()
    const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false)
    const [classes, setClasses] = useState([{ id: 1, value: "" }]);
    const [maximumWarning, setMaximumWarning] = useState(false)
    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm();

    const handleIncreaseInputField = () => {
        if (classes.length < 5) {
            const newId = classes.length + 1;
            setClasses([...classes, { id: newId, value: "" }]);
        }
        else setMaximumWarning(true)
    };
    const onTeacherDataSubmit = data => {
        const updateData = {
            img: data?.photo,
            name: data?.name,
            education: data?.edu,
            position: data?.position,
            classes: data?.classes
        }
        setIsTeacherModalOpen(false)
        reset()
        console.log(updateData)
    }
    return (
        <div className='m-5 lg:m-10'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl text-center mt-10 text-title font-semibold'>Manage Teachers</h2>

            <div className='flex flex-wrap justify-center gap-10 mt-20'>
                {
                    teachersData?.map(teacher => <TeacherBox key={teacher?._id} teacher={teacher}></TeacherBox>)
                }


                <button onClick={() => setIsTeacherModalOpen(true)} className='p-5 rounded-lg h-96 md:h-80 lg:h-96 w-96 md:w-80 lg:w-96 border border-dashed border-black hover:shadow-xl duration-300 flex justify-center items-center text-5xl'>
                    <AiOutlinePlus />
                </button>
            </div>

            {
                isTeacherModalOpen &&
                <CustomModal
                    isModalOpen={isTeacherModalOpen}
                    setIsModalOpen={setIsTeacherModalOpen}
                >

                    <form onSubmit={handleSubmit(onTeacherDataSubmit)}>
                        <h3 className="font-bold text-title text-xl mb-2">Add Teacher Information</h3>
                        <p className='border-t border-dark mb-5'></p>

                        <div className='sm:flex gap-3'>
                            {/* Teacher image */}
                            <div className='w-full'>
                                <label className='text-dark text-sm'>Teacher's Photo Link:</label>
                                <input
                                    type='text'
                                    {...register("photo", { required: true })}
                                    className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.photo && 'border border-red-500'}`}
                                />
                            </div>

                            {/* Teacher name */}
                            <div className='w-full'>
                                <label className='text-dark text-sm'>Teacher's Name:</label>
                                <input
                                    type='text'
                                    {...register("name", { required: true })}
                                    className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.name && 'border border-red-500'}`}
                                />
                            </div>
                        </div>

                        <div className='sm:flex gap-3'>
                            {/* Teacher education */}
                            <div className='w-full'>
                                <label className='text-dark text-sm'>Teacher's Education:</label>
                                <input
                                    type='text'
                                    placeholder='e.g. বিবিএ, ডিআইইউ'
                                    {...register("edu", { required: true })}
                                    className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.edu && 'border border-red-500'}`}
                                />
                            </div>

                            {/* Teacher position */}
                            <div className='w-full'>
                                <label className='text-dark text-sm'>Important position:</label>
                                <input
                                    type='text'
                                    {...register("position")}
                                    placeholder='e.g. পরিচালক'
                                    className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3`}
                                />
                            </div>
                        </div>

                        {/* Classes */}
                        <div className='w-full'>
                            <label className='text-dark text-sm'>Classes taken by the teacher:</label>
                            {classes.map((singleClass, index) => (
                                <div key={singleClass.id} className='flex items-center gap-5 mb-3'>
                                    <input
                                        type='text'
                                        className='w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3'
                                        {...register(`classes[${index}]`)}
                                    />
                                    {index === classes.length - 1 && (
                                        <button onClick={handleIncreaseInputField}
                                            className='h-10 w-10 rounded-lg flex items-center justify-center'
                                        >
                                            <IoMdAddCircleOutline size={24} />
                                        </button>
                                    )}
                                </div>
                            ))}
                            {
                                maximumWarning && <p className='text-red-500'>Maximum classes field reached</p>
                            }
                        </div>

                        {/* Submit */}
                        <input
                            className="text-center px-3 md:px-5 py-1 md:py-3 bg-primary hover:bg-title duration-300 rounded-lg text-white cursor-pointer"
                            type="submit"
                            value="Save Changes"
                        />
                    </form>
                </CustomModal>
            }
        </div>
    );
};

export default ManageTeachers;