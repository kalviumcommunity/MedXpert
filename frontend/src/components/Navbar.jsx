import React, { useState } from 'react';
import * as assets from '../assets/assets';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false); // State to show/hide the menu
    const [token, setToken] = useState(true);

    const toggleMenu = () => {
        setShowMenu(prev => !prev); // Toggle the menu visibility
    }

    return (
        <div className="flex item-center justify-between text-sm py-4 md-5 border-b border-b-gray-400">    
            <img onClick={()=>navigate('/')} className='w-15 cursor-pointer' src={assets.assets.logo} alt="" />
            <ul className='hidden md:flex item-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>HOME</li>
                    <hr className='broder-none outline-none h-0.5 bg-[#E0AA94] w-3/5m-auto hidden' />
                </NavLink>
                <NavLink to='/doctors'>
                    <li className='py-1'>ALL DOCTORS</li>
                    <hr className='broder-none outline-none h-0.5 bg-[#E0AA94] w-3/5m-auto hidden' />
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1'>ABOUT</li>
                    <hr className='broder-none outline-none h-0.5 bg-[#E0AA94] w-3/5m-auto hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token ? (
                        <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <img 
                                className='w-8 rounded-full' 
                                src={assets.assets.profile_pic} 
                                alt="" 
                                onClick={toggleMenu} // Toggle the menu when clicking the profile
                            />
                            <img className='w-2.5' src={assets.assets.dropdown_icon} alt="" />

                            {/* Conditional rendering of the menu */}
                            {showMenu && (
                                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20'>
                                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                        <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                        <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                        <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button onClick={()=>navigate('/login')} className='bg-[#C1694F] text-white px-2 text-sm py-2 rounded-full font-light hidden md:block'>
                            Create Account
                        </button>
                    )
                }
            </div>
        </div>
    );
}

export default Navbar;
