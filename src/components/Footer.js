import React from 'react'

const Footer = () => {
  return (
    <div style={{display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                }} >
        <div> Copyright &copy; 2009-<script>document.write(new Date().getFullYear())</script> Crowlin Circus All Rights Reserved</div>
        <div> Built with <a href="https://gatsbyjs.com">Gatsby</a> by <a href="mailto:mcdog@dogrose.org">mcdog</a></div>
    </div>
  )
}
export default Footer