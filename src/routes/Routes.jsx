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
import Admission from '../pages/admission/Admission';
import Admin from '../layout/Admin';
import AdminHome from '../pages/adminPages/adminHome/AdminHome';
import ManageTeachers from '../pages/adminPages/manageTeachers/ManageTeachers';
import ManagePrograms from '../pages/adminPages/managePrograms/ManagePrograms';
import ManageGallery from '../pages/adminPages/manageGallery/ManageGallery';
import ManageReviews from '../pages/adminPages/manageReviews/ManageReviews';
import ChangePassword from '../pages/adminPages/changePassword/ChangePassword';
import ManageLectures from '../pages/adminPages/manageLectures/ManageLectures';

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
                },
                {
                    path: "/admission",
                    element: <Admission></Admission>
                }
            ]
        },
        {
            path : "admin",
            element: <Admin></Admin>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: "adminHome",
                    element: <AdminHome></AdminHome>
                },
                {
                    path: "manageTeachers",
                    element: <ManageTeachers></ManageTeachers>
                },
                {
                    path: "managePrograms",
                    element: <ManagePrograms></ManagePrograms>
                },
                {
                    path: "manageGallery",
                    element: <ManageGallery></ManageGallery>
                },
                {
                    path: "manageLectures",
                    element: <ManageLectures></ManageLectures>
                },
                {
                    path: "manageReviews",
                    element: <ManageReviews></ManageReviews>
                },
                {
                    path: "changePassword",
                    element: <ChangePassword></ChangePassword>
                }
            ]
        }
    ])

export default router;