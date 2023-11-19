import React from 'react';
import ActiveLink from './ActiveLink';

const NavItems = () => {
    return (
        <>
            <li><ActiveLink to="/programs">প্রোগ্রামসমূহ</ActiveLink></li>
            <li><ActiveLink to="/teachers">শিক্ষকসমূহ</ActiveLink></li>
            <li><ActiveLink to="/lectures">লেকচারসমূহ</ActiveLink></li>
        </>
    );
};

export default NavItems;