import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-101mt-40 text-sm'>

            {/*------- left section ---------*/}
            <div>
                <img className='md-5 w-40' src={assets.logo} alt=""/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>MedXpert is a smart hospital management system that streamlines operations and enhances patient care.</p>

            </div>

            {/*------- center section ---------*/}
            <div>
                <p className='text-xl font-medium md-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Privacy policy</li>

                </ul>

            </div>

            {/*------- right section ---------*/}
            <div>
                <p className='text-xl font-medium md-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-456-9035</li>
                    <li>shanmugapriya@gmail.com</li>
                </ul>

            </div>
        </div>

        {/*------- copy right ---------*/}
        <div> 
             <hr/>
             <p className='py-5 text-center'>Copyright © 2025 - All Right Reserved.</p>

        </div>
    </div>
  )
}

export default Footer