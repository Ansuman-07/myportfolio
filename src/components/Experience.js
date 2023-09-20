import React from 'react'
import html from './pngfolder/htmllogo.png'
import css from './pngfolder/csslogo.png'
import javascript from './pngfolder/javascriptlogo.png'
import react from './pngfolder/reactlogo.png'
import tailwind from './pngfolder/tailwindlogo.png'
import java from './pngfolder/javalogo.png'
import python from './pngfolder/pythonlogo.png'
import bootstrap from './pngfolder/bootstrap.png'

function Experience() {
    const ExpArray = [
        {
            id: 1, src: html, title: "html", style: " border-orange-500"
        },
        {
            id: 2, src: css, title: "css", style: " border-orange-500"
        },
        {
            id: 3, src: javascript, title: "avascript", style: " border-orange-500"
        },
        {
            id: 4, src: react, title: "react", style: " border-orange-500"
        },
        {
            id: 5, src: tailwind, title: "tailwind", style: " border-orange-500"
        },
        {
            id: 6, src: bootstrap, title: "bootstrap", style: " border-orange-500"
        },
        {
            id: 7, src: java, title: "java", style: " border-orange-500"
        },
        {
            id: 8, src: python, title: "python", style: " border-orange-500"
        }

    ];
    return (
        <div id="EXPERIENCE" className='h-[100%] min-h-screen w-screen bg-gradient-to-b from-gray-800 via-gray-950 to-black flex items-center justify-center pt-4'>

            <div className="card text-white flex flex-col md:w-[80%] w-[95%] lg:w-[60%] h-full items-center justify-center ">
                <div className="flex flex-col items-center justify-center pb-4 w-[85%]">
                    <div className=" text-xl md:text-4xl border-b-4 border-gray-500 ">EXPERIENCE</div>
                    <h1 className='text-xl pt-2'>These are some of the Technologies I've Experience in</h1>
                </div>
                <div className="body mt-2 w-[85%]  h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">

                    {ExpArray.map(({ id, src, title, style }) => {
                        return <div key={id} className={`logo max-w-[50%] sm:max-w-[40%] md:max-w-[60%] bg-white p-2 rounded-lg  border-b-4 border-l-4 border-r-4 border-opacity-80 shadow-lg mb-2 mx-auto ${style}`}  >
                            <img src={src} className='w-[90%] h-full' />
                        </div>
                    })}

                </div>
            </div>

        </div>
    )
}

export default Experience