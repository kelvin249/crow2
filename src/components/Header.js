import React from 'react'
import { Link } from 'gatsby'
import Sidebar from '../components/Sidebar'

import './base.css'
import {bmBurgerButton} from './Sidebar.css';

const Header = () => {
    return (
        <>
        <Sidebar></Sidebar>
        <div className='text'>
            <Link to="/" ><h3 style={{
                fontFamily: 'Circus',
                justifyContent: 'center',
                display: 'flex',
                color: 'orange'
                }}> Crowlin Circus</h3 >
            </Link>
        </div>
        </>
    )
}
export default Header

