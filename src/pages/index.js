import * as React from "react"
import Helmet from 'react-helmet'
import Sidebar from '../components/Sidebar'
import Swoop from '../components/Swoop'
import Footer from '../components/Footer'

const IndexPage = (props) => {
  console.log(props)
  const siteTitle = "Crowlin Circus"
  return (
    <>
    <Sidebar></Sidebar>
    <Helmet>
        <html lang="en" />
        title={siteTitle} 
        <meta name="google-site-verification" content="s4pYhrxydlzSdI13cOiwWWrxqpBx4z7V6ntV0s3sNMI" />
        </Helmet>
      <Swoop />
      <Footer />
    </>
  )
}

export default IndexPage

