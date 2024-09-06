import React from 'react'
import Navbar from './Navbar'


export default function Crew() {
    return (
        <div className="h-screen bg-cover bg-center " style={{ backgroundImage: "url('/background-crew-desktop.jpg')" }}>

            <Navbar />

            <div className='grid grid-cols-2'>
                <div className='flex flex-col'>
                    <div className='flex'>
                        <h1 className='mb-4 text-base text-white ml-24 mr-2'>
                            02
                        </h1>
                        <p className=' text-base font-semibold text-white'>
                            MEET YOUR CREW
                        </p>
                    </div>

                    <div className='flex flex-col justify-end items-center p-5 h-full'>

                        <div className='text-white w-2/3'>
                            <h2 className='mb-4 text-lg'>
                               FLIGHT ENGINEER
                            </h2>
                            <h1 className='mb-8 text-5xl'>
                                ANOUSHEH ANSARI
                            </h1>
                            <p className='mb-4 text-sm'>
                                Anousheh Ansari is an Iranian American engineer and cofounder of Prodea Systems. Ansari was the fourth selffunded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space
                            </p>
                        </div>

                    </div>

                </div>

                <div className='flex flex-col justify-end items-center p-5 h-full'>

                    <div className='w-2/3 mb-16 h-2/5 flex items-center justify-center'>
                        <img src="/image-anousheh-ansari.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}
