import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroSlider from '../Components/HeroSlider';

const HomeLayout = () => {
    return (
        <>
        <header>
          <Navbar></Navbar>
          <section className='py-10'>
            <HeroSlider></HeroSlider>
          </section>
          </header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default HomeLayout;