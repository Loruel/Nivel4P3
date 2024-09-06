import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DestinationPage from './pages/DestinationPage'
import CrewPage from './pages/CrewPage'
import TechnologyPage from './pages/TechnologyPage'
import Navbar from './components/Navbar'

export default function AppRoutes() {
    return (
        <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='destination/' element={<DestinationPage />} />
            <Route path='crew/' element={<CrewPage />} />
            <Route path='technology/' element={<TechnologyPage />} />


            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )
}
