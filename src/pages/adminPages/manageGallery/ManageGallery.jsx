import React, { useState } from 'react';
import useGallery from '../../../hooks/useGallery';
import GalleryBox from './GalleryBox';
import { AiOutlinePlus } from 'react-icons/ai';
import CustomModal from '../../../components/CustomModal';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';

const ManageGallery = () => {
    const [axiosSecure]= useAxios()
    const [galleryData, , refetch] = useGallery();
    const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false)
    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm();

    const onGalleryDataSubmit = data => {
        const updateData = {
            img: data?.photo,
            description: data?.description
        }
        axiosSecure.post('/gallery', updateData)
            .then(res => {
                console.log(res);
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
                    setIsGalleryModalOpen(false)
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
            <h2 className='text-3xl sm:text-4xl md:text-5xl text-center mt-10 text-title font-semibold'>Manage Gallery</h2>

            <div className='grid xl:grid-cols-2 gap-8 mt-20'>
                {
                    galleryData?.map(photo =>
                        <GalleryBox key={photo?._id} photo={photo} refetch={refetch}></GalleryBox>
                    )
                }
            </div>

            {
                galleryData.length < 4 ?
                < button onClick={() => setIsGalleryModalOpen(true)} className='p-5 rounded-lg w-[600px] h-[300px] border border-dashed border-black hover:shadow-xl duration-300 flex justify-center items-center text-5xl mx-auto mt-10'>
                    <AiOutlinePlus />
                </button>: 
                <p className='text-center text-lg mt-10 text-red-500'>You can have maximum four photos here</p>
            }

            {
                isGalleryModalOpen &&
                <CustomModal
                    isModalOpen={isGalleryModalOpen}
                    setIsModalOpen={setIsGalleryModalOpen}
                >

                    <form onSubmit={handleSubmit(onGalleryDataSubmit)}>
                        <h3 className="font-bold text-title text-xl mb-2">Add Photo</h3>
                        <p className='border-t border-dark mb-5'></p>

                        {/* image */}
                        <div className='w-full'>
                            <label className='text-dark text-sm'>Photo Link <span className='text-red-500'>*</span></label>
                            <input
                                type='text'
                                placeholder='2:1 photo ratio is preferred'
                                {...register("photo", { required: true })}
                                className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.photo && 'border border-red-500'}`}
                            />
                        </div>

                        {/* Description */}
                        <div className='w-full'>
                            <label className='text-dark text-sm'>Photo Description <span className='text-red-500'>*</span></label>
                            <input
                                type='text'
                                {...register("description", { required: true })}
                                className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.description && 'border border-red-500'}`}
                            />
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
        </div >
    );
};

export default ManageGallery;