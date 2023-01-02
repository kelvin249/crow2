import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import Hero from '../components/Hero'
import Slideshow from '../components/slideshow'

const BlogPostTemplate = (props) => {
  console.log(props)
  const post = props.data.contentfulPhotoPost
  console.log(post)
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
