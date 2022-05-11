import * as React from "react"
import Helmet from 'react-helmet'
import Sidebar from '../components/Sidebar'
import Swoop from '../components/Swoop'

const IndexPage = (props) => {
  console.log(props)
  const siteTitle = "Crowlin Circus"
  return (
    <>
    <Sidebar></Sidebar>
    <Helmet>
        <html lang="en" />
        title={siteTitle} 
        {/* <meta name="google-site-verification" content="UX2f3ugRNrAs75YMv-D5gAHK_s2FGCfwzJV_392nSfw"/> */}
        </Helmet>
      <Swoop />
    </>
  )
}

export default IndexPage

