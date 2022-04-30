import React from 'react'
import { Link } from 'gatsby'

import { button } from './Button.module.css'

function Button(props) {
    console.log(props)
    return (
        <button className={button} >
            <Link to={props.to} >{props.caption} </Link>
        </button>
    )
}
export default Button
