import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';

const ChangePassword = () => {
    const [axiosSecure] = useAxios()
    const [error, setError] = useState(false)
    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm();

    const onPasswordSubmit = data => {
        if (data.password !== data.confirm) {
            setError(true)
            reset()
            return
        }
        const updateData = {
            pass : data.password
        }

        axiosSecure.patch(`/password`, updateData)
            .then(response => {
                console.log(response.data)
                if(response.data.modifiedCount>0){
                    reset()
                    Swal.fire({
                        title: 'password updated successfully',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <h2 className='text-3xl sm:text-4xl md:text-5xl text-center mt-10 text-title font-semibold'>Change Password</h2>

                <form onClick={() => setError(false)} className='w-80 mx-auto mt-10' onSubmit={handleSubmit(onPasswordSubmit)}>

                    {/* New Password */}
                    <div className='w-full'>
                        <label className='text-dark text-sm'>New Password:</label>
                        <input
                            type='password'
                            {...register("password", { required: true })}
                            className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.password && 'border border-red-500'}`}
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className='w-full'>
                        <label className='text-dark text-sm'>Confirm Password:</label>
                        <input
                            type='password'
                            {...register("confirm", { required: true })}
                            className={`w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-3 ${errors.confirm && 'border border-red-500'}`}
                        />
                    </div>

                    {
                        error && <p className='text-red-500'>Password did not match</p>
                    }

                    {/* Submit */}
                    <input
                        className="mt-3 text-center px-3 md:px-5 py-1 md:py-3 bg-primary hover:bg-title duration-300 rounded-lg text-white cursor-pointer"
                        type="submit"
                        value="Save Changes"
                    />
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;