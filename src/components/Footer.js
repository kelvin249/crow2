import React from 'react'

const Footer = () => {

  const currentYear = new Date().getFullYear()

  return (
    <div style={{display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                }} >
        <div style={{color: '#3C4534'}}> Copyright &copy; 2009-{currentYear} Crowlin Circus All Rights Reserved</div>
        <div style={{color: '#3C4534'}}> Built with <a href="https://gatsbyjs.com">Gatsby</a> by <a href="mailto:mcdog@dogrose.org">mcdog</a></div>
    </div>
  )
}
export default Footer