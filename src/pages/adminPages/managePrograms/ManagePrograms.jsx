import React, { useState } from 'react';
import usePrograms from '../../../hooks/usePrograms';
import CustomModal from '../../../components/CustomModal';
import { useForm } from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';
import SingleProgram from '../../programs/SingleProgram';

const ManagePrograms = () => {
    const [axiosSecure] = useAxios()
    const [programsData, , refetch] = usePrograms()
    const [isProgramModalOpen, setIsProgramModalOpen] = useState(false)
    const [changeField, setChangeField] = useState(false)
    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm();

    const programs = [...new Set(programsData.map(item => item?.program))];

    const onProgramDataSubmit = data => {
        const updateData = {
            img: data?.photo,
            hash: data?.hash,
            program: data?.program
        }
        axiosSecure.post('/programs', updateData)
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        title: 'Photo updated successfully',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                    setIsProgramModalOpen(false)
                    setChangeField(false)
                    reset()
                    refetch()
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='m-5 lg:m-10'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl text-center mt-10 text-title font-semibold'>Manage Program Photos</h2>

            <div>
                {
                    programs.map((program, index) => <SingleProgram key={index} program={program} refetch={refetch} from="managePrograms"></SingleProgram>)
                }
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
                                <label className='text-dark text-sm'>Photo Link <span className='text-red-500'>*</span></label>
                                <input
                                    type='text'
                                    {...register("photo", { required: true })}
                                    placeholder='4:3 photo ratio is preferred'
                                    className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary ${errors.photo && 'border border-red-500'}`}
                                />
                                <p className='text-end sm:text-start text-sm my-1 ml-1'>Free upload sites: <a className='text-blue-500 underline' href="https://imgbb.com/" target="_blank">Imgbb</a>, <a className='text-blue-500 underline' href="https://drive.google.com/drive/my-drive" target="_blank">GDrive</a></p>
                            </div>

                            {/* Hash */}
                            <div className='w-full'>
                                <label className='text-dark text-sm'>Photo Hash <span className='text-red-500'>*</span></label>
                                <input
                                    type='text'
                                    {...register("hash", { required: true })}
                                    className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary ${errors.hash && 'border border-red-500'}`}
                                />
                                <p className='text-end text-sm my-1 mr-1'>Get Blurhash string from: <a className='text-blue-500 underline' href="https://blurha.sh/" target="_blank">here</a></p>
                            </div>
                        </div>
                        

                        {/* Guide */}
                        <p className='rounded p-3 bg-primary/20 my-3 text-sm'><span className='text-red-500'>Guide for finding blurhash string:</span> After going to the link above, you'll reach the blurhash website. Scroll down and you'll find an upload option. Click and upload the photo that you want to add here. They will provide a string according to the image. Copy it and paste in the photo hash input box above.</p>

                        {/* Program */}
                        <div className='mb-3'>
                            <div className='w-full'>
                                <label className='text-dark text-sm'>Program Name <span className='text-red-500'>*</span></label>
                                {
                                    !changeField ?
                                        <select
                                            defaultValue=""
                                            {...register("program", { required: true })}
                                            className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 cursor-pointer ${errors.program && 'border border-red-500'}`}
                                        >
                                            <option disabled value="">Select program</option>
                                            {
                                                programs.map(program =>
                                                    <option className='cursor-pointer' value={program}>{program}</option>
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