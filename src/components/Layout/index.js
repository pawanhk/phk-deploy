import React from 'react'
import Navbar from '../Navbar'

import './index.scss'
import { Outlet } from 'react-router-dom'


const Layout = () => {
    return( 
    <div className="AP"> 
        <Navbar/>
        <div className='page'>
            <Outlet />
        </div>
    </div>
    
)
}

export default Layout

