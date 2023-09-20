import React from 'react'

function Contact() {
    return (
        <div id="CONTACT" className='h-[100%] min-h-screen w-screen bg-gradient-to-b from-black  via-gray-950 to-gray-800 flex items-center justify-center'>

            <div className="card text-white flex flex-col md:w-[60%] w-[80%] items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <div className=" text-xl md:text-4xl border-b-4 border-gray-500 ">Contact</div>
                    <h1 className='pt-2 text-xl'> Lets have a conversation !</h1>
                </div>
                <div className="body mt-4 w-full sm:w-[80%] md:w-[90%] lg:w-[70%]">
                    <form className="bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4" method='POST' action='https://www.formbackend.com/f/ecc6c30cb9a41584' acceptCharset="UTF-8" target="_blank">
                        <div className="mb-4">
                            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input name='Name' className="shadow bg-inherit appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="username">
                                Email
                            </label>
                            <input name='Email' className="shadow bg-inherit appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="example@gmail.com" />
                        </div>
                        <div className="area text-gray-400">
                            <textarea  name="message" rows={5} className='w-full bg-inherit focus:outline-none border rounded-md p-3' defaultValue="message me">
                               
                            </textarea>
                        </div>
                        <button type='submit' className='flex items-center rounded-md text-white p-2 mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 font-bold cursor-pointer hover:scale-105 hover:border-2 duration-75 '>Lets talk</button>
                    </form>


                </div>
            </div>

        </div>
    )
}

export default Contact