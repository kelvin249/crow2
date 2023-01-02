import * as React from "react"
import Sidebar from '../components/Sidebar'
import { Seo } from "../components/seo"

import Swoop from '../components/Swoop'
import Footer from '../components/Footer'

const IndexPage = (props) => {
  console.log(props)
  return (
    <>
    <Sidebar></Sidebar>
      <Swoop />
      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => (
  <Seo meta name="description" content="Playing with Fire" />
)