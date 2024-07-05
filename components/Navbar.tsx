import React from 'react'
import {logo} from "../public/assets/images/index";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='w-full bg-blue text-white'>
      <div className='max-w-Container mx-auto h-20 px-4 flex items-center justify-between gap-2'>

        <div className='h-12 px-5 rounded-full bg-transparent flex items-center 
                      gap-2 hover:bg-hoverBg duration-300 cursor-pointer'>
          <Image src={logo} className='w-44' alt='Logo' />
        </div>

      </div>
    </div>
  )
} 

export default Navbar
