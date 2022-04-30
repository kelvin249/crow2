import React from 'react'
// import { Link } from 'gatsby'
import './base.css'
import Container from './container'
import Navigation from './navigation'
import Header from './Header'
import Footer from './Footer'
// import Hero from './Hero'

const Layout = (props) => {
  // console.log(props)

  return (
    <Container>
      <Header />
      <Navigation location={props.location} />
      {props.children}
      <Footer />
    </Container >
  )
}
export default Layout
