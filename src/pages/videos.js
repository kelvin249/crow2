import * as React from "react"
import { graphql } from 'gatsby'
// import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Grid from '../components/Grid'

const VideoPage = (props) => {
  console.log(props)
  // const siteTitle = props.data.site.siteMetadata.title
  const mediaLinks = props.data.allContentfulMediaLink.edges
  // const logo = props.data.allContentfulAsset.edges
  // console.log(logo);
  // console.log(mediaLinks);



  return (
    <Layout location={props.location} >
      <div style={{ background: '#000' }}>
        {/* <Helmet title={siteTitle} /> */}

        <div className="wrapper">
          <h2 className="section-headline, pageTitle">Videos</h2>
          <ul className="article-list">
            {mediaLinks.map(({ node }) => {
              return (
                <li key={node.altText}>
                  <Grid mediaLink={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default VideoPage

export const videoPageQuery = graphql`
  query videosPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulMediaLink(filter: {set: {eq: "/videos/"}}) {
      edges {
        node {
          id
          altText
         image {
          gatsbyImageData(placeholder: BLURRED, formats: AUTO)
        }
          caption
          link
          order
          set
        }
      }
    }

  }
`