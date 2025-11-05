import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroSlider from '../Components/HeroSlider';
import TopRated from '../Components/TopRated';

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
           <section className='py-10'>
             <TopRated></TopRated>
           </section>
             <section className='py-10'>
            <Footer></Footer>
            </section>
        </>
    );
};

export default HomeLayout;