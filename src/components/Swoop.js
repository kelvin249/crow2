
import React from 'react'
import { Link } from 'gatsby'
import { gsap } from 'gsap'

import { container, logo, pwf, button, menu } from './Swoop.module.css'

const Swoop = () => {

    const { useRef, useEffect } = React
    const logoRef = useRef(null)
    const pwfRef = useRef(null)

    useEffect(() => {
        gsap.to(logoRef.current, {
            y: "30vh",
            scale: 7,
            ease: "back.out",
            duration: 0.7
        })
        gsap.to(pwfRef.current, {
            opacity: 1,
            delay: 0.3,
            duration: 2
        })
        gsap.to("button", { opacity: 1, delay: 1, stagger: 0.1 })
    }, []);

    return (
        <div className={container}>
            <img src="./logo3.jpg" alt="" className={logo} ref={logoRef} />
            <img src="./pwf.jpg" alt="" className={pwf} ref={pwfRef} />
            <div className={menu}>
                <Link to="/videos"><button className={button} >Videos</button></Link>
                <Link to="/photos"><button className={button} >Photos</button></Link>
<<<<<<< HEAD
=======
                {/* <Link to="links"><button className={button} >Links</button></Link> */}
>>>>>>> master
                <Link to="about"><button className={button} >About</button></Link >
            </div>
        </div>
    )
}
export default Swoop