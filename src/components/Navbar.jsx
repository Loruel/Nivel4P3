import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='bg-transparent p-2 h-20 flex'>
            <div className='w-10 flex justify-center items-center ml-10'>
                <figure className='w-10 h-10'>
                    <img src="logo.svg" alt="" />
                </figure>
            </div>

            <div className='flex-1 flex justify-end items-center -m-4'>
                <div className='border-t border-gray-200 w-4/6'></div>
            </div>

            <div className='bg-slate-800 w-1/2 flex items-center justify-center -mr-2'>
                <div className='text-white text-xs w-3/4 flex'>

                    <Link to={'/'}>
                        <button className='flex mr-4'>
                            <p className='mr-2 font-semibold'>
                                00
                            </p>
                            <p>
                                HOME
                            </p>
                        </button>
                    </Link>

                    <Link to={'/destination'}>
                        <button className='flex mr-4'>
                            <p className='mr-2 font-semibold'>
                                01
                            </p>
                            <p>
                                DESTINATION
                            </p>
                        </button>
                    </Link>

                    <Link to={'/crew'}>
                        <button className='flex mr-4'>
                            <p className='mr-2 font-semibold'>
                                02
                            </p>
                            <p>
                                CREW
                            </p>
                        </button>
                    </Link>

                    <Link to={'/technology'}>
                        <button className='flex mr-4'>
                            <p className='mr-2 font-semibold'>
                                03
                            </p>
                            <p>
                                TECHNOLOGY
                            </p>
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}
