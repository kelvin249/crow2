import React from 'react'
import { Link } from 'gatsby'
import { button, menu } from './navigation.module.css'

const Navigation = (props) => {
  console.log(props.location.pathname)

  return (
    <nav role="navigation" >
      <div className={menu}>
        <Link to="/"><button className={button} >Home</button></Link>
        {(props.location.pathname === "/videos") ? null :
          <Link to="/videos"><button className={button} >Videos</button></Link>}
        {(props.location.pathname === "/photos") ? null :
          <Link to="/photos"><button className={button} >Photos</button></Link>}
        {/* {(props.location.pathname === "/links") ? null :
          <Link to="/links"><button className={button} >Links</button></Link>} */}
        {(props.location.pathname === "/about") ? null :
          <Link to="/about"><button className={button} >About</button></Link >}
      </div>
    </nav>
  )
}
export default Navigation
