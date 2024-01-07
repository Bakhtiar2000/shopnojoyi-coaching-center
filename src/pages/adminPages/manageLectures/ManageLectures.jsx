import React, { useState } from 'react';
import useLectures from '../../../hooks/useLectures';
import LectureBox from './LectureBox';
import { AiOutlinePlus } from 'react-icons/ai';
import CustomModal from '../../../components/CustomModal';
import { useForm } from 'react-hook-form';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';
import guideImg from "../../../../public/assets/admission/video link guide.png"
import SingleLecture from '../../lectures/SingleLecture';

const ManageLectures = () => {
    const [axiosSecure] = useAxios()
    const [lecturesData, , refetch] = useLectures();
    const [isLectureModalOpen, setIsLectureModalOpen] = useState(false)
    const [changeField, setChangeField] = useState(false)
    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm();

    const onLectureDataSubmit = data => {
        const updateData = {
            video: data?.video,
            title: data?.title,
            playlist: data?.playlist
        }
        axiosSecure.post('/lectures', updateData)
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        title: 'Lecture updated successfully',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                    setIsLectureModalOpen(false)
                    setChangeField(false)
                    reset()
                    refetch()
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const playlists = [...new Set(lecturesData.map(item => item?.playlist))];

    return (
        <div className='m-5 lg:m-10'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl text-center mt-10 text-title font-semibold'>Manage Lectures</h2>

            <div>
                {
                    playlists.map((playlist, index) => <SingleLecture key={index} playlist={playlist} refetch={refetch} from="manageLectures"></SingleLecture>)
                }
            </div>

            < button onClick={() => setIsLectureModalOpen(true)} className='p-5 rounded-lg w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] xl:w-[640px] h-[180px] sm:h-[225px] md:h-[270px] lg:h-[315px] xl:h-[360px] border border-dashed border-black hover:shadow-xl duration-300 flex justify-center items-center text-5xl mx-auto mt-10'>
                <AiOutlinePlus />
            </button>

            {
                isLectureModalOpen &&
                <CustomModal
                    isModalOpen={isLectureModalOpen}
                    setIsModalOpen={setIsLectureModalOpen}
                >

                    <form onSubmit={handleSubmit(onLectureDataSubmit)}>
                        <h3 className="font-bold text-title text-xl mb-2">Add Lecture</h3>
                        <p className='border-t border-dark mb-5'></p>

                        <div className='sm:flex gap-3'>
                            {/* video link */}
                            <div className='w-full'>
                                <label className='text-dark text-sm'>Video Link <span className='text-red-500'>*</span></label>
                                <input
                                    type='text'
                                    {...register("video", { required: true })}
                                    className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.video && 'border border-red-500'}`}
                                />
                            </div>

                            {/* video title */}
                            <div className='w-full'>
                                <label className='text-dark text-sm'>Video Title <span className='text-red-500'>*</span></label>
                                <input
                                    type='text'
                                    {...register("title", { required: true })}
                                    className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.title && 'border border-red-500'}`}
                                />
                            </div>
                        </div>
                        {/* Guide */}
                        <div className='rounded p-3 bg-primary/20 my-3 text-sm'>
                            <p ><span className='text-red-500'>Guide for finding accurate youtube video link:</span> Click share option below the video in youtube. Then there will be an option named "embed". Click it and you'll see a code. In the code, src will be written (2nd or 3rd line). src contains a link inside double quotation (""). Copy the full link and paste in video link input box above.</p>
                            <img className="mx-auto mt-3" src={guideImg} alt="Guide Image" />
                        </div>

                        {/* Playlist */}
                        <div className='mb-3'>
                            <div className='w-full'>
                                <label className='text-dark text-sm'>Playlist Name <span className='text-red-500'>*</span></label>
                                {
                                    !changeField ?
                                        <select
                                            defaultValue=""
                                            {...register("playlist", { required: true })}
                                            className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 ${errors.playlist && 'border border-red-500'}`}
                                        >
                                            <option disabled value="">Select playlist</option>
                                            {
                                                playlists.map(playlist =>
                                                    <option value={playlist}>{playlist}</option>
                                                )
                                            }
                                        </select> :
                                        <input
                                            type='text'
                                            {...register("playlist", { required: true })}
                                            className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary ${errors.playlist && 'border border-red-500'}`}
                                        />
                                }
                            </div>
                            <div onClick={() => setChangeField(!changeField)} className=' text-blue-500 hover:underline text-sm duration-300 cursor-pointer w-fit'>
                                {
                                    !changeField ? "New Playlist ?" : "Old Playlist ?"
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

export default ManageLectures;