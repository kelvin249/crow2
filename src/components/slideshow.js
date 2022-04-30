import React, { useState } from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function SlideShow(allFile) {
  const [index, setIndex] = useState(0)
  console.log(allFile);

  //Minus 1 for array offset from 0
  const length = allFile.props.length - 1

  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = allFile.props[index]
  console.log(index)

  const image = getImage(allFile.props[index].node.childImageSharp)
  console.log(image)

  return (
    <div>
      <div>
        <GatsbyImage
          image={image}
          key={node.id}
          alt={node.name.replace(/-/g, " ").substring(2)}
        />
      </div>
      <div>
        <button onClick={() => handlePrevious()}>Previous</button>
        <button onClick={() => handleNext()}>Next</button>
      </div>
    </div>
  )
}
export default SlideShow