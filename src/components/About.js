import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function About() {
    return (
        <div id="ABOUT" className='h-[100%] min-h-screen w-screen bg-gradient-to-b from-gray-800 via-gray-950 to-black flex justify-center items-center'>
            <div className="card flex flex-col max-w-[80%] justify-center items-center mx-auto h-full text-white">
                <div className="title text-4xl border-b-4 border-gray-500 mb-4">About</div>
                <div className="description text-xl md:text-2xl max-w-[80%] text-left">
                My journey into web development began with a curiosity to bring ideas to life in the digital world. As a computer science student, I've embraced the power of code to create web experiences that captivate and inspire. While my formal work experience is limited due to my academic commitments, I've done web development projects that have enriched my practical knowledge .
                 { <TypeAnimation sequence={["",20000," Make sure to check out them in portfolio section . My goal is to continue expanding my skills, contribute to innovative projects, and make a meaningful impact in the web development community .", 1000, ]} cursor={false}  />}


                </div>
            </div>
        </div>
    )
}

export default About