import React from 'react'
import { NavLink } from 'react-router-dom'
import {SocialIcon} from 'react-social-icons'

export default function Navbar() {
    return (
        <header className='bg-red-500'>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex'>
                    <NavLink to= '/' activeClassName='text-white' className='inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest'> Riki </NavLink>
                    <NavLink to= '/posts' activeClassName=' text-red-100 bg-red-700' className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'> Blog </NavLink>
                    <NavLink to= 'projects' activeClassName=' text-red-100 bg-red-700' className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'> Projects </NavLink>
                    <NavLink to= 'about' activeClassName=' text-red-100 bg-red-700' className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'> About Me </NavLink>
                </nav>
                <div className=' inline-flex py-3 px-3 my-6'>
                    <SocialIcon url='https://twitter.com/kungfukon' className=' mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
                    <SocialIcon url='https://in.pinterest.com/kungfukon/_saved/' className=' mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
                    <SocialIcon url='https://www.linkedin.com/in/riki-phukon-2b2a871b1/' className=' mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}