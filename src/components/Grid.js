import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { previewTitle } from './Grid.module.css'

const Grid = ({ mediaLink }) => {
  // console.log(mediaLink)
  const image = getImage(mediaLink.image)
  return (
    < div className={previewTitle} >
      <h4 className={previewTitle}>
        <Link
          to={`${mediaLink.link}`} >
          <GatsbyImage className={image} alt="" image={image} />
          {mediaLink.caption}
        </Link>
      </h4>
    </div >
  )
}
export default Grid