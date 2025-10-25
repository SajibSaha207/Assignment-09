import React from 'react';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <>
            <Outlet></Outlet>
        </>
    );
};

export default HomeLayout;