import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Information from './pages/Information/Information'
import Guide from './pages/Guide/Guide'
import Contact from './pages/Contact/Contact'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element ={ <Home />} />
            <Route path='/information' element ={ <Information />} />
            <Route path='/guide' element ={ <Guide />} />
            <Route path='/contact' element ={ <Contact />} />
        </Routes>
    )
}

export default AllRoutes