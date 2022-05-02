import { useStaticQuery, graphql } from "gatsby"

export const useSwoopData = () => {
  const { swoop } = useStaticQuery(
    graphql`
      query SwoopData {
            allFile(filter: {relativePath: {eq: "logo.jpg"}}) {
              edges {
                node {
                  id
                  relativePath
                  childImageSharp {
                    gatsbyImageData(formats: WEBP)
                  }
                }
              }
            }
          }
    `
  )
  return SwoopData
}