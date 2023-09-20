import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from 'react-scroll';


function Navbar() {
    const [nav, setNav] = useState(false);
    const links = [
        { key: 1, link: "home" }, { key: 2, link: "about" }, { key: 3, link: "portfolio" }, { key: 4, link: "experience" }, { key: 5, link: "contact" }
    ]
    return (
        <div className='flex justify-between p-4 text-white  bg-black w-screen h-20 fixed z-40'>
            <p>
            <img src="https://see.fontimg.com/api/renderfont4/rnlA/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzEwMTAxMCIsInQiOjF9/QW5zdW1hbg/angelina.png"  alt="Lettering fonts" height={100} width={105}/> </p>

            <ul className='hidden md:flex md:text-center md:pt-3 md:absolute right-0 pr-4 '>
                {links.map(({ key, link }) => {
                    return <li key={key} className='px-4 text-gray-400 text-2xl cursor-pointer capitalize hover:scale-110 duration-300 h-full text-center'>
                        <Link to={link.toLocaleUpperCase()} smooth duration={500} offset={-50}>{link}</Link>
                        </li>
                })}
            </ul>


            <div onClick={() => { setNav(!nav) }} className='cursor-pointer z-10 text-gray-400 p-2 absolute right-10 md:hidden '>
                {nav ? <FaTimes className=' hover:text-red-500 duration-150' size={30} /> : <FaBars className=' hover:text-blue-700 duration-150' size={30} />}
            </div>
            <div>
                {nav ? (
                    <ul className='flex flex-col bg-gradient-to-b from-black via-black to-gray-600 absolute z-20 top-[5rem] right-0 left-0 w-full text-center md:hidden'>
                        {links.map(({ key, link }) => {
                            return <li key={key} className='p-4 text-gray-400 capitalize  hover:scale-105 duration-300 cursor-pointer'>
                                 <Link to={link.toLocaleUpperCase()} smooth duration={500}>{link}</Link>
                            </li>
                        })}
                    </ul>
                ) : null}
            </div>

        </div>
    )
}

export default Navbar