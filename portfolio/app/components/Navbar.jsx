import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <>
        <nav  className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
            <a href='#top'>
                <Image src={assets.logo} className='w-28  cursor-pointer mr-14' alt=""/>
            </a>

            <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
                <li><a href='#top'>Home</a></li>
                <li><a href='#about'>About me</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#work'>My Work</a></li>
                <li><a href='#contact'>Contact me</a></li>
            </ul>

            <div>
                <a href="#contact">Contact <Image src= {assets.arrow_icon} alt='' className='w-3'/></a>
            </div>
        </nav>
        </>
    )
}

export default Navbar