import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Admin from '../../layout/Admin';

const Login = () => {
    const [error, setError] = useState("")
    const location = useLocation();
    const navigate = useNavigate();

    const handlePasswordSubmit = e => {
        e.preventDefault()
        const password = e.target.password.value
        console.log(password);
        if (password !== "Admin**") {
            setError("password did not match")
        }
        else {
            setError("");
            navigate("/admin")
            // <Navigate to='/login' state={{ from: location }} replace />
            console.log(error, "inside");
        }
    }

    return (
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
        </div>
    );
};

export default Login;