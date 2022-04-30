import React from 'react'
// import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { previewTitle } from './LinksItem.module.css'

const LinksItem = ({ mediaLink }) => {
  console.log(mediaLink)
  const image = getImage(mediaLink.image)

  return (

    <div className={previewTitle} >
      <h4 className={previewTitle}>
        <a href={`${mediaLink.link}`} target='_blank '>
          <GatsbyImage alt="" image={image} />{mediaLink.caption}
        </a>
      </h4>
    </div >
  )
}
export default LinksItem