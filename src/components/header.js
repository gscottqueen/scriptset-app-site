import React from 'react'

import imgLogo from './written-logo.svg'

const headingStyles = { 
  "margin" : "0"
}

const taglineStyles = { 
  "fontSize" : "small",
  "position" : "relative",
  "top" : "-2.5rem",
  "right" : "-4rem" 
}

const logoStyle = { 
  "width" : "200px"
}

const Header = ({ tagline }) => (
  <div>
    <h1 style={ headingStyles }><img style={ logoStyle } src={ imgLogo }></img></h1>
    <span style={ taglineStyles }>{ tagline }</span>
  </div>
)

export default Header