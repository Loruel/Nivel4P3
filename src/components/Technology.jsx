import React from 'react'
import Navbar from './Navbar'


export default function Technology() {
    return (
        <div className="h-screen bg-cover bg-center " style={{ backgroundImage: "url('/background-technology-desktop.jpg')" }}>

            <Navbar />

            <div className='grid grid-cols-2'>
                <div className='flex flex-col'>
                    <div className='flex'>
                        <h1 className='mb-4 text-base text-white ml-24 mr-2'>
                            03
                        </h1>
                        <p className=' text-base font-semibold text-white'>
                            SPACE LAUNCH 101
                        </p>
                    </div>

                    <div className='flex justify-end items-end p-5 h-full'>

                        <div className='mr-4  h-full flex flex-col justify-end p-1'>
                            <div className='w-16 h-16 border-2 border-white rounded-full flex justify-center items-center text-black bg-white mb-6'>
                                <p>
                                    1
                                </p>
                            </div>
                            <div className='w-16 h-16 border-2 border-white rounded-full flex justify-center items-center text-white mb-6'>
                                <p>
                                    1
                                </p>
                            </div>
                            <div className='w-16 h-16 border-2 border-white rounded-full flex justify-center items-center text-white mb-16'>
                                <p>
                                    1
                                </p>
                            </div>
                        </div>

                        <div className='text-white w-2/3 h-full flex flex-col justify-end'>
                            <h2 className='mb-4 text-lg'>
                               THE TERMINOLOGY
                            </h2>
                            <h1 className='mb-8 text-5xl'>
                               LAUNCH VEHICLE
                            </h1>
                            <p className='mb-4 text-sm'>
                               A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth´s surface to space, usually to Earth orbit or beyond.Our WEB-X carrier rocket is the most powerfull in operation. Stading 150 metres tall, it´s quite an awe-inspiring sight on the launch pad!
                            </p>
                        </div>

                    </div>

                </div>

                <div className='flex flex-col justify-end items-center p-5 h-full'>

                    <div className='w-2/3 mb-16 h-2/5 flex items-center justify-center'>
                        <img src="/image-launch-vehicle-portrait.jpg" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}
