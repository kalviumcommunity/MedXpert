import React from 'react'
import { assets } from '../assets/assets'
import  group_profile from '../assets/group_profiles.png'
const  header = () => {
  return (
    <div className='flex flex-col md:flex-row bg-[#E0AA94] rounded-lg pc-6 md:px-10 lg:px-20'>
        {/*------- Left Side ---------*/}
        <div className='md:w-1/2 flex-col item-start justify-center py-10 m-auto md:py-[10vw] md:mb-[-30px] ' >
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg my-4'>
            Book Appointment <br/>With Trusted Doctors
            </p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light my-4'>
                <img className='w-28'src={group_profile} alt=""/>
                <p>Simply browse through our extensive list of trusted doctors, <br className='hidden'/>schedule your appointment hassle-free.</p>
            </div>
            <a herf="#speciality" className='flex items-center gap-2 w-52 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer'>
            Book appointment <img className='w-4' src={assets.arrow_icon} alt=""/>
            </a>

        </div>
        {/*------- Right Side ---------*/}
        <div className="md:w-1/2  flex items-center justify-center h-[400px] md:h-auto">
            <img className=" size-96  object-cover rounded-lg" src={assets.header_img} alt=""/>

        </div>
    
    </div>
  )
}

export default header