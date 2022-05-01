import * as React from "react"
import { graphql } from 'gatsby'
// import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Grid from '../components/Grid'

const VideoPage = (props) => {
  console.log(props)
  // const siteTitle = props.data.site.siteMetadata.title
  const videoLinks = props.data.allContentfulVideoLink.edges


  console.log(videoLinks);



  return (
    <Layout location={props.location} >
      <div style={{ background: '#000' }}>
        {/* <Helmet title={siteTitle} /> */}

        <div className="wrapper">
          <h2 className="section-headline, pageTitle">Videos</h2>

          <ul className="article-list">
            {videoLinks.map(({ node }) => {
              console.log(node)
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
      allContentfulVideoLink {
        edges {
          node {
            id
            altText
            duration
            views
            image {
              gatsbyImageData(placeholder: BLURRED,
                 formats: WEBP)
            }
            link
          }
        }
      }
    }
  
`