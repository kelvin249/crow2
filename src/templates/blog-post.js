import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
// import Hero from '../components/Hero'
import Slideshow from '../components/slideshow'

const BlogPostTemplate = (props) => {
  console.log(props)
  const post = props.data.contentfulPhotoPost
  console.log(post)
  const siteTitle = props.data.site.siteMetadata.title
  console.log(siteTitle)
  const allFile = props.data.allFile
  console.log(allFile)
  const search = props.pageContext.slug.replace(/-/g, '_')
  console.log(search)

  const slides = allFile.edges.filter(function (node) {
    return node.node.name.slice(0, -2) === search
  })

  console.log(slides)

  return (
    <Layout location={props.location} >
      <div style={{ background: '#000' }}>
        <Helmet title={`${siteTitle}`} />
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>

          <Slideshow props={slides} />

        </div>
      </div>
    </Layout>
  )
}


export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPhotoPost(slug: { eq: $slug }) {
      title
      slug
    }
    allFile(filter: {relativeDirectory: {eq: $slug}}) {
   
      edges {
        node {
          id
          name
          childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: AUTO)
        }
        }
      }
      totalCount
    }
  }
`
