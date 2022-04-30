import React from 'react'
// import { container } from './container.module.css'

const Container = ({ children, maxWidth = 1180 }) => (
  <div style={{
    maxWidth: maxWidth,
    margin: '0 auto'
  }}>{children}</div>
)
export default Container