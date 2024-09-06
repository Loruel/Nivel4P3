import React from 'react'
import Navbar from './Navbar'

export default function Home() {
    return (
        <>
            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background-home-desktop.jpg')" }}>

                <Navbar />

                <div className='grid grid-cols-2 mt-14'>
                    <div className='flex flex-col justify-end items-center p-5 h-full'>

                        <div className='text-white w-2/3'>
                            <h2 className='mb-4 text-lg'>
                                SO, YOU WANT TO TRAVEL TO
                            </h2>
                            <h1 className='mb-14 text-9xl'>
                                SPACE
                            </h1>
                            <p className='mb-4 text-sm'>
                                Let´s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edgr of it. Well sit back, and relax because we´ll give ypu a trully out of this world experience!
                            </p>
                        </div>

                    </div>

                    <div className='flex flex-col justify-end items-center p-5 h-full'>

                        <div className='w-2/3 mb-16 h-2/5 flex items-center justify-center'>
                            <div className='bg-white w-48 h-48 rounded-full flex items-center justify-center'>
                                <p className='text-2xl'>
                                    EXPLORE
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
