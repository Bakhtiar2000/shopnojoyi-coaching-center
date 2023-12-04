import React, { useEffect, useState } from 'react';
import ActiveLink from '../components/ActiveLink';
import { FaHome } from 'react-icons/fa';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { IoMdPerson, IoMdPhotos, IoIosLogOut } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
import { SiGoogleclassroom } from "react-icons/si"
import { RiLockPasswordFill } from "react-icons/ri"
import { MdRateReview } from "react-icons/md";
import logo from "/logo.png"

const Admin = () => {
    const [user, setUser] = useState(false)
    const [error, setError] = useState("")
    
    const handlePasswordSubmit = e => {
        e.preventDefault()
        const password = e.target.password.value
        console.log(password);
        if (password !== "Admin**") {
            setError("password did not match")
        }
        else {
            setError("");
            setUser(true)
        }
    }

    return (
        <>
            {
                !user ?
                    // Login
                    <div className='h-screen flex justify-center items-center'>
                        <div>
                            <h2 className='text-2xl md:text-3xl lg:text-4xl duration-300 text-title mb-5 lg:mb-8'>Enter Admin Password</h2>
                            <form onSubmit={handlePasswordSubmit}>
                                <input
                                    className='w-52 md:w-64 lg:w-80 duration-300 block rounded outline-none border border-primary py-1 px-2'
                                    onClick={() => setError("")}
                                    type="password"
                                    name="password"
                                    id='password'
                                />
                                {
                                    error && <p className='text-red-500 mt-2'>{error}</p>
                                }

                                <input
                                    className='mt-3 lg:mt-5 rounded lg:text-lg cursor-pointer bg-title px-3 py-1 w-fit hover:bg-primary text-white duration-300'
                                    type="submit"
                                    value="Submit"
                                />
                            </form>
                        </div>
                    </div> :

                    // Drawer
                    <div className="drawer lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center">
                            <label htmlFor="my-drawer-2" className="text-xl sm:text-2xl md:text-3xl text-title cursor-pointer rounded-full btn-primary drawer-button lg:hidden me-auto mt-5 ms-5">
                                <span className="menu-icon">☰</span>
                            </label>
                            <Outlet></Outlet>
                        </div>
                        <div className="drawer-side bg-title text-white">
                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                            <div className='flex gap-5 mt-3 ml-8 mb-5'>
                                <div className='flex justify-center items-center gap-3'>
                                    <img className='w-10' src={logo} alt="" />
                                    <div>
                                        <p className='text-xl text-primary'>স্বপ্নজয়ী</p>
                                        <p className='text-xs'>একাডেমিক কেয়ার</p>
                                    </div>
                                </div>
                            </div>

                            <ul className="p-4 w-56 sm:w-64 lg:w-[280px]  duration-300 max-w-sm h-full">
                                <li><ActiveLink to='/admin/adminHome'><div className='flex items-center gap-2 text-sm sm:text-base duration-300'><FaHome /> Admin Home</div></ActiveLink></li>
                                <li><ActiveLink to='/admin/manageTeachers'><div className='flex items-center gap-2 text-sm sm:text-base duration-300'><IoMdPerson /> Manage Teachers</div></ActiveLink></li>
                                <li><ActiveLink to='/admin/managePrograms'><div className='flex items-center gap-2 text-sm sm:text-base duration-300'><IoMdPhotos /> Manage Program Photos</div></ActiveLink></li>
                                <li><ActiveLink to='/admin/manageGallery'><div className='flex items-center gap-2 text-sm sm:text-base duration-300'><GrGallery /> Manage Gallery Photos</div></ActiveLink></li>
                                <li><ActiveLink to='/admin/manageLectures'><div className='flex items-center gap-2 text-sm sm:text-base duration-300'><SiGoogleclassroom /> Manage Online Lectures</div></ActiveLink></li>
                                <li><ActiveLink to='/admin/manageReviews'><div className='flex items-center gap-2 text-sm sm:text-base duration-300'><MdRateReview /> Manage Reviews</div></ActiveLink></li>

                                <div className="border-t border-primary m-3"></div>

                                <li><ActiveLink to='/admin/changePassword'><div className='flex items-center gap-2 text-sm sm:text-base duration-300'><RiLockPasswordFill /> Change password</div></ActiveLink></li>
                                <li><ActiveLink to='/admin/logout'><div className='flex items-center gap-2 text-sm sm:text-base duration-300 bg-red-500 px-3 py-1 rounded'><IoIosLogOut />Logout</div></ActiveLink></li>
                            </ul>

                        </div>
                    </div>
            }
        </>
    );
};

export default Admin;