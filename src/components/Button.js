import React from 'react'
import { Link } from 'gatsby'

import { button } from './Button.module.css'

function Button({to, caption}) {
    // console.log(props)
    return (
        <button className={button} >
            <Link to={to} >{caption} </Link>
        </button>
    )
}
export default Button
