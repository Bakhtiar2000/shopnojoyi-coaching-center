import React, { useEffect, useState } from 'react';
import ActiveLink from '../components/ActiveLink';
import { FaHome } from 'react-icons/fa';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { IoMdPerson, IoMdPhotos, IoIosLogOut } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
import { SiGoogleclassroom } from "react-icons/si"
import { RiLockPasswordFill } from "react-icons/ri"
import { MdRateReview } from "react-icons/md";
import logo from "/logo.png"
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import useAxios from '../hooks/useAxios';

const Admin = () => {
    const [axiosSecure] = useAxios()
    const [isAdmin, setIsAdmin] = useState(false);
    const [pass, setPass] = useState(false);
    const [error, setError] = useState('');
    const [wrongAttempts, setWrongAttempts] = useState(0);
    const [accessDenied, setAccessDenied] = useState(false);
    const denialPeriod = 30 * 1000; // 30 seconds in milliseconds
    const navigate = useNavigate()

    axiosSecure.get("password")
        .then(res => setPass(res.data[0].pass))

    useEffect(() => {
        const denialTimestamp = localStorage.getItem('accessDenialTimestamp');
        if (denialTimestamp) {
            const currentTime = Date.now();
            if (currentTime - parseInt(denialTimestamp, 10) < denialPeriod) {
                setAccessDenied(true);
            } else {
                setAccessDenied(false);
                localStorage.removeItem('accessDenialTimestamp');
            }
        }
    }, []);

    useEffect(() => {
        if (isAdmin) navigate("/admin/adminHome");
    }, [isAdmin, navigate]);

    const handlePasswordSubmit = e => {
        e.preventDefault();
        const password = e.target.password.value;

        if (password !== pass) {
            setError('Password did not match');
            setWrongAttempts(prevAttempts => prevAttempts + 1); // Increment attempts
            if (wrongAttempts + 1 >= 5) {
                const timestamp = Date.now().toString();
                localStorage.setItem('accessDenialTimestamp', timestamp); // Store denial timestamp
                setAccessDenied(true); // Set access denied after 5 attempts
                setIsAdmin(false);
            }
        } else {
            setError('');
            setIsAdmin(true);
        }
    };

    if (accessDenied) {
        Swal.fire({
            icon: "error",
            title: "Access Denied!",
            text: "You cannot access admin route!"
        });
        navigate("/")
    }

    const handleForgetPassword= () => {
        console.log("Sorry, I forgot it")
    }

    return (
        <>
            <Helmet>
                <title>এডমিন - স্বপ্নজয়ী</title>
            </Helmet>
            {
                !isAdmin ?
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
                                <p onClick={handleForgetPassword} className='text-end w-52 md:w-64 lg:w-80 duration-300 text-sm hover:underline text-blue-500 cursor-pointer'>Forgot password?</p>
                                {
                                    error &&
                                    <>
                                        <p className='text-red-500 mt-2'>{error}</p>
                                        <p className='text-title bg-red-50 w-52 md:w-64 lg:w-80 rounded p-2 mt-2'>N.B. You cannot access admin route for 3 days after 5 continuous wrong attempts.</p>
                                    </>
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
                        <div className="drawer-content m-2 lg:m-0">
                            <label htmlFor="my-drawer-2" className="fixed text-xl sm:text-2xl md:text-3xl text-title cursor-pointer rounded-full btn-primary drawer-button lg:hidden">
                                <span>☰</span>
                            </label>
                            <Outlet></Outlet>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                            <ul className="p-4 w-56 sm:w-64 lg:w-[280px] duration-300 max-w-sm h-full bg-title text-white">
                                <li>
                                    <div className='flex gap-5 mt-3 mb-5'>
                                        <Link to="/" className='flex justify-center items-center gap-3'>
                                            <img className='w-10' src={logo} alt="" />
                                            <div>
                                                <p className='text-xl text-primary'>স্বপ্নজয়ী</p>
                                                <p className='text-xs'>একাডেমিক কেয়ার</p>
                                            </div>
                                        </Link>
                                    </div>
                                </li>
                                <li><ActiveLink to='/admin/adminHome'><div className='flex items-center gap-2 text-sm sm:text-base duration-300'><FaHome /> Admin Home</div></ActiveLink></li>
                                <li><ActiveLink to='/admin/manageTeachers'><div className='flex items-center gap-2 text-sm sm:text-base duration-300'><IoMdPerson /> Manage Teachers</div></ActiveLink></li>
                                <li><ActiveLink to='/admin/managePrograms'><div className='flex items-center gap-2 text-sm sm:text-base duration-300'><IoMdPhotos /> Manage Program Photos</div></ActiveLink></li>
                                <li><ActiveLink to='/admin/manageGallery'><div className='flex items-center gap-2 text-sm sm:text-base duration-300'><GrGallery /> Manage Gallery Photos</div></ActiveLink></li>
                                <li><ActiveLink to='/admin/manageLectures'><div className='flex items-center gap-2 text-sm sm:text-base duration-300'><SiGoogleclassroom /> Manage Online Lectures</div></ActiveLink></li>
                                {/* <li><ActiveLink to='/admin/manageReviews'><div className='flex items-center gap-2 text-sm sm:text-base duration-300'><MdRateReview /> Manage Reviews</div></ActiveLink></li> */}

                                <div className="border-t border-primary m-3"></div>

                                <li><ActiveLink to='/admin/changePassword'><div className='flex items-center gap-2 text-sm sm:text-base duration-300'><RiLockPasswordFill /> Change password</div></ActiveLink></li>
                                <li><Link to='/'><div className='flex items-center gap-2 text-sm sm:text-base duration-300 bg-red-500 px-3 py-1 rounded mt-2'><IoIosLogOut />Logout</div></Link></li>
                            </ul>

                        </div>
                    </div>
            }
        </>
    );
};

export default Admin;