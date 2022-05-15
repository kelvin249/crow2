import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {

  const currentYear = new Date().getFullYear()

  return (
    <div style={{display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                }} >

        <div style={{display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
      }}>          
        <ul style={{display: 'flex',
                    flexDirection: 'row',
                    width: '100vw',
                    justifyContent: 'space-around',
                    textDecoration: 'none'
      }}> 
          <li><Link to="/">Home</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/photos">Photos</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        </div>

        <div style={{color: '#3C4534'}}> Copyright &copy; 2009-{currentYear} Crowlin Circus All Rights Reserved</div>
        <div style={{color: '#3C4534'}}> Built with <a href="https://gatsbyjs.com">Gatsby</a> by <a href="mailto:mcdog@dogrose.org">mcdog</a></div>
    </div>
  )
}
export default Footer