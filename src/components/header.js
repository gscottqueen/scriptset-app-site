import React from 'react'

import imgLogo from './scriptset-logo-web.svg'

const headingStyles = { 
  "margin" : "0"
}

const taglineStyles = { 
  "fontSize" : "small",
  "position" : "relative",
  "top" : "-1.8rem",
  "right" : "-9.5rem" 
}

const logoStyle = { 
  "width" : "250px"
}

const Header = ({ tagline }) => (
  <div>
    <h1 style={ headingStyles }><img style={ logoStyle } src={ imgLogo }></img></h1>
    <span style={ taglineStyles }>{ tagline }</span>
  </div>
)

export default Header