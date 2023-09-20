import React, { useState } from 'react'
import { BsFillPersonVcardFill, BsGithub, BsLinkedin } from 'react-icons/bs/index.esm'
import { TbBrandGmail } from 'react-icons/tb/index.esm';


function SociaLinks() {
    const [getValue1, setValue1] = useState(0);
    const [getValue2, setValue2] = useState(0);
    const [getValue3, setValue3] = useState(0);
    const [getValue4, setValue4] = useState(0);
    return (
        <div className='z-30 fixed top-[35%] left-0'>
            <ul className='flex flex-col items-end gap-1 w-[150px] p-2 ml-[-100px] cursor-pointer'>
                <li
                    className="text-white flex text-[1.4rem] bg-gray-500 rounded-md w-full p-1"
                    style={{ transform: `translateX(${getValue1}px)` }}
                    onClick={(e) => {
                        if (getValue1 === 100) {
                            setValue1(0);
                        } else {
                            setValue1(getValue1 + 100);
                        }
                        setTimeout(() => { setValue1(0) }, 2500)
                    }}
                >
                    <a href='https://www.linkedin.com/in/ansuman-panigrahi-54890b244/' target='_blank' rel="noreferrer">Linkedin</a><span className="p-1 text-2xl ml-1"><BsLinkedin /></span>
                </li>

                <li
                    className="text-white flex text-2xl bg-gray-500 rounded-md w-full p-1"
                    style={{ transform: `translateX(${getValue2}px)` }}
                    onClick={(e) => {
                        if (getValue2 === 100) {
                            setValue2(0);
                        } else {
                            setValue2(getValue2 + 100);
                        }
                        setTimeout(() => { setValue2(0) }, 2500)
                    }}
                >
                    <a href="https://github.com/Ansuman-07" target='_blank' rel="noreferrer">GitHub</a><span className="p-1 ml-3"><BsGithub /></span>
                </li>
                <li
                    className="text-white flex text-2xl bg-gray-500 rounded-md w-full p-1"
                    style={{ transform: `translateX(${getValue3}px)` }}
                    onClick={(e) => {
                        if (getValue3 === 100) {
                            setValue3(0);
                        } else {
                            setValue3(getValue3 + 100);
                        }
                        setTimeout(() => { setValue3(0) }, 2500)
                    }}
                >
                    <a className='ml-[-2.6px]' href='./resume.pdf' target='_blank' rel="noreferrer" download={false}>Resume</a><span className="p-1 "><BsFillPersonVcardFill /></span>
                </li>
                <li
                    className="text-white flex text-2xl bg-gray-500 rounded-md w-full p-1"
                    style={{ transform: `translateX(${getValue4}px)` }}
                    onClick={(e) => {
                        if (getValue4 === 100) {
                            setValue4(0);
                        } else {
                            setValue4(getValue4 + 100);
                        }
                        setTimeout(() => { setValue4(0) }, 2500)
                    }}
                >
                    <a className='ml-5' href='mailto:ansumanpanigrahi00p@gmail.com' target='_blank' rel="noreferrer">Mail</a><span className="p-1 ml-6"> <TbBrandGmail /> </span>
                </li>
            </ul>
        </div>
    )
}

export default SociaLinks