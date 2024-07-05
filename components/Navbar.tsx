import React from 'react'
import {logo} from "../public/assets/images/index";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='w-full bg-blue text-white'>
      <div className='max-w-Container mx-auto h-20 px-4 flex items-center gap-2'>

        <div className='navBarHover'>
          <Image src={logo} className='w-44' alt='Logo' />
        </div>

        <div className='navBarHover'>
          <div className='w-4 grid grid-cols-2 gap-[2px]'>
            <span className='w-1.5 h-1.5 border-[1px] border-white inline-flex'></span>
            <span className='w-1.5 h-1.5 border-[1px] border-white inline-flex'></span>
            <span className='w-1.5 h-1.5 border-[1px] border-white inline-flex'></span>
            <span className='w-1.5 h-1.5 border-[1px] border-white inline-flex'></span>
          </div>
          <p>Departments</p>
        </div>

      </div>
    </div>
  )
} 

export default Navbar
