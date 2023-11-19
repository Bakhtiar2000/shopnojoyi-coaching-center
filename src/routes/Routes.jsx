import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import ErrorPage from '../pages/errorPage/ErrorPage';
import Home from '../pages/home/Home';
import Teachers from '../pages/teachers/Teachers';
import Programs from '../pages/programs/Programs';
import Lectures from '../pages/lectures/Lectures';
import Contact from '../pages/contact/Contact';
import AboutUs from '../pages/aboutUs/AboutUs';

const router= createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/teachers",
                    element: <Teachers></Teachers>
                },
                {
                    path: "/programs",
                    element: <Programs></Programs>
                },
                {
                    path: "/lectures",
                    element: <Lectures></Lectures>
                },
                {
                    path: "/contact",
                    element: <Contact></Contact>
                },
                {
                    path: "/aboutUs",
                    element: <AboutUs></AboutUs>
                }
            ]
        }
    ])

export default router;