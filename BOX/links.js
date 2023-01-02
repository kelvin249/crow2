import * as React from "react"
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import LinksItem from "../components/LinksItem"

const LinksPage = (props) => {
    // console.log(props)
    const mediaLinks = props.data.allContentfulMediaLink.edges
    // console.log(mediaLinks);

    return (
        <Layout location={props.location} >
            <div style={{ background: '#000' }}>

                <div className="wrapper">
                    <h2 className="section-headline, pageTitle">Links</h2>
                    <div className="list">
                        <ul className="article-list">
                            {mediaLinks.map(({ node }) => {
                                console.log(node.altText)
                                return (
                                    <li key={node.id}>
                                        <LinksItem mediaLink={node} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default LinksPage

export const linkPageQuery = graphql`
query PageQuery {
  site {
    siteMetadata {
        title
        }
    }
    allContentfulMediaLink(filter: { set: { eq: "/links/" } }) {
    edges {
      node {
                id
                altText
                caption
                link
                order
                set 
                image {
                    gatsbyImageData(placeholder: BLURRED, formats: AUTO)
                }
            }
        }
    }
}
`

