import React from 'react'
import Navbar from './Navbar'


export default function Destination() {
    return (
        <div className="h-screen bg-cover bg-center " style={{ backgroundImage: "url('/background-destination-desktop.jpg')" }}>

            <Navbar />

            <div className='flex'>
                <h1 className='mb-4 text-base text-white ml-24 mr-2'>
                    01
                </h1>
                <p className=' text-base font-semibold text-white'>
                    PICK YOUR DESTINATION
                </p>
            </div>

            <div className='grid grid-cols-2'>

                <div className='flex flex-col justify-end items-center p-5'>

                    <img className='w-80 h-80'
                        src="/image-mars.webp" alt="" />

                </div>

                <div className='flex flex-col items-start p-5 text-white'>

                    <div className='text-xs w-full mb-10'>
                        <button className='mr-4 w-1/12'>
                            MOON
                        </button>
                        <button className='mr-4 w-1/12'>
                            MARS
                        </button>
                        <button className='mr-4 w-1/12'>
                            EUROPA
                        </button>
                        <button className='mr-4 w-1/12'>
                            TITAN
                        </button>
                    </div>

                    <div className='text-8xl mb-10'>
                        MARS
                    </div>

                    <div className='text-sm w-2/3 mb-10'>
                        Don´t forget to pack your hiking boots. You´ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It´s two and a half times the size of Everest!
                    </div>

                    <div className='flex-1 flex justify-center items-center '>
                        <div className='border-t-8 border-gray-200 w-4/6 dark:border-white'></div>
                    </div>

                    <div className='flex'>
                        <div className='mr-10'>
                            <p className='text-xs'>
                                AVG. DISTANCE
                            </p>
                            <h1 className='text-xl'>
                                225 MIL. KM
                            </h1>
                        </div>
                        <div>
                            <p className='text-xs'>
                                EST. TRAVEL TIME
                            </p>
                            <h1 className='text-xl'>
                                9 MONTHS
                            </h1>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}
