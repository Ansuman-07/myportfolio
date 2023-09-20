import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import myimage from './profile-pic.jpg'
import { BiSolidRightArrowAlt } from 'react-icons/bi/index.esm';
import {Link} from 'react-scroll';
function Home() {
    return (
        <div id="HOME" className=' flex items-center bg-gradient-to-b pt-20 from-black via-gray-950 to-gray-800 h-[100%] min-h-screen w-screen'>
            <div className="flex mx-auto text-white items-center justify-center flex-col  w-[90%] p-6 md:flex-row  md:max-w-[60%]">
                <div className="right h-auto max-w-[80%] md:h-full md:w-full md:min-w-[40%] md:max-w[60%]">
                    <img src={myimage} alt="image here" className='w-full h-full' />
                </div>
                <div className="left flex flex-col justify-between p-2">
                    <div className="head text-2xl md:text-4xl md:mb-[3rem]"><TypeAnimation sequence={["Hi I'm Ansuman", 3000, "I'm a computer science Student 👨‍🎓 ", 3000, "I'm a <coder>", 3000, "Welcome", 3000]} cursor={false}/></div>
                    <div className="body">
                        {/* <TypeAnimation sequence={["  I'm Ansuman", 5000, " I'm a coder", 1000, " Im interested in web development", 1000]} /> */}

                        I'm Ansuman, a passionate computer science student with a deep love for web development. Proficient in HTML, CSS, JavaScript, and React.js. Explore my portfolio to see how I've turned my passion into impactful web projects. Feel free to get in touch with me at contact section or email me . Let's connect! .

                        <button className='flex items-center group rounded-md text-white p-2 mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 font-bold cursor-pointer'><Link to="PORTFOLIO" smooth duration={500}>PortFolio</Link><span className='group-hover:rotate-90 duration-300'><BiSolidRightArrowAlt size={20} /></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home