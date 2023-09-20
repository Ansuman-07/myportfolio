import React from 'react'
import notes from './portfolio-png/notesapp.png'
import weather from './portfolio-png/weatherapp.png'
import news from './portfolio-png/newsapp.png'
import chatbot from './portfolio-png/chatbot.png'


function Portfolio() {

  const projects=[
    {
    id:1,name:"Notes App",image:notes ,demo:"https://ansuman-07.github.io/easynotes.github.io/",sourcecode:"https://github.com/Ansuman-07/easynotes.github.io"
  },
  {
    id:2,name:"News App",image:news ,demo:"http://localhost:3001/",sourcecode:"https://github.com/Ansuman-07/"
  },
  {
    id:3,name:"Weather App",image: weather ,demo:"https://ansuman-07.github.io/weatherpro.github.io/",sourcecode:"https://github.com/Ansuman-07/weatherpro.github.io"
  },
  {
    id:4,name:"Search Bot",image:chatbot ,demo:"https://ansuman-07.github.io/chatbot.github.io/",sourcecode:"https://github.com/Ansuman-07/chatbot.github.io"
  },
]

  return (
    <div id="PORTFOLIO" className=' min-h-screen h-[100%] w-screen bg-gradient-to-b from-black via-gray-950 to-gray-800 flex justify-center items-center p-2'>

      <div className="card text-white flex flex-col md:w-[80%] w-[55%] h-[90%] items-center justify-center ">
        <div className="flex flex-col items-center justify-center">
          <div className=" text-4xl border-b-4 border-gray-500 pb-2">Portfolio</div>
          <h2>Check Out Some of My works </h2>
        </div>



        <div className="body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  h-full items-center justify-center mt-4 gap-y-4">

        {projects.map(({id,name,image,demo,sourcecode})=>{

        return   <div key={id} className="card flex flex-col items-center md:w-[55%] mx-auto ">
            <div className="title text-2xl">{name}</div>
            <div className="image w-[90%] md:h-[200px]">
              <img src={image} alt="" className='w-full h-full rounded-md' />
            </div>
            <div className="btns w-[90%] flex">
              <a href={demo} target='_blank' rel="noreferrer" className="w-[40%] text-white p-2  bg-gradient-to-r from-cyan-500 to-blue-600 font-bold cursor-pointer hover:scale-105 rounded-l-md">Show</a>
              <a href={sourcecode} target='_blank' rel="noreferrer" className=" w-[60%] text-white p-2  bg-gradient-to-r  from-blue-600 to-cyan-500 font-bold cursor-pointer hover:scale-105 rounded-r-md">Source Code</a>
            </div>
          </div>
})}
          


        </div>


      </div>

    </div>
  )
}

export default Portfolio