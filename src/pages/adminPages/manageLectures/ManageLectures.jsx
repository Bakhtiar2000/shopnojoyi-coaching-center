import React, { useState } from 'react';
import useLectures from '../../../hooks/useLectures';
import LectureBox from './LectureBox';
import { AiOutlinePlus } from 'react-icons/ai';
import CustomModal from '../../../components/CustomModal';
import { useForm } from 'react-hook-form';

const ManageLectures = () => {
    const [lecturesData, refetch] = useLectures();
    const [isLectureModalOpen, setIsLectureModalOpen] = useState(false)
    const [changeField, setChangeField] = useState(false)
    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm();

    const onLectureDataSubmit = data => {
        const updateData = {
            video: data?.video,
            title: data?.title,
            playlist: data?.playlist
        }
        setIsLectureModalOpen(false)
        reset()
        console.log(updateData)
    }

    const mathLecture = lecturesData.filter(lecture => lecture.playlist === "Math")
    const chemistryLecture = lecturesData.filter(lecture => lecture.playlist === "Chemistry")
    const englishLecture = lecturesData.filter(lecture => lecture.playlist === "English")
    const financeLecture = lecturesData.filter(lecture => lecture.playlist === "Finance & Banking")
    const ictLecture = lecturesData.filter(lecture => lecture.playlist === "I.C.T")

    const playlists = [...new Set(lecturesData.map(item => item?.playlist))];

    return (
        <div className='m-5 lg:m-10'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl text-center mt-10 text-title font-semibold'>Manage Lectures</h2>

            <div>
                {/* Math */}
                <div className='mt-10 bg-title/10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-title font-semibold mb-6 md:mb-10'>📐 গণিত</h2>
                    <div className='grid 2xl:grid-cols-2 gap-6 md:gap-10'>
                        {
                            mathLecture?.map(lecture => <LectureBox key={lecture?._id} lecture={lecture} refetch={refetch}></LectureBox>)
                        }
                    </div>
                </div>

                {/* English */}
                <div className='mt-10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-title font-semibold mb-6 md:mb-10'>📖 ইংরেজি</h2>
                    <div className='grid 2xl:grid-cols-2 gap-6 md:gap-10'>
                        {
                            englishLecture?.map(lecture => <LectureBox key={lecture?._id} lecture={lecture} refetch={refetch}></LectureBox>)
                        }
                    </div>
                </div>

                {/* Finance & Banking */}
                <div className='mt-10 bg-bg/10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-title font-semibold mb-6 md:mb-10'>📊 ফাইন্যান্স এন্ড ব্যাংকিং</h2>
                    <div className='grid 2xl:grid-cols-2 gap-6 md:gap-10'>
                        {
                            financeLecture?.map(lecture => <LectureBox key={lecture?._id} lecture={lecture} refetch={refetch}></LectureBox>)
                        }
                    </div>
                </div>

                {/* Chemistry */}
                <div className='mt-10 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-title font-semibold mb-6 md:mb-10'>🧪 রসায়ন</h2>
                    <div className='grid 2xl:grid-cols-2 gap-6 md:gap-10'>
                        {
                            chemistryLecture?.map(lecture => <LectureBox key={lecture?._id} lecture={lecture} refetch={refetch}></LectureBox>)
                        }
                    </div>
                </div>

                {/* ICT */}
                <div className='mt-10 bg-primary/5 p-3 sm:p-5 lg:p-8 w-fit mx-auto'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-title font-semibold mb-6 md:mb-10'>💻 আই.সি.টি.</h2>
                    <div className='grid 2xl:grid-cols-2 gap-6 md:gap-10'>
                        {
                            ictLecture?.map(lecture => <LectureBox key={lecture?._id} lecture={lecture} refetch={refetch}></LectureBox>)
                        }
                    </div>
                </div>
            </div>

            < button onClick={() => setIsLectureModalOpen(true)} className='p-5 rounded-lg w-[600px] h-[300px] border border-dashed border-black hover:shadow-xl duration-300 flex justify-center items-center text-5xl mx-auto mt-10'>
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
                                <label className='text-dark text-sm'>Video Link:</label>
                                <input
                                    type='text'
                                    {...register("video", { required: true })}
                                    className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.video && 'border border-red-500'}`}
                                />
                            </div>

                            {/* video title */}
                            <div className='w-full'>
                                <label className='text-dark text-sm'>Video Title:</label>
                                <input
                                    type='text'
                                    {...register("title", { required: true })}
                                    className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.title && 'border border-red-500'}`}
                                />
                            </div>
                        </div>

                        {/* Playlist */}
                        <div className='mb-3'>
                            <div className='w-full'>
                                <label className='text-dark text-sm'>Playlist Name:</label>
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
                                            className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.playlist && 'border border-red-500'}`}
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