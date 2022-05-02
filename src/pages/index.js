import * as React from "react"
import Helmet from 'react-helmet'
import Sidebar from '../components/Sidebar'
import Swoop from '../components/Swoop'
import SwoopData from '../hooks/useSwoopData'

const IndexPage = (props) => {
  console.log(props)
  const siteTitle = "Crowlin Circus"
  return (
    <>
    <Sidebar></Sidebar>
      <Helmet title={siteTitle} />
      <Swoop />
    </>
  )
}

export default IndexPage

